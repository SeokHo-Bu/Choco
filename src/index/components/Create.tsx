import React, {ChangeEventHandler, useState} from 'react';
import {Button} from "../../stories/Button";


interface Item {
    id: number;
    title: string;
    body: string;
}


interface CreateProps {

}


const Create = React.memo((props: CreateProps) => {
    const [title, setTitle] = useState("title");
    const [body, setBody] = useState("body");

    const onClickEvent = () => {

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
                <p><input type={"text"} name={"title"} placeholder={title} onChange={changeTitle} /></p>
                <p><textarea name={"body"} placeholder={body} onChange={(e) => changeBody(e)} /></p>
                <p>
                    <Button label={`Create`} onClick={onClickEvent} />
                </p>
            </form>
        </article>
    );
});

export default Create;

