import { Annotorious, OpenSeadragonAnnotator, OpenSeadragonViewer } from '@annotorious/react';

import './SplashDemo.css';
import '@annotorious/react/annotorious-react.css';

const options: OpenSeadragon.Options = {
  defaultZoomLevel: 4.0,
  prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@latest/build/openseadragon/images/',
  tileSources: 'https://www.davidrumsey.com/luna/servlet/iiif/RUMSEY~8~1~305921~90076306/info.json',
  gestureSettingsMouse: {
    clickToZoom: false,
    dblClickToZoom: false
  },
  minZoomLevel: 0.8,
  visibilityRatio: 0.2,
  preserveImageSizeOnResize: true
};

export const SplashDemo = () => {

  return (
    <div className="splash-demo">
      <Annotorious>
        <OpenSeadragonAnnotator
          drawingEnabled={true}
          theme="dark">
          <OpenSeadragonViewer
            className="osd-container"
            options={options} />
        </OpenSeadragonAnnotator>
      </Annotorious>
    </div>
  );

}