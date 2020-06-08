import React from 'react';
import {Paragraph} from './Paragraph';

export function Header() {
    const [text] = React.useState('Система выписок ДБО');

    return (
        <header className="App-header">
            <Paragraph text={text}/>
        </header>
    );
}
