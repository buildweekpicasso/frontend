import React from 'react';
import { Form, FormGroup, Label, CustomInput } from 'reactstrap';

export default class PayloadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        imgUpload: '',
        imgStyle: '',
      }
    }
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="imgUpload">File Browser with Custom Label</Label>
          <CustomInput
            type="file"
            accept="image/*"
            id="imgUpload"
            name="customFile"
            label="Choose your image"
          />
        </FormGroup>
      </Form>
    )
  }
}