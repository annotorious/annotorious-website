import { useEffect, useState } from 'react';
import type { AnnotoriousOpenSeadragonAnnotator } from '@annotorious/react';
import { Move, Square, TriangleRight } from 'lucide-react';

import './OpenSeadragonExample.css';
import '@annotorious/react/annotorious-react.css';

let OpenSeadragonExample: () => JSX.Element = () => null as unknown as JSX.Element; 

if (typeof window !== 'undefined') {
  const { 
    Annotorious, 
    OpenSeadragonAnnotator, 
    OpenSeadragonViewer, 
    ShapeType, 
    useAnnotator 
  } = await import('@annotorious/react');

  const ANNOTATION = {
    id: '4c4ee2bf-50e0-4bad-8176-76372b6ccf4b',
    bodies: [],
    target: {
      annotation: '4c4ee2bf-50e0-4bad-8176-76372b6ccf4b',
      selector: {
        type: ShapeType.RECTANGLE,
        geometry: {
          bounds: {
              minX: 4713,
              minY: 1859,
              maxX: 4845,
              maxY: 1956
          },
          x: 4713,
          y: 1859,
          w: 132,
          h: 97
        }
      }
    }
  }

  const options: OpenSeadragon.Options = {
    prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@latest/build/openseadragon/images/',
    tileSources: {
      type: 'image',
      url:  '/images/schoenbrunn.jpg'
    },
    gestureSettingsMouse: {
      clickToZoom: false,
      dblClickToZoom: false
    },
    minZoomLevel: 0.8,
    visibilityRatio: 0.2,
    preserveImageSizeOnResize: true
  };

  const App = () => {

    const [tool, setTool] = useState<'rectangle' | 'polygon' | undefined>();

    const anno = useAnnotator<AnnotoriousOpenSeadragonAnnotator>();

    useEffect(() => {
      if (!anno) return;

      anno.addAnnotation(ANNOTATION);

      return () => {
        anno.clearAnnotations();
      }
    }, [anno]);

    return (
      <div className="openseadragon-example">
        <OpenSeadragonAnnotator
          drawingEnabled={tool !== undefined}
          tool={tool || 'rectangle'}>
          <OpenSeadragonViewer
            className="osd-container"
            options={options} />
        </OpenSeadragonAnnotator>

        <div className='actions'>
          <button 
            className={tool === undefined ? 'active' : undefined}
            onClick={() => setTool(undefined)}>
            <Move size={15} /> Move Image
          </button>

          <button
            className={tool === 'rectangle' ? 'rectangle active' : 'rectangle'}
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

  OpenSeadragonExample = () => {
    return (
      <Annotorious>
        <App />
      </Annotorious>
    )
  };

}


export { OpenSeadragonExample };