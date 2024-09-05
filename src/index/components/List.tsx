import React, {useState} from 'react';
// import styled from '@emotion/styled'

interface Item {
    id: number;
    title: string;
    body: string;
}

interface ListProps {
    arr?: Item[]
}

const List = React.memo((props: ListProps) => {
    const { arr } = props;
    return (
        <nav>
            <ol>
                {arr ? arr.map((a, i) =>
                    <li key={a.id}><a href={"/"}>{a.title}</a></li> ) : <li><a href={"/"}>html</a></li>}
            </ol>
        </nav>
    );
});

export default List;

