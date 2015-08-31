import 'babel/polyfill';
import 'reset.css';
import 'main.css';
import React, { PropTypes } from 'react';
import testData from 'testData';
import { Provider, connect }          from 'react-redux';
import thunk                 from 'redux-thunk';
import { devTools }          from 'redux-devtools';
import devToolsWindow        from 'util/DevTools';
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';

const GO_NEXT = "route/GO_NEXT";
const GO_PREV = "route/GO_PREV";

const routeSelector = "route/SELECTOR";
const initRouteState = { index: 1 };
function routeReducer (state = initRouteState, {type}) {
    switch (type) {
    case GO_NEXT:
        return { ...state, index: state.index + 1 };
    case GO_PREV:
        return { ...state, index: state.index - 1 };
    default:
        return state;
    }
}

const appState = combineReducers({
    [routeSelector]: routeReducer,
});
const withMiddleware = compose(
    applyMiddleware(thunk),
    devTools(),
    createStore);
const store = withMiddleware(appState,{});

class Card extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        style: PropTypes.object.isRequired,
    }
    render () {
        const { children, style, ...props } = this.props;
        return (
            <div {...props} style={{
                ...style,
                display: "flex",
                width: 512,
                height: 384,
                backgroundColor: "white",
            }}>{children}</div>
        );
    }
}

@connect((state) => ({
    route: state[routeSelector],
}))
class Stack extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        dispatch: PropTypes.func.isRequired,
        route: PropTypes.object.isRequired,
    }
    render () {
        const { children, dispatch, route, ...props } = this.props;
        return (
            <div {...props}>
                {children[route.index]}
            </div>
        );
    }
}

const primitives = { Card, Stack };

function parse ([elName, props, children]) {
    const el = primitives[elName] || elName;
    const childTags = !children ?
        [] :
    typeof children === "string" ?
        children :
        children.map(parse);

    return React.createElement(el,props,childTags);
}

class Workspace extends React.Component {
    render () {
        return (
            <div style={{
                backgroundColor: "gray",
                padding: 32,
                height: "100%",
            }}>
                {parse(testData)}
            </div>
        );
    }
}

class Tools extends React.Component {
    render () {
        return (
            <div>
                <button>Do Something</button>
            </div>
        );
    }
}


class App extends React.Component {
    render () {
        return (
            <div style={{
                display: "flex",
                position: "fixed",
                width: "100%",
                height: "100%",
                flexDirection: "row",
                alignItems: "top",
            }}>
                <div style={{
                    flexBasis: "66%",
                    height: "100%",
                }}>
                    <Workspace/>
                </div>
                <div style={{
                    flexBasis: "33%",
                    height: "100%",
                }}>
                    <Tools/>
                </div>
            </div>
        );
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.createElement('div');
    const hotLoader = document.createElement("script");
    hotLoader.src = "http://localhost:8088/webpack-dev-server.js";
    document.head.appendChild(hotLoader);
    document.body.appendChild(appContainer);

    const Root = React.createElement(Provider,{store: store},
        () => React.createElement(App));

    React.render(Root,appContainer);

    devToolsWindow(store);
});
