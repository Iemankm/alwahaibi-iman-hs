function toText(tree) {
    const recurs = ({Item, Children}) => Item?.Name + 
        (Children?.length ? "\n" + Children.map(recurs).map((text, i, {length}) =>
            i < length-1 ? "├──" + text.replace(/\n/g, "\n│  ")
                         : "└──" + text.replace(/\n/g, "\n   ")
        ).join("\n") : "")
    return tree.map(recurs).join("\n");
}

let tree = [{
    "Item": {
        "Name": "1"
    }
}, {
    "Children": [{
        "Item": {
           "Name": "2"
        },
        "Children": [{
            "Item": {
                "Name": "3"
            }
        },{"Item": {
                "Name": "4"
            }, }
    ]
    }, {
        "Item":{
            "Name": "5"
        },
        "Children": [{
            "Item": {
                "Name": "6"
            }
        }]
    }],
}];
console.log(toText(tree));