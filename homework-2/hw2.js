const blank = "    ";

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const root = args[0];

recurse(root);

function recurse(file, depth = 0) {
  const filename = path.parse(file).base;
  let str = "";

  if (depth > 0) {
    str = blank.repeat(depth - 1) + "└──" + filename;
  } else {
    str = filename;
  }

  if (fs.lstatSync(file).isDirectory()) {
    let files = fs.readdirSync(file);

    str += ` (${files.length} files inside)`;
    console.log(str);

    files.forEach((item) => {
      recurse(file + "/" + item, depth + 1);
    });
  } else {
    str += " (file)";
    console.log(str);
  }
}
