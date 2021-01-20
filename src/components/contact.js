import React from 'react';
import Obfuscate from 'react-obfuscate';

const Contact = () => (

    <li>
        <Obfuscate
            email="tonewheelcreations@gmail.com"
            aria-label="Contact"
            headers={{
                subject: '',
                body: 'Hi Leo,'
            }}
        >Contact</Obfuscate>
    </li >
)

export default Contact