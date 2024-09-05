import React, {useState} from 'react';
import './App.css';
import {Button} from './stories/Button'
import Header from "./index/components/Header";
import List from "./index/components/List";
import Article from "./index/components/Article";

function App() {
    const [count, setCount] = useState(0);
    const [primarys, setPrimarys] = useState(false);

    const onClickEvent = () => {
        setCount(count + 1);
        setPrimarys(!primarys);
    };

    const arr = [
        { id: 1, title: 'HTML', body: 'HTML is the standard markup language for creating web pages.' },
        { id: 2, title: 'CSS', body: 'CSS is used to control the style and layout of web pages.' },
        { id: 3, title: 'JavaScript', body: 'JavaScript is a programming language commonly used in web development.' },
        { id: 4, title: 'React', body: 'React is a JavaScript library for building user interfaces.' },
        { id: 5, title: 'Node.js', body: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.' }
    ];

  return (
    <div className="App">
      <Button label={`12345 => ${count}`} onClick={onClickEvent} primary={primarys}/>
        <Header title="React"/>
        <Header/>
        <List arr={arr}/>
        <Article title="React" body={"is Good!!!"}/>
        <Article/>
    </div>
  );
}

export default App;
