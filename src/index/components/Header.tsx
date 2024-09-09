import React, {useState} from 'react';
// import styled from '@emotion/styled'

interface HeaderProps {
    title?: string;
    onClick?: () => void;
}

const Header = React.memo((props: HeaderProps) => {
    const { title  = "HTML", onClick } = props;
    const onClickEvent = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        if (onClick) {
            onClick();
        }

    }
    return (
        <header>
            <h1>
                <a href={"/"} onClick={(event) => onClickEvent(event)}>{title}</a>
            </h1>
        </header>
    );
});

export default Header;

