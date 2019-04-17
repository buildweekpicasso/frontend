import React from 'react';
import { Form, FormGroup, Label, CustomInput, ButtonGroup, Button, Media, CardImg, CardColumns, Row } from 'reactstrap';

import StyleImages from './StyleImages';
import ResultImages from '../ResultImages';

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
    if(this.state.formData.contentImg !== null || this.state.formData.styleID !== null) {
      let formData = new FormData();
      formData.append('content-image', this.state.formData.contentImg)
      formData.append('styleID', this.state.formData.styleID);
      this.props.submitPayload(formData)
        .then(() => {
          this.props.history.push('/result');
        })
      this.setState({
        formData: {
          contentImg: null,
          styleID: null,
        },
        previewImg: null,
      })
    }
  }

  render() {
    const noSubmit = this.state.formData.contentImg === null || this.state.formData.styleID === null || this.state.method === null;

    return (
      <div className="PayloadForm">
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
                color={noSubmit ? 'secondary' : 'primary'}
                title='You must select a method, a style, and an image to process before submitting'
              >
                Submit
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
                color={localStorage.getItem('token') ? 'primary' : 'secondary' }
                disabled={!localStorage.getItem('token')}
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
            <CardColumns>
              <StyleImages
                activeStyle={this.state.formData.styleID}
                styleImages={this.props.styleImages}
                baseURL={this.props.testURL}
                handleStyleSelect={this.handleStyleSelect}
              />
            </CardColumns>
          </FormGroup>
        </Form>
      </div>
    )
  }
}
