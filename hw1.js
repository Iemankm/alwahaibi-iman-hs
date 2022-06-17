

function child(items) {
  space = blank.repeat(count);
  items.forEach((el) => {
    console.log(
      space + blank + "└──",
      el.name
    );
    if (Array.isArray(el.items)) {
      count += 1;
      child(el.items);
    }
  });
}
function inside(items) {
  res = items.forEach((el) => {
    console.log("├──", el.name);
    child(el.items);
  });
}
function acTree(nodes, parent) {
  if (Array.isArray(nodes.items)) {
    console.log(parent);
    inside(nodes.items);
  }
}

let count = 0;
const blank = "    ";
const tree = {
  name: 1,
  items: [
    {
      name: 2,
      items: [
        { name: 3 },
        { name: 4, items: [
            {
              name: 2,
              items: [
                { name: 3 },
                { name: 4,  },
              ],
            },
            { 
                name: 5, 
                items: [
                  { name: 6 }
                ] 
            },
          ], },
      ],
    },
    { 
        name: 5, 
        items: [
          { name: 6 }
        ] 
    },
  ],
};

acTree(tree, tree.name);