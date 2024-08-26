import { ImageAnnotator } from '@annotorious/react';

import './SplashDemo.css';
import '@annotorious/react/annotorious-react.css';

export const SplashDemo = () => {

  return (
    <div className="splash-demo">
      <ImageAnnotator>
        <img src="/images/schoenbrunn.jpg" />
      </ImageAnnotator>
    </div>
  )

}