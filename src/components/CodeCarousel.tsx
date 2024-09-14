import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './CodeCarousel.css';

const snippet1 = 
`import { createImageAnnotator } from '@annotorious/annotorious';

// Import essential CSS styles
import '@annotorious/annotorious/annotorious.css';

// Image element ID or DOM element
const anno = createImageAnnotator('sample-image');

// Attach listeners to handle annotation events
anno.on('createAnnotation', function(annotation) {
  console.log('created', annotation);
});

// Load annotations from a JSON file
anno.loadAnnotations('./annotations.json');`;

const snippet2 = 
`<html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@annotorious/annotorious@latest/dist/annotorious.css">
    <script src="https://cdn.jsdelivr.net/npm/@annotorious/annotorious@latest/dist/annotorious.js"></script>
  </head>
  <body>
    <img id="my-image" src="my-image.jpg" />

    <script>
      window.onload = function() {
        var anno = Annotorious.createImageAnnotator('my-image');
      }
    </script>
  </body>
</html>`;

const snippet3 =
`import { Annotorious, ImageAnnotator } from '@annotorious/react';

import '@annotorious/react/annotorious-react.css';

export default function App() {

  return (
    <Annotorious>
      <ImageAnnotator>
        <img src="example.jpg" />
      </ImageAnnotator>
    </Annotorious>
  )

}`;

export const CodeCarousel = () => {

  return (
    <Slider
      arrows={false}
      autoplay
      autoplaySpeed={8000}
      dots
      infinite
      speed={500}
      swipe={false}>
      <div className="code-snippet">
        <SyntaxHighlighter language="javascript" style={nord}>
          {snippet1}
        </SyntaxHighlighter>
      </div>

      <div className="code-snippet">
        <SyntaxHighlighter language="html" style={nord}>
          {snippet2}
        </SyntaxHighlighter>
      </div>

      <div className="code-snippet">
        <SyntaxHighlighter language="javascript" style={nord}>
          {snippet3}
        </SyntaxHighlighter>
      </div>
    </Slider>
  )

}