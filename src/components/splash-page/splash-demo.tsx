import { useEffect, type JSX } from 'react';
import { Minus, Plus } from 'lucide-react';

import './splash-demo.css';
import '@annotorious/react/annotorious-react.css';

let SplashDemo: () => JSX.Element = () => null as unknown as JSX.Element; 

if (typeof window !== 'undefined') {
  const OpenSeadragon = await import('openseadragon');
  const { Annotorious, OpenSeadragonAnnotator, OpenSeadragonViewer, useViewer } = await import('@annotorious/react');

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
            drawingEnabled={true}>
            <SplashDemoViewer />
          </OpenSeadragonAnnotator>
        </Annotorious>
      </div>
    );

  }

}

export { SplashDemo };