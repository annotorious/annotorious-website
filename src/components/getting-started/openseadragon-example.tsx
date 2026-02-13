import { useEffect, useState, type JSX } from 'react';
import type { AnnotoriousOpenSeadragonAnnotator } from '@annotorious/react';
import { Move, Square, Trash2, TriangleRight } from 'lucide-react';

import './openseadragon-example.css';
import '@annotorious/react/annotorious-react.css';

let OpenSeadragonExample: () => JSX.Element = () => null as unknown as JSX.Element;

if (typeof window !== 'undefined') {
  const {
    Annotorious,
    OpenSeadragonAnnotator,
    OpenSeadragonViewer,
    ShapeType,
    useAnnotator,
    useSelection
  } = await import('@annotorious/react');

  const ANNOTATIONS = [{
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
  }, {
    id: '007dd938-6a11-4cb8-98a7-116456a8b9de',
    bodies: [],
    target: {
      annotation: '007dd938-6a11-4cb8-98a7-116456a8b9de',
      selector: {
        type: ShapeType.POLYGON,
        geometry: {
          bounds: {
            minX: 63,
            minY: 1522,
            maxX: 462,
            maxY: 1653
          },
          points: [
            [ 63, 1599 ],
            [ 79, 1647 ],
            [ 193, 1631 ],
            [ 216, 1653 ],
            [ 368, 1638 ],
            [ 462, 1606 ],
            [ 427, 1535 ],
            [ 391, 1526 ],
            [ 365, 1547 ],
            [ 325, 1554 ],
            [ 297, 1522 ],
            [ 227, 1529 ],
            [ 204, 1560 ],
            [ 106, 1568 ]
          ]
        }
      }
    }
  }]

  const options: OpenSeadragon.Options = {
    prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@latest/build/openseadragon/images/',
    tileSources: {
      type: 'image',
      url: '/images/schoenbrunn.jpg'
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

    const selection = useSelection();

    useEffect(() => {
      if (!anno) return;

      anno.setAnnotations(ANNOTATIONS);

      return () => {
        anno.clearAnnotations();
      }
    }, [anno]);

    const onDelete = (ids: string[]) =>
      ids.forEach(id => anno.removeAnnotation(id));

    return (
      <div className="openseadragon-example">
        <OpenSeadragonAnnotator
          drawingMode="click"
          drawingEnabled={tool !== undefined}
          tool={tool}>
          <OpenSeadragonViewer
            className="osd-container"
            options={options} />
        </OpenSeadragonAnnotator>

        <div className='actions'>
          <div>
            <button
              className={tool === undefined ? 'active' : undefined}
              onClick={() => setTool(undefined)}>
              <Move size={15} /> Move
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

  OpenSeadragonExample = () => {
    return (
      <Annotorious>
        <App />
      </Annotorious>
    )
  };

}


export { OpenSeadragonExample };