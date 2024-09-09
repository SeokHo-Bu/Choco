import React, {useState} from 'react';
import './App.css';
import {Button} from './stories/Button'
import Header from "./index/components/Header";
import List from "./index/components/List";
import Article from "./index/components/Article";
import {listArticles} from "./mocks/mockData";

function App() {
    const [count, setCount] = useState(0);
    const [primarys, setPrimarys] = useState(false);

    const onClickEvent = () => {
        setCount(count + 1);
        setPrimarys(!primarys);
    };

    const headerClickEvent = () => {
        alert('123');
    };

    const idClickEvent = (id: Number) => {
        alert(id);
    };

    return (
        <div className="App">
            <Button label={`12345 => ${count}`} onClick={onClickEvent} primary={primarys} />
            <Header title="React" onClick={headerClickEvent} />
            <Header />
            <List arr={listArticles} onChangeMode={idClickEvent} />
            <Article title="React" body={"is Good!!!"} />
            <Article />
        </div>
    );
}

export default App;
