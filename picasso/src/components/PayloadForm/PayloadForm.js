import React from 'react';
import { Collapse, Alert, Form, FormGroup, Label, CustomInput, ButtonGroup, Button, Media, CardColumns, Row, Spinner } from 'reactstrap';

import StyleImages from './StyleImages';
import FormAlert from './FormAlert';

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
            // .then(res => {
            !this.props.error
              && this.props.history.push('/result/0');
            // this.props.history.push(`/result/${res.data.request_key}`)
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
    const noSubmit = this.state.formData.contentImg === null || this.state.formData.styleID === null || this.state.method === null;
    const hasToken = localStorage.getItem('token');

    return (
      <div className="PayloadForm">
        <FormAlert
          isOpen={this.props.processDeep}
          color='primary'
          text="Your request is now processing. An email with your processed image will be sent to the address associated with this account."
        />
        {/* <Collapse isOpen={this.props.processDeep}>
          <Alert color="primary" isOpen={this.props.processDeep}>
            Your request is now processing. An email with your processed image will be sent to the address associated with this account.
          </Alert>
        </Collapse> */}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Row className='justify-content-between align-items-center' style={{padding: '0 1em'}}>
              <h3>
                <span className="spanIB">Choose an Image</span>{` `}
                <span className="spanIB">and Style</span>
              </h3>
              <Button
                type='submit'
                disabled={noSubmit}
                color='warning'
                // color={noSubmit ? 'secondary' : 'primary'}
                title='You must select a method, a style, and an image to process before submitting'
              >
                { !this.props.submittingPayload
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
              >
                Faster (on site)
              </Button>
              <Button
                id='method2'
                onClick={this.handleMethodSelect}
                color={hasToken ? 'primary' : 'secondary' }
                disabled={!hasToken}
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
            />
            { this.state.formData.contentImg !== null
                && <Media className='mt-3'>
                    <Media left middle
                      href={this.state.previewImg}
                      target='_blank'
                    >
                      <Media object className='mr-3 img-thumbnail' src={this.state.previewImg} alt='Click to view full size image' style={{maxWidth: '200px', backgroundColor: 'white'}} />
                    </Media>
                    <Media className='align-self-center'>
                      <Media body>
                        {this.state.formData.contentImg !== null
                            && this.state.formData.contentImg.name}
                      </Media>
                    </Media>
                  </Media>
          }
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
