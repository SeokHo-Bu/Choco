import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from './stories/Button'
import Header from "./index/components/Header";
import List from "./index/components/List";
import Article from "./index/components/Article";
import {listArticles} from "./mocks/mockData";
import Create from "./index/components/Create";

function App() {
    const [listArr, setListArr] = useState(listArticles);
    const [count, setCount] = useState(0);
    const [primarys, setPrimarys] = useState(false);
    const [id, setId] = useState(listArr[0].id);
    const [title, setTitle] = useState(listArr[0].title);
    const [body, setBody] = useState(listArr[0].body);
    const [update, setUpdate] = useState(false);


    const onClickEvent = () => {
        setCount(count + 1);
        setPrimarys(!primarys);
    };

    const headerClickEvent = () => {
        alert('1234');
    };

    const idClickEvent = (ids: number, titleText?: string, bodyText?: string) => {
        if (ids) {
            setId(ids);
        }
        if (titleText) {
            setTitle(titleText);
        }
        if (bodyText) {
            setBody(bodyText);
        }
    };

    const addList = (arr: { id: number; title: string; body: string; }) => {
        setListArr([...listArr, arr]);
    }

    const updateList = (arr: { id: number; title: string; body: string; }) => {
        const arrs = listArr.map(a => {
            // 만약 id가 일치하면 새 객체로 교체, 그렇지 않으면 기존 객체 유지
            return a.id === arr.id ? arr : a;
        });

        // 변경 사항이 있으면 상태 업데이트
        if (JSON.stringify(arrs) !== JSON.stringify(listArr)) {
            setListArr(arrs);
        }
    }

    const onUpdateClickEvent = () => {
        setUpdate(true);
    };

    const onDeleteClickEvent = () => {
        if (listArr.length === 1) {
            alert('더이상 삭제 불가능');
            return;
        }
        const arrs = listArr.filter(a => {
            // 만약 id가 일치하면 새 객체로 교체, 그렇지 않으면 기존 객체 유지
            return a.id !== id;
        });

        // 변경 사항이 있으면 상태 업데이트
        if (JSON.stringify(arrs) !== JSON.stringify(listArr)) {
            setListArr(arrs);
            setId(arrs[0].id);
            setTitle(arrs[0].title);
            setBody(arrs[0].body);
        }
    };

    return (
        <div className="App" style={{padding: 20}}>
            <Button label={`12345 => ${count}`} onClick={onClickEvent} primary={primarys} />
            <Header title="React" onClick={headerClickEvent} />
            <Header />
            <List arr={listArr} onChangeMode={idClickEvent} />
            <Button label={`Update`} onClick={onUpdateClickEvent} />
            <Article id={id} title={title} body={body} isUpdate={update} setUpdate={setUpdate} updateClick={updateList} />
            <Create createClick={addList} />
            <Button label={`Delete`} onClick={onDeleteClickEvent} />
        </div>
    );
}

export default App;
