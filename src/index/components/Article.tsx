import React, {useState, useEffect} from 'react';
import {Button} from "../../stories/Button";

// import styled from '@emotion/styled'

interface ListItem {
    id: number;
    title: string;
    body: string;
}

interface ArticleProps {
    id: number;
    title?: string;
    body?: string;
    isUpdate?: boolean;
    setUpdate?: React.Dispatch<React.SetStateAction<boolean>>;
    updateClick?: (arr: ListItem) => void;
}

const Article = React.memo((props: ArticleProps) => {
    const {id, title = "Welcome", body = "Hello, Web!", isUpdate, updateClick, setUpdate} = props;
    const [titles, setTitle] = useState(title);
    const [bodys, setBody] = useState(body);

    // props가 변경될 때마다 상태 업데이트
    useEffect(() => {
        setTitle(title);
        setBody(body);
    }, [title, body]);  // title이나 body가 변경될 때마다 실행

    const onClickEvent = () => {
        if (updateClick) {
            updateClick({id, title: titles, body: bodys});
        }
        if (setUpdate) {
            setUpdate(false);
        }
    };

    const changeTitle = (titleEvent?: React.ChangeEvent<HTMLInputElement>) => {
        if (titleEvent) {
            setTitle(titleEvent.target.value);
        }
    }

    const changeBody = (bodyEvent?: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (bodyEvent) {
            setBody(bodyEvent.target.value);
        }
    }

    return (
        <article>
            {isUpdate ?
                <><h2>
                    Update
                </h2>
                    <form>
                        <p>
                            <input type={'text'} value={titles} name={'title'} placeholder={'title'} onChange={changeTitle} />
                        </p>
                        <p><textarea name={'body'} value={bodys} placeholder={'body'} onChange={(e) => changeBody(e)} />
                        </p>
                        <p>
                            <Button label={`수정`} onClick={onClickEvent} />
                        </p>
                    </form>
                </> :
                <><h2>{titles}</h2>
                    {bodys}</>}
        </article>
    );
});

export default Article;

