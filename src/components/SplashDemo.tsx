// import Highlight from 'react-highlight';
import { Annotorious, ImageAnnotator, useAnnotations } from '@annotorious/react';

import './SplashDemo.css';
import '@annotorious/react/annotorious-react.css';
// import 'highlight.js/styles/atom-one-dark.css';

const AnnotatableImage = () => {

  const annotations = useAnnotations();

  return (
    <div className="splash-demo">
      <div className="glow" />

      <div className="mock-browser">
        <div className="mock-browser-toolbar">
          <div className="input">Annotorious Demo</div>
        </div>

        <ImageAnnotator>
          <img src="/images/schoenbrunn.jpg" />    
        </ImageAnnotator>
      </div>

      {/*
      <Highlight>
        {JSON.stringify(annotations[0], null, 2)}
      </Highlight>
      */}
    </div> 
  )

}

export const SplashDemo = () => {

  return (
    <Annotorious>
      <AnnotatableImage />
    </Annotorious>
  )
}