import { useState } from 'react';
import { Annotorious, ImageAnnotator, useAnnotator } from '@annotorious/react';
import type { AnnotoriousImageAnnotator, DrawingTool } from '@annotorious/react';

import '@annotorious/react/annotorious-react.css';


const App = () => {

  const anno = useAnnotator<AnnotoriousImageAnnotator>();

  const [tool, setTool] = useState<DrawingTool>('rectangle');

  return (
    <div>
      <div className="actions">
        <button onClick={() => setTool('rectangle')}>A</button>
        <button onClick={() => setTool('polygon')}>B</button>
      </div>
      
      <ImageAnnotator 
        tool={tool}>
        <img src="/640px-Hallstatt.jpg" />
      </ImageAnnotator>
    </div>
  )

}

export const ImageExample = () => {

  return (
    <Annotorious>
      <App />
    </Annotorious>
  )

}