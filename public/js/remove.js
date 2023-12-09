import fs from "node:fs";
import path from "node:path";

const icons = fs.readdirSync("./icons");
const iconsPublic = fs.readdirSync("./public/icons");

icons.forEach((icon) => {
  if (!iconsPublic.includes(icon)) {
    fs.rmdirSync(path.resolve(`./icons/${icon}`), { recursive: true });
  }
});

iconsPublic.forEach((icon) => {
  if (!icons.includes(icon)) {
    fs.unlinkSync(path.resolve(`./public/icons/${icon}`));
  }
});

console.log(
  `${icons.length} Icons successfully removed! (public/icons) (icons/)`,
);
