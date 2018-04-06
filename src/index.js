import React from 'react';
import ReactDOM from 'react-dom';
import './app/style/scss/index.scss';
import './favicon.ico';
import './manifest.json';

class Letter extends React.Component {
  render() {
    return (
      <p className='letter'>
        {this.props.children}
      </p>
    );
  }
}

ReactDOM.render(
    <div className='wrapper'>
      <Letter>M</Letter>
      <Letter>I</Letter>
      <Letter>T</Letter>
      <Letter>W</Letter>
      <Letter>O</Letter>
      <Letter>C</Letter>
      <Letter>H</Letter>
    </div>,
  document.getElementById('content')
);
