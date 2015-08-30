import 'babel/polyfill';
import 'reset.css';
import 'main.css';
import React from 'react';

class App extends React.Component {
    render() {
        return React.createElement("div",{},["foobar"]);
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.createElement('div');
    document.body.appendChild(appContainer);
    React.render(
        React.createElement(App),
        appContainer);
});
