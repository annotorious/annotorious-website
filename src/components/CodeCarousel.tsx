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

// Load annotations from a JSON file
anno.loadAnnotations('./annotations.json');`;

const snippet2 = 
`<!-- Import JS and CSS -->
<script src="https://cdn.jsdelivr.net/npm/@annotorious/annotorious@latest/dist/annotorious.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@annotorious/annotorious@latest/dist/annotorious.css">

<script>
  window.onload = function() {
    // Image element ID or DOM element 
    var anno = Annotorious.createImageAnnotator('my-image');
  }
</script>`;

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
  );
}`;

export const CodeCarousel = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
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