import 'babel/polyfill';
import 'reset.css';
import 'main.css';
import React, { PropTypes } from 'react';
import testData from 'testData';
import { Provider, connect }          from 'react-redux';
import thunk                 from 'redux-thunk';
import { devTools }          from 'redux-devtools';
import devToolsWindow        from 'util/DevTools';
import { LOAD_DATA } from "constants";
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import {
    selector as navSelector,
    reducer as navReducer,
    select as selectNav
} from 'actions/navigation';

const appState = combineReducers({
    [navSelector]: navReducer,
});
const withMiddleware = compose(
    applyMiddleware(thunk),
    devTools(),
    createStore);
const store = withMiddleware(appState,{});
store.dispatch({type: LOAD_DATA, payload: testData});


@connect((state) => ({
    nav: selectNav(state),
}))
class Button extends React.Component {
    static propTypes = {
        nav: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
        value: PropTypes.node,
        action: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }
    render () {
        const { dispatch, action, value, label } = this.props;
        return (
            <button onClick={() =>
                dispatch({ type: action, payload: value })}>
                {label}</button>
        );
    }
}

class Label extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        style: PropTypes.object,
    }
    render () {
        return <div style={this.props.style}>{this.props.value}</div>;
    }
}
class Container extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        style: PropTypes.object,
        direction: PropTypes.string,
        alignItems: PropTypes.string,
        justifyContent: PropTypes.string,
    }
    static defaultProps = {
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
    }
    render () {
        const { direction, alignItems, justifyContent, children, ...props } = this.props;
        const style = {
            display: "flex",
            flexDirection: direction,
            alignItems,
            justifyContent,
            ...this.props.style,
        };

        return (
            <div {...props} style={style}>{children}</div>
        );
    }
}

class Layer extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    }
    render () {
        const { children, ...props } = this.props;
        return (
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
            }}>
                <Container {...props} style={{
                    width: "100%",
                    height: "100%",
                }}>{children}</Container>
            </div>
        );
    }
}

class Card extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    }
    render () {
        const { children } = this.props;
        return (
            <div style={{
                display: "flex",
                width: 512,
                height: 384,
                backgroundColor: "white",
            }}>{children}</div>
        );
    }
}

const primitives = { Layer, Container, Label, Button };

function parse ([elName, props, children]) {
    const el = primitives[elName] || elName;
    const childTags = !children ?
        [] :
    typeof children === "string" ?
        children :
        children.map(parse);

    return React.createElement(el,props,childTags);
}

@connect((state) => ({
    nav: selectNav(state),
}))
class Workspace extends React.Component {
    static propTypes = {
        nav: PropTypes.object.isRequired,
    }
    componentDidUpdate () {
        const card = this.props.nav.card;
        document.title = card.label;
    }
    render () {
        const {  nav } = this.props;
        const view = parse(nav.card.view);

        return (
            <div style={{
                backgroundColor: "gray",
                padding: 32,
                height: "100%",
            }}>
                <Card>
                    {view}
                </Card>
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
