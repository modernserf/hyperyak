export default {
    cards: [{
        id: "first-card",
        label: "First Card",
        view: ["Layer",{},[
            ["Label",{ value: "This is a header"}],
            ["Label",{ value: "This is a subhead"}],
            ["Button",{action: "navigation/GO_NEXT", label: "Next"}]]],
    },{
        id: "second-card",
        label: "Second Card",
        view: ["Layer",{},[
            ["Label",{ value: "This is the second card"}]]],
    }],
};
