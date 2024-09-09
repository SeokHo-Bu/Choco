import React, {useState} from 'react';
// import styled from '@emotion/styled'

interface Item {
    id: number;
    title: string;
    body: string;
}

interface ListProps {
    arr?: Item[];
    onChangeMode: (id: Number) => void;
}

const List = React.memo((props: ListProps) => {
    const { arr, onChangeMode } = props;
    const itemClick = (id: Number) => {
        if( onChangeMode ) {
            return onChangeMode(id);
        }
    }
    return (
        <nav>
            <ol>
                {arr ? arr.map((a, i) =>
                    <li key={a.id}><a href={"/"} onClick={() => itemClick(a.id)} >{a.title}</a></li> ) : <li><a href={"/"}>html</a></li>}
            </ol>
        </nav>
    );
});

export default List;

