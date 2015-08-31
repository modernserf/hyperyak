import {
    LOAD_DATA,
    NAVIGATION_SELECTOR,
    GO_NEXT,
    GO_PREV,
    GO_ID
} from "constants";
import { toMap, into } from "util/seq";

const initState = {
    selected: null,
    routes: new Map(),
    routeIDs: [],
};

function offset (state, diff) {
    const index = state.routeIDs.indexOf(state.selected);
    const nextKey = state.routeIDs[index + diff];
    return nextKey || state.routeIDs[0];
}

export function reducer (state = initState, {type, payload}) {
    switch (type) {
    case LOAD_DATA: {
        const routes = payload.cards::toMap();
        const routeIDs = routes.keys()::into(Array);
        return { ...state, selected: routeIDs[0], routes, routeIDs };
    }
    case GO_NEXT:
        return { ...state, selected: offset(state,1) };
    case GO_PREV:
        return { ...state, selected: offset(state, -1) };
    case GO_ID:
        return { ...state, selected: payload };
    default:
        return state;
    }
}

export const selector = NAVIGATION_SELECTOR;

export function select (state) {
    const nav = state[selector];
    const card = nav.routes.get(nav.selected || nav.routeIDs[0]);
    return { ...nav, card };
}
