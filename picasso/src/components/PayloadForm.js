import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, CustomInput, Button } from 'reactstrap';
import { fetchStyleImages } from '../actions';

class PayloadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        'upload-image': null,
        'style-image': '',
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
        </Form>
        <div className='style-select'>
          {
            this.props.styleImages.map(img =>
              <img
                key={img.styleId}
                src={img.imageUrl}
                alt=''
                style={{width: '250px'}}
              />)
          }
        </div>
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