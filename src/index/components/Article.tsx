import React, {useState} from 'react';
// import styled from '@emotion/styled'

interface ArticleProps {
    title?: string;
    body?: string;
}

const Article = React.memo((props: ArticleProps) => {
    const {title = "Welcome", body = "Hello, Web!"} = props;
    return (
        <article>
            <h2>{title}</h2>
            {body}
        </article>
    );
});

export default Article;

