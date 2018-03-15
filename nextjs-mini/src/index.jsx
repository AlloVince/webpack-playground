import React from 'react';
import ReactDOM from 'react-dom';
import hljsCss from 'highlight.js/styles/dark.css';
import hljs from 'highlight.js/lib/index';

class Demo extends React.Component {
  componentDidMount() {
    console.log('After render');
    console.log('Start highlight');
    hljs.initHighlighting();
    console.log('After highlight');
  }

  render() {
    console.log('Start render');
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: hljsCss }}/>
        <pre className="js"><code>{
`function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}`
        }</code>
        </pre>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('container'));