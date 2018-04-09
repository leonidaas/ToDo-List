import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/index.css';

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
      <Letter>L</Letter>
      <Letter>I</Letter>
      <Letter>T</Letter>
      <Letter>W</Letter>
      <Letter>O</Letter>
      <Letter>C</Letter>
      <Letter>H</Letter>
    </div>,
  document.getElementById('content')
);
