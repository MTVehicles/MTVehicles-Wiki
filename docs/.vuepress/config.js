// .vuepress/config.js
module.exports = {
	base: '/',
	postcss: {
		plugins: [
			require('css-prefers-color-scheme/postcss'),
		]
	},
	title: 'MTVehicles',
	description: 'Wiki of MTVehicles',
	head: [
		['link', { rel: 'icon', href: '/mtwapens.png' }],
		['meta', {name: 'theme-color', content: '#25272a'}]
	],
	theme: "yuu",
	themeConfig: {
		logo: '/mtwapens.png',
		nav: [
			{ text: 'Discord', link: 'https://discord.gg/vehicle' },
			{ text: 'Site', link: 'https://mtvehicles.eu' }
		],
		sidebar: [
			{
				title: 'MTVehicles V1',
				collapsable: false,
				children: [
					'/',
					'/commands/commands',
					'/api.md'
				]
			},
			{
				title: 'Configuration',
				collapsable: false,
				children: [
					'/config/config',
					'/config/weapons',
					'/config/ammo',
					'/config/grenades',
				]
			}
		]
	}
}
