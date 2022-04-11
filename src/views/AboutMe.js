import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function AboutMe() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  const [value, setValue] = useState(name);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchParams({
      name: value,
    });
  }

  return (
    <div>
      <div>¡Hola, {name ?? "desconocido"}!</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Valor:</label>
          <input value={value} onChange={handleChange} />
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default AboutMe;
