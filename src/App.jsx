import Form from './Form';
import ColorMap from './ColorMap';
import ColorList from './ColorList';

import Values from 'values.js';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const STEP = 20;

const App = () => {
  const temp = new Values('#ff32d4').all(STEP);
  const [colors, setColors] = useState(temp.slice(1, temp.length - 1));
  const [name, setName] = useState('');

  const addColor = (color) => {
    console.log(color);
    try {
      const newColors = new Values(color).all(STEP);
      setColors(newColors.slice(1, newColors.length - 1));
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <main>
      <h4 className="title">CSS Color generator</h4>
      <ToastContainer position="top-center" />
      <Form addColor={addColor} name={name} setName={setName} />
      <ColorMap colors={colors} />
      <ColorList colors={colors} name={name} />
    </main>
  );
};
export default App;
