import React from 'react';
import TextFormattingComponent from './TextFormattingComponent'

const style ={
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30vh',
}

const home = () => {
  return (
    <div style={style}>
        <TextFormattingComponent />
    </div>
  );
}

export default home;
