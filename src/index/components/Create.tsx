import React, {ChangeEventHandler, useState} from 'react';
import {Button} from '../../stories/Button';

interface ListItem {
    id: number;
    title: string;
    body: string;
}

interface CreateProps {
    createClick?: (arr: ListItem) => void;
}


const Create = React.memo((props: CreateProps) => {
    const {createClick} = props;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onClickEvent = () => {
        if (createClick) {
            createClick({id: Math.random(), title, body});
        }
        setTitle('');
        setBody('');
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
            <h2>
                Create
            </h2>
            <form>
                <p><input type={'text'} value={title} name={'title'} placeholder={'title'} onChange={changeTitle} /></p>
                <p><textarea name={'body'} value={body} placeholder={'body'} onChange={(e) => changeBody(e)} /></p>
                <p>
                    <Button label={`Create`} onClick={onClickEvent} />
                </p>
            </form>
        </article>
    );
});

export default Create;

