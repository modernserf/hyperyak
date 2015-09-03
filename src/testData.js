export default [
    {
        type: "route",
        id: "first-card",
        label: "First Card",
    }, {
        type: "route",
        id: "second-card",
        label: "Second Card",
    }, {
        type: "component",
        id: "layer-1",
        parent_id: "first-card",
        componentType: "Layer",
        props: {},
    }, {
        type: "component",
        id: "layer-2",
        parent_id: "second-card",
        componentType: "Layer",
        props: {},
    }, {
        type: "component",
        id: "label-1",
        parent_id: "layer-1",
        componentType: "Label",
        props: { value: "This is a header" },
    }, {
        type: "component",
        id: "label-2",
        parent_id: "layer-1",
        componentType: "Label",
        props: { value: "This is a subhead"},
    }, {
        type: "component",
        id: "button-1",
        parent_id: "layer-1",
        componentType: "Button",
        props: {
            label: "Next",
            action: "navigation/GO_NEXT",
        },
    }, {
        type: "component",
        id: "label-3",
        parent_id: "layer-2",
        componentType: "Label",
        props: { value: "This is the second card"},
    },
];
