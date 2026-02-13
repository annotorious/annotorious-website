import { useEffect, useState, type JSX } from 'react';
import { TriangleRight, Square, Trash2 } from 'lucide-react';
import type { AnnotoriousImageAnnotator, DrawingTool, ImageAnnotation, RectangleGeometry } from '@annotorious/react';

import './image-example.css';
import '@annotorious/react/annotorious-react.css';

let ImageExample: () => JSX.Element = () => null as unknown as JSX.Element; 

if (typeof window !== 'undefined') {
  const { Annotorious, ImageAnnotator, ShapeType, useAnnotator, useSelection } = await import('@annotorious/react');

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

    const selection = useSelection();

    useEffect(() => {
      if (!anno) return;

      anno.addAnnotation(SAMPLE);

      return () => {
        anno.clearAnnotations();
      }
    }, [anno]);

    const onDelete = (ids: string[]) =>
      ids.forEach(id => anno.removeAnnotation(id));

    return (
      <div className="image-example">      
        <ImageAnnotator 
          tool={tool}>
          <img src="/images/640px-Hallstatt.jpg" />
        </ImageAnnotator>

        <div className='actions'>
          <div>
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

          <div>
            {selection.selected.length > 0 && (
              <button onClick={() => onDelete(selection.selected.map(s => s.annotation.id))}>
                <Trash2 size={15} />
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  ImageExample = () => {

    return (
      <Annotorious>
        <App />
      </Annotorious>
    )

  }
}

export { ImageExample };