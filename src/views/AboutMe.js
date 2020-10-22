import React from 'react';
import {useLocation} from 'react-router-dom';

function AboutMe(props) {
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const name = query.get('name');

  return (
    <div>
      ¡Hola, {name ?? 'Gerardo'}!
    </div>
  );
}

export default AboutMe;