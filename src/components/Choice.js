import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export default function App(props) {

  return (
    <>
      <div className={"card " + props.choiceName} onClick={props.func}>

      </div>
    </>
  );
}

