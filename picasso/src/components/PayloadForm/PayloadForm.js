import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, CustomInput, Button, CardColumns, Card, CardImg, CardBody } from 'reactstrap';
import { fetchStyleImages, testURL, submitPayload } from '../../actions';

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
    this.props.fetchStyleImages();
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
    let formData = new FormData();
    formData
      .append('content-image', this.state.formData.contentImg)
      .append('styleID', this.state.formData.styleID);
    this.props.submitPayload(formData);
    this.setState({
      formData: {
        contentImg: null,
        styleID: null,
      }
    })
  }

  render() {
    return (
      <div className="PayloadForm">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className="d-sm-flex justify-content-between">
            <h3>Choose an Image & Style</h3>
            <Button
              type='submit'
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
              label="Choose your image"
              onChange={this.handleUploadChange}
            />
          </FormGroup>
          <FormGroup check>
            <legend>Select a Style</legend>
            <CardColumns>
              { // move this to StyleImages.js ASAP
                this.props.styleImages.map(img => 
                  <Card
                    key={img.id}
                    className='rounded-lg'
                  >
                    <Label style={{width: '100%'}} check>
                      <CardImg
                        top
                        id={img.id}
                        width='100%'
                        src={`${testURL}/styles/${img.thumbUrl}`}
                        alt={img.title}
                      />
                      <CardBody>
                        <p>
                          <strong>Title:</strong> {img.title}
                        </p>
                        <p>
                          <strong>Year(s):</strong> {img.year}
                        </p>
                        <CustomInput
                          type="radio"
                          checked={this.state.formData.styleID === `${img.id}`}
                          onChange={this.handleStyleSelect}
                          id={img.id}
                          value={img.id}
                          name="style-select"
                          label="Select this style"
                        />
                      </CardBody>
                    </Label>
                  </Card>)
              }
            </CardColumns>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({ fetchingStyles, styleImages, submittingPayload }) => ({
  fetchingStyles, styleImages, submittingPayload
});

export default connect(
  mapStateToProps,
  { fetchStyleImages, submitPayload }
)(PayloadForm);