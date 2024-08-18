import { Annotorious, ImageAnnotator } from '@annotorious/react';

import '@annotorious/react/annotorious-react.css';

export const ImageExample = () => {

  return (
    <Annotorious>
      <ImageAnnotator>
        <img src="/640px-Hallstatt.jpg" />
      </ImageAnnotator>
    </Annotorious>
  )

}