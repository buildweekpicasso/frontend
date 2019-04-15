import React from 'react';
import { Form, FormGroup, Label, CustomInput, Button } from 'reactstrap';

export default class PayloadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUpload: null,
      imgStyle: '',
    }
  }

  onUploadChange = e => {
    this.setState({
      imgUpload: e.target.files[0]
    });
  }

  render() {
    return (
      <div className="PayloadForm">
        <h3>Choose an Image & Style</h3>
        <Form>
          <FormGroup>
            <Label for="imgUpload">File Browser with Custom Label</Label>
            <CustomInput
              type="file"
              accept="image/*"
              id="imgUpload"
              name="imgUpload"
              label="Choose your image"
              onChange={this.onUploadChange}
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