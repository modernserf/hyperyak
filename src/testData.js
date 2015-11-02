export default [
    {
        type: "route",
        id: "first-card",
        label: "First Card",
        children: ["layer-1"],
    }, {
        type: "route",
        id: "second-card",
        label: "Second Card",
        children: ["layer-2"],
    }, {
        type: "component",
        id: "layer-1",
        componentType: "Layer",
        props: {},
        children: ["label-1","label-2","button-1"],
    }, {
        type: "component",
        id: "layer-2",
        componentType: "Layer",
        props: {},
        children: ["label-3"],
    }, {
        type: "component",
        id: "label-1",
        componentType: "Label",
        props: { value: "This is a header" },
    }, {
        type: "component",
        id: "label-2",
        componentType: "Label",
        props: { value: "This is a subhead"},
    }, {
        type: "component",
        id: "button-1",
        componentType: "Button",
        props: {
            label: "Next",
            action: "navigation/GO_NEXT",
        },
    }, {
        type: "component",
        id: "label-3",
        componentType: "Label",
        props: { value: "This is the second card"},
    },
];
