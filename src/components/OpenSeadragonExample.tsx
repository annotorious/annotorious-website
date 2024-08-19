import { OpenSeadragonViewer } from '@annotorious/react';
import OpenSeadragon from 'openseadragon';

import './OpenSeadragonExample.css';

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

export const OpenSeadragonExample = () => {

  return (
    <OpenSeadragonViewer
      className="osd-container"
      options={options} />
  )

}