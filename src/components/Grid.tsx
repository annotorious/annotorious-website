const WIDTH = 1920;
const HEIGHT = 640;
const GRID_SIZE = 40;

import './Grid.css';

export const Grid = () => {

  return (
    <svg className="grid" width={WIDTH} height={HEIGHT}>
      <defs>
        <pattern id="grid" width={GRID_SIZE} height={GRID_SIZE} patternUnits="userSpaceOnUse">
          <path d={`M ${GRID_SIZE} 0 L 0 0 0 ${GRID_SIZE}`} fill="none" stroke="#c0d5ff" strokeWidth={1} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="white"/>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )

}