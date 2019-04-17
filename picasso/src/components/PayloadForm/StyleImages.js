import React from 'react';
import { Card, Label, CardImg, CardHeader, CardFooter, CustomInput } from 'reactstrap';

export default props => {
  return props.styleImages.map(img => 
      <Card
        key={img.id}
        className='rounded-lg'
      >
        <Label className='StyleImage' style={{width: '100%'}} check>
          <CardHeader>
            <CustomInput
                type="radio"
                checked={props.activeStyle === `${img.id}`}
                onChange={props.handleStyleSelect}
                id={img.id}
                value={img.id}
                name="style-select"
                label="Select this style"
              />
          </CardHeader>
          <CardImg
            bottom
            id={img.id}
            width='100%'
            src={`${props.baseURL}/styles/${img.imageUrl}`}
            alt={img.title}
          />
          <CardFooter>
            <p>
              <strong>Title:</strong> {img.title}
            </p>
            <p>
              <strong>Year(s):</strong> {img.year}
            </p>
          </CardFooter>
        </Label>
      </Card>);
}