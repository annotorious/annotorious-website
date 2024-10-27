import { useEffect } from 'react';
import OpenSeadragon from 'openseadragon';
import { Annotorious, OpenSeadragonAnnotator, OpenSeadragonViewer, useViewer } from '@annotorious/react';

import './SplashDemo.css';
import '@annotorious/react/annotorious-react.css';

const options: OpenSeadragon.Options = {
  prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@latest/build/openseadragon/images/',
  tileSources: 'https://www.davidrumsey.com/luna/servlet/iiif/RUMSEY~8~1~291234~90062950/info.json',
  gestureSettingsMouse: {
    clickToZoom: false,
    dblClickToZoom: false
  },
  minZoomLevel: 0.8,
  visibilityRatio: 1,
  preserveImageSizeOnResize: true
};

const InitialPosition = () => {

  const viewer = useViewer();

  useEffect(() => {
    if (!viewer) return;

    viewer.addHandler("open", function(){
      var bounds = new OpenSeadragon.Rect(0.48, 0.44, 0.1, 0.1);
      viewer.viewport.fitBounds(bounds, true);
    });
  }, [viewer]);

  return null;

}

export const SplashDemo = () => {

  return (
    <div className="splash-demo">
      <Annotorious>
        <OpenSeadragonAnnotator
          drawingEnabled={false}
          theme="dark">

          <OpenSeadragonViewer
            className="osd-container"
            options={options} />

          <InitialPosition />
        </OpenSeadragonAnnotator>
      </Annotorious>
    </div>
  );

}