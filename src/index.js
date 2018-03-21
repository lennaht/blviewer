import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './Entry';
import { injectGlobal } from 'styled-components';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto');
* {
    font-family: 'Roboto', sans-serif;
}

body, html {
    margin: 0;
    top: 0;
    left: 0;
}
`;

ReactDOM.render(<Entry />, document.getElementById('root'));