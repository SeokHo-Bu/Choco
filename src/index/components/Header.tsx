import React, {useState} from 'react';
// import styled from '@emotion/styled'

interface HeaderProps {
    title?: string
}

const Header = React.memo((props: HeaderProps) => {
    const { title  = "HTML" } = props;
    return (
        <header>
            <h1>
                <a href={"/"}>{title}</a>
            </h1>
        </header>
    );
});

export default Header;

