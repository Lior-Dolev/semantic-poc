const ICONS = {
	plus: require('./plus-sign.png')
}

export default function factory(name) {
	if (!name) return
	else
		return ICONS[name.toLowerCase()] || name.png
}