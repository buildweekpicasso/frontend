import React from 'react';
import { Form, FormGroup, Label, CustomInput, Button } from 'reactstrap';

export default class PayloadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        'upload-image': null,
        'style-image': '',
      }
    }
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
            <Label for="upload-image">File Browser with Custom Label</Label>
            <CustomInput
              type="file"
              accept="image/*"
              id="upload-image"
              name="upload-image"
              label="Choose your image"
              onChange={this.handleUploadChange}
            />
            <Button
              type='submit'
            >
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}