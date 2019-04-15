import React from 'react';
import { Form }

export default class ImageUpload extends React.Component {
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
      <Form></Form>
    )
  }
}