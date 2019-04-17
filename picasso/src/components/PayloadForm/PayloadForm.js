import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, CustomInput, Button, CardColumns } from 'reactstrap';
import { fetchStyleImages, baseURL, testURL, submitPayload } from '../../actions';
import StyleImages from './StyleImages';
import ResultImages from '../ResultImages';

class PayloadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        contentImg: null,
        styleID: null,
      }
    }
  }

  componentDidMount() {
    !this.props.styleImages.length
      && this.props.fetchStyleImages();
  }

  handleUploadChange = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        contentImg: e.target.files[0],
      }
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
        // .then(() => {
        //   window.location.assign(this.props.processedURL);
        // })
      this.setState({
        formData: {
          contentImg: null,
          styleID: null,
        }
      })
    }
  }

  render() {
    const noSubmit = this.state.formData.contentImg === null || this.state.formData.styleID === null;
    console.log(window.location)

    return (
      <div className="PayloadForm">
        {this.props.resultImages.output_url !== null
          && <ResultImages />}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className="d-sm-flex justify-content-between">
            <h3>
              <span className="spanIB">Choose an Image</span>{` `}
              <span className="spanIB">and Style</span>
            </h3>
            <Button
              type='submit'
              disabled={noSubmit}
            >
              Submit
            </Button>
          </FormGroup>
          <FormGroup>
            <Label for="upload-image">Pick an Image to Transform</Label>
            <CustomInput
              type="file"
              accept="image/*"
              id="upload-image"
              name="upload-image"
              label={this.state.formData.contentImg
                ? this.state.formData.contentImg.name
                : "Choose your image"}
              onChange={this.handleUploadChange}
            />
          </FormGroup>
          <FormGroup check>
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
                baseURL={testURL}
                handleStyleSelect={this.handleStyleSelect}
              />
            </CardColumns>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({ fetchingStyles, styleImages, submittingPayload, resultImages }) => ({
  fetchingStyles, styleImages, submittingPayload, resultImages
});

export default connect(
  mapStateToProps,
  { fetchStyleImages, submitPayload }
)(PayloadForm);