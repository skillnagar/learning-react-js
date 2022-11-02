import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function useInput(initialValue) {

  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: e => setValue(e.target.value) },
    () => setValue(initialValue)
  ]

}

function App() {

  const [titleProp, resetTitle] = useInput("");
  const [colorProp, resetColor] = useInput("#000000");

  const submit = e => {
    e.preventDefault();
    alert(`${titleProp.value}, ${colorProp.value}`);
    resetTitle();
    resetColor();
  };

  return (

    <form onSubmit={submit}>
      <input 
        type="text" 
        placeholder="color title..." 
        { ...titleProp }
      />
      <input type="color" 
        { ...colorProp }
      />
      <button>Add</button>
    </form>

  );
}

export default App;
