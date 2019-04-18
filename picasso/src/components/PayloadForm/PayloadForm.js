import React from 'react';
import { Form, FormGroup, Label, CustomInput, ButtonGroup, Button, Collapse, CardColumns, Row, Spinner } from 'reactstrap';

import StyleImages from './StyleImages';
import FormAlert from './FormAlert';
import UploadPreview from './UploadPreview';

export default class PayloadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        contentImg: null,
        styleID: null,
      },
      previewImg: null,
      method: 'method1',
    }
  }

  componentDidMount() {
    !this.props.styleImages.length
      && this.props.fetchStyleImages();
  }

  handleMethodSelect = e => {
    this.setState({
      method: e.target.id,
    })
  }

  handleUploadChange = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        contentImg: e.target.files[0],
      },
      previewImg: URL.createObjectURL(e.target.files[0]),
    });
  }

  handleStyleSelect = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        styleID: e.target.value,
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('content-image', this.state.formData.contentImg)
    formData.append('styleID', this.state.formData.styleID);
    this.state.method === 'method1'
      ? this.props.submitPayload(formData)
          .then(() => {
            !this.props.error &&
            this.props.history.push(`/result/${this.props.resultImages.request_key}`)
          })
      : this.state.method === 'method2'
          && this.props.submitDeepPayload(formData);
    this.setState({
      formData: {
        contentImg: null,
        styleID: null,
      },
      previewImg: null,
    })
  }

  render() {
    const submitting = this.props.submittingPayload;
    const noSubmit = submitting || this.state.formData.contentImg === null || this.state.formData.styleID === null || this.state.method === null;
    const hasToken = localStorage.getItem('token');

    return (
      <div className="PayloadForm">
        <FormAlert
          isOpen={this.props.processDeep}
          color='primary'
          text="Your request is now processing. An email with your processed image will be sent to the address associated with this account."
        />
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Row className='justify-content-between align-items-center' style={{padding: '0 1em'}}>
              <h3>
                { submitting
                    ? 'Submitting...'
                    : 'Choose an Image and Style'
                }
                
              </h3>
              <Button
                type='submit'
                disabled={noSubmit}
                color='warning'
                title='You must select a method, a style, and an image to process before submitting'
              >
                { !submitting
                    ? 'Submit'
                    : <Spinner size='sm' color='light' />
                }
              </Button>
            </Row>
          </FormGroup>
          <FormGroup>
            <Label style={{display: 'block'}} for="method-radio-btns">Pick a Method </Label>
            <ButtonGroup id="method-radio-btns">
              <Button
                id='method1'
                onClick={this.handleMethodSelect}
                color='primary'
                active={this.state.method === 'method1'}
                disabled={submitting}
              >
                Faster (on site)
              </Button>
              <Button
                id='method2'
                onClick={this.handleMethodSelect}
                color={hasToken ? 'primary' : 'secondary' }
                disabled={!hasToken || submitting}
                active={this.state.method === 'method2'}
                title='You must be logged in to select this option'
              >
                Higher Quality (email)
              </Button>
            </ButtonGroup>
          </FormGroup>
          <FormGroup>
            <Label for="upload-image">Pick an Image to Transform</Label>
            <CustomInput
              type="file"
              accept="image/*"
              id="upload-image"
              name="upload-image"
              label={this.state.formData.contentImg
                ? "Choose a different image"
                : "Choose your image"}
              onChange={this.handleUploadChange}
              disabled={submitting}
            />
            <Collapse isOpen={this.state.formData.contentImg !==null}>
              <UploadPreview
                previewImg={this.state.previewImg}
                contentImg={this.state.formData.contentImg}
              />
            </Collapse>
          </FormGroup>
          <FormGroup check style={{paddingLeft: '0'}}>
            <legend>
              {this.state.formData.styleID === null
                ? 'Select a Style'
                : `Currently Selected: "${this.props.styleImages.find(img => `${img.id}` === this.state.formData.styleID).title}"`
              }
            </legend>
            { !this.props.fetchingStyles
                ? <CardColumns>
                    <StyleImages
                      activeStyle={this.state.formData.styleID}
                      styleImages={this.props.styleImages}
                      baseURL={this.props.testURL}
                      handleStyleSelect={this.handleStyleSelect}
                      submitting={submitting}
                    />
                  </CardColumns>
                : <div style={{ textAlign: 'center', width: '100%', height: '100%' }}>
                    <Spinner size='xl' color='dark' style={{ height: '3em', width: '3em' }} />
                  </div>
            }
            
          </FormGroup>
        </Form>
      </div>
    )
  }
}
