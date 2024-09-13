import React, {useState} from 'react';

// import styled from '@emotion/styled'

interface Item {
    id: number;
    title: string;
    body: string;
}

interface ListProps {
    arr?: Item[];
    onChangeMode: (id: number, title: string | undefined, body: string | undefined) => void;
}

const List = React.memo((props: ListProps) => {
    const {arr, onChangeMode} = props;
    const itemClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: number, title?: string, body?: string) => {
        event.preventDefault();
        if (onChangeMode) {
            return onChangeMode(id, title, body);
        }
    }
    return (
        <nav>
            <ol>
                {arr ? arr.map((a, i) =>
                        <li key={a.id}><a href={"/"} onClick={(event) => itemClick(event, a?.id, a?.title, a?.body)}>{a.title}</a></li>) :
                    <li><a href={"/"}>html</a></li>}
            </ol>
        </nav>
    );
});

export default List;

