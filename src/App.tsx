import React, {useState} from 'react';
import './App.css';
import {Button} from './stories/Button'

function App() {
    const [count, setCount] = useState(0);
    const [primarys, setPrimarys] = useState(false);

    const onClickEvent = () => {
        setCount(count + 1);
        setPrimarys(!primarys);
    };

  return (
    <div className="App">
      <Button label={`12345 => ${count}`} onClick={() => onClickEvent()} primary={primarys}/>
    </div>
  );
}

export default App;
