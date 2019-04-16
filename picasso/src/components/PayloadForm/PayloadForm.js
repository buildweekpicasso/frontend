import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, CustomInput, Button, CardColumns, Card, CardImg, CardBody } from 'reactstrap';
import { fetchStyleImages, testURL } from '../../actions';

class PayloadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        'upload-image': null,
        styleImg: null,
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
        'upload-image': e.target.files[0],
      }
    });
  }

  handleStyleSelect = e => {
    console.log(e.target.value);
    this.setState({
      formData: {
        ...this.state.formData,
        styleImg: e.target.value,
      }
    })
  }

  render() {
    return (
      <div className="PayloadForm">
        <h3>Choose an Image & Style</h3>
        <Form>
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
          <FormGroup>
            <Button
              type='submit'
            >
              Submit
            </Button>
          </FormGroup>
          <FormGroup check>
            <legend>Select a Style</legend>
            <CardColumns>
              {
                this.props.styleImages.map(img => {
                  console.log(`${img.id}`, this.state.formData.styleImg)
                  return (<Card
                    key={img.id}
                    className='rounded-lg'
                  >
                    <CardImg
                      top
                      id={img.id}
                      width='100%'
                      src={`${testURL}/styles/${img.thumbUrl}`}
                      alt={img.title}
                    />
                    <Label check>
                      <CardBody>
                        <p>
                          <strong>Title:</strong> {img.title}
                        </p>
                        <p>
                          <strong>Year(s):</strong> {img.year}
                        </p>
                        <CustomInput
                          type="radio"
                          checked={this.state.formData.styleImg === `${img.id}`}
                          onChange={this.handleStyleSelect}
                          id={img.id}
                          value={img.id}
                          name="style-select"
                          label="Select this style"
                        />
                      </CardBody>
                    </Label>
                  </Card>)}
                  )
              }
            </CardColumns>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({ fetchingStyles, styleImages }) => ({
  fetchingStyles, styleImages
});

export default connect(
  mapStateToProps,
  { fetchStyleImages }
)(PayloadForm);