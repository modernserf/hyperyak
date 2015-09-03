import {
    LOAD_DATA,
    NAVIGATION_SELECTOR,
    GO_NEXT,
    GO_PREV,
    GO_ID
} from "constants";
import { toMap, partition } from "util/seq";

const initState = {
    selected: null,
    byID: new Map(),
    byParent: new Map(),
};

function getRoute (state) {
    return state.byID.get(state.selected) ||
        state.data.find((x) => x.type === "route");
}

function offset (state, diff) {
    const route = getRoute(state);
    const allRoutes = state.data.filter((x) => x.type === "route");

    const index = allRoutes.indexOf(route);
    const nextRoute = allRoutes[index + diff];
    return nextRoute ? nextRoute.id : allRoutes[0];
}


export function reducer (state = initState, {type, payload}) {
    switch (type) {
    case LOAD_DATA: {
        return { ...state, data: payload,
            byID: payload::toMap(),
            byParent: payload::partition((x) => x.parent_id) };
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
    return { ...nav, route: getRoute(nav) };
}
