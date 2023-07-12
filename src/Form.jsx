import { useState } from 'react';

const Form = ({ addColor, name, setName }) => {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className="container">
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <input
          type="text"
          value={name}
          placeholder="colorname"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
        <div></div>
      </form>
    </section>
  );
};
export default Form;
