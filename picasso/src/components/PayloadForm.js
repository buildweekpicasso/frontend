import React from 'react';
import { Form, FormGroup, Label, CustomInput, Button } from 'reactstrap';

export default class PayloadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        uploadImg: null,
        styleImg: '',
      }
    }
  }

  handleUploadChange = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        uploadImg: e.target.files[0],
      }
    });
  }

  render() {
    return (
      <div className="PayloadForm">
        <h3>Choose an Image & Style</h3>
        <Form>
          <FormGroup>
            <Label for="uploadImg">File Browser with Custom Label</Label>
            <CustomInput
              type="file"
              accept="image/*"
              id="uploadImg"
              name="uploadImg"
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