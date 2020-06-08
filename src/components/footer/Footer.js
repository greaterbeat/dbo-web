import React from 'react';
import {ParagraphFooter} from "./Paragraph";

export function Footer() {
    const [text] = React.useState('©Мой Банк');

    return (
        <footer className="App-footer">
            <ParagraphFooter text={text}/>
        </footer>
    );
}
