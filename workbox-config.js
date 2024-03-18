module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,js,json,png,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};