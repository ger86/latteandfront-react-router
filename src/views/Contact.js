import {useNavigate} from 'react-router-dom';
import {THANKS} from '../config/routes';

function Contact() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(THANKS);
  }

  return (
    <button type="button" onClick={handleClick}>
      Enviar
    </button>
  );
}

export default Contact;
