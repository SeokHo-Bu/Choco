import React, {useState} from 'react';
import './App.css';
import {Button} from './stories/Button'
import Header from "./index/components/Header";
import List from "./index/components/List";
import Article from "./index/components/Article";
import {listArticles} from "./mocks/mockData";
import Create from "./index/components/Create";

function App() {
    const [count, setCount] = useState(0);
    const [primarys, setPrimarys] = useState(false);
    const [title, setTitle] = useState('React');
    const [body, setBody] = useState('is Good!!!');


    const onClickEvent = () => {
        setCount(count + 1);
        setPrimarys(!primarys);
    };

    const headerClickEvent = () => {
        alert('1234');
    };

    const idClickEvent = (id: Number, titleText?: string, bodyText?: string) => {
        if (titleText) {
            setTitle(titleText);
        }
        if (bodyText) {
            setBody(bodyText);
        }
    };

    return (
        <div className="App" style={{padding: 20}}>
            <Button label={`12345 => ${count}`} onClick={onClickEvent} primary={primarys} />
            <Header title="React" onClick={headerClickEvent} />
            <Header />
            <List arr={listArticles} onChangeMode={idClickEvent} />
            <Article title={title} body={body} />
            <Create />
        </div>
    );
}

export default App;
