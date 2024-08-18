import { useEffect, useState } from 'react';
import { TriangleRight, Square } from 'lucide-react';
import { Annotorious, ImageAnnotator, ShapeType, useAnnotator } from '@annotorious/react';
import type { AnnotoriousImageAnnotator, DrawingTool, ImageAnnotation, RectangleGeometry } from '@annotorious/react';

import './ImageExample.css';
import '@annotorious/react/annotorious-react.css';

const SAMPLE: ImageAnnotation = {
  id: '7fb76422-3a8c-4c87-bbad-7c8bb68399a0',
  bodies: [],
  target: {
    annotation: '7fb76422-3a8c-4c87-bbad-7c8bb68399a0',
    selector: {
      type: ShapeType.RECTANGLE,
      geometry: {
        bounds: {
            minX: 272,
            minY: 169,
            maxX: 393,
            maxY: 259
        },
        x: 272,
        y: 169,
        w: 121,
        h: 90,
      } as RectangleGeometry
    }
  }
};

const App = () => {

  const anno = useAnnotator<AnnotoriousImageAnnotator>();

  const [tool, setTool] = useState<DrawingTool>('rectangle');

  useEffect(() => {
    if (!anno) return;

    anno.addAnnotation(SAMPLE);

    return () => {
      anno.clearAnnotations();
    }
  }, [anno]);

  return (
    <div className="image-example">      
      <ImageAnnotator 
        tool={tool}>
        <img src="/640px-Hallstatt.jpg" />
      </ImageAnnotator>

      <div className='actions'>
        <button 
          className={tool === 'rectangle' ? 'active' : undefined}
          onClick={() => setTool('rectangle')}>
          <Square size={15} /> Rectangle
        </button>

        <button
          className={tool === 'polygon' ? 'polygon active' : 'polygon'}
          onClick={() => setTool('polygon')}>
          <TriangleRight size={15} /> Polygon
        </button>
      </div>
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