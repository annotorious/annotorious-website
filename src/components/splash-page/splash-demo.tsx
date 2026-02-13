import { useEffect, type JSX } from 'react';
import { Minus, Plus } from 'lucide-react';

import './splash-demo.css';
import '@annotorious/react/annotorious-react.css';

let SplashDemo: () => JSX.Element = () => null as unknown as JSX.Element; 

const annotation = {
  id: '03aa4806-dc95-49df-b5d7-3a37c4db63f9',
  bodies: [],
  target: {
    selector: {
      type: 'POLYGON',
      geometry: {
        bounds: {
          "minX": 7177.317180175782,
          "minY": 5917.927227783203,
          "maxX": 7644.310670166015,
          "maxY": 6153.361885986328
        },
        points: [
          [
            7177.317180175782,
            5971.744940185547
          ],
          [
            7202.91031616211,
            6153.361885986328
          ],
          [
            7644.310670166015,
            6096.254873046875
          ],
          [
            7627.824537353516,
            5917.927227783203
          ]
        ]
      }
    }
  }
};

if (typeof window !== 'undefined') {
  const OpenSeadragon = await import('openseadragon');

  const { 
    Annotorious, 
    OpenSeadragonAnnotator, 
    OpenSeadragonViewer, 
    useAnnotator,
    useViewer 
  } = await import('@annotorious/react');

  const options: OpenSeadragon.Options = {
    prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@latest/build/openseadragon/images/',
    tileSources: 'https://www.davidrumsey.com/luna/servlet/iiif/RUMSEY~8~1~291234~90062950/info.json',
    gestureSettingsMouse: {
      clickToZoom: false,
      dblClickToZoom: false,
      scrollToZoom: false
    },
    minZoomLevel: 0.8,
    visibilityRatio: 1,
    preserveImageSizeOnResize: true
  };

  const SplashDemoViewer = () => {

    const viewer = useViewer();

    const anno = useAnnotator();

    useEffect(() => {
      if (!viewer) return;

      viewer.addHandler('open', function(){
        var bounds = new OpenSeadragon.Rect(0.48, 0.44, 0.1, 0.1);
        viewer.viewport.fitBounds(bounds, true);
      });

      viewer.addHandler('canvas-scroll', function(event) {
          event.preventDefault = false;
      });
    }, [viewer]);

    useEffect(() => {
      if (!anno) return;
      anno.setAnnotations([annotation]);
    }, [anno]);

    const onZoom = (factor: number) =>
      viewer.viewport.zoomBy(factor);

    return (
      <>
        <div className="zoom">
          <button onClick={() => onZoom(2)}>
            <Plus />
          </button>

          <button onClick={() => onZoom(0.5)}>
            <Minus />
          </button>
        </div>

        <OpenSeadragonViewer
          className="osd-container"
          options={options} />
      </>
    )

  }

  SplashDemo = () => {

    return (
      <div className="splash-demo">
        <Annotorious>
          <OpenSeadragonAnnotator
            drawingMode="click"
            drawingEnabled={true}
            tool="polygon"
            style={{
              fill: '#f8942c',
              fillOpacity: 0.25,
              stroke: '#f8942c',
              strokeWidth: 2
            }}>
            <SplashDemoViewer />
          </OpenSeadragonAnnotator>
        </Annotorious>
      </div>
    );

  }

}

export { SplashDemo };