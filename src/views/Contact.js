import React from 'react';
import { useHistory } from "react-router-dom";
import {THANKS} from '../config/routes';

function Contact(props) {
  const history = useHistory();

  function handleClick() {
    history.push(THANKS);
  }

  return (
    <button type="button" onClick={handleClick}>
      ¡Gracias!
    </button>
  );
}

export default Contact;