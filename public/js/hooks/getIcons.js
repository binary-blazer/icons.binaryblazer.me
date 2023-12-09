import feather from 'feather-icons';

const icons_cache = [];

if (icons_cache.length === 0) {
    const icons = feather.icons;
    for (const icon in icons) {
        icons_cache.push(icon);
    }
}

export default function getIcons() {
    return icons_cache;
}