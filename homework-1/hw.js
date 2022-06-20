const blank = "   ";

const tree = {
  name: 1,
  items: [
    {
      name: 2,
      items: [
        { name: 3 },
        {
          name: 4,
          items: [
            {
              name: 2,
              items: [{ name: 3 }, { name: 4 }],
            },
            {
              name: 5,
              items: [{ name: 6 }],
            },
          ],
        },
      ],
    },
    {
      name: 5,
      items: [{ name: 6 }],
    },
  ],
};

acTree(tree);

function acTree(root, depth = 0) {
  if (depth > 0) {
    console.log(blank.repeat(depth - 1) + "└──" + root.name);
  } else {
    console.log(root.name);
  }

  if (Array.isArray(root.items)) {
    root.items.forEach((item) => {
      acTree(item, depth + 1);
    });
  }
}
