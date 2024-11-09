import React from 'react';
import { Button } from 'react-bootstrap';
import './RetroButton.css'

function RetroButton({message, globalState, setGlobalState}: any) {
  return (
    <button>
        {message}
    </button>
  );
}

export default RetroButton;