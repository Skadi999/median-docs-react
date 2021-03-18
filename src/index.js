import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/general.css';
import './misc/css/introduction.css';
import { Nav } from './generalComponents.js';
import { Header } from './generalComponents.js';
import { Introduction } from './introduction.js'

//todo: nav li item is its own component
function App() {
    return (
        <div className="container">
            <Header title="INTRODUCTION"></Header>
            <Nav></Nav>
            <Introduction></Introduction>
            <div className="spacing"></div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
