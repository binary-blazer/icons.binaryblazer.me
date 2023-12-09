import feather from 'feather-icons';
import fs from 'node:fs';
import path from 'node:path';
import getIcons from './hooks/getIcons.js';

const icons = getIcons();

icons.forEach(icon => {
    const svg = feather.icons[icon].toSvg();

    const file = path.resolve(`./public/icons/${icon}.svg`);
    fs.writeFileSync(file, svg);
});

icons.forEach(icon => {
    const folder = path.resolve(`./icons/${icon}`);
    fs.mkdirSync(folder);

    const svg = feather.icons[icon].toSvg();
    const file = path.resolve(`./icons/${icon}/${icon}.svg`);
    fs.writeFileSync(file, svg);
});


console.log(`${icons.length} Icons successfully generated! (public/icons) (icons/)`);