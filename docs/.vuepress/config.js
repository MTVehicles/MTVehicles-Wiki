// .vuepress/config.js
module.exports = {
	base: '/',
	postcss: {
		plugins: [
			require('css-prefers-color-scheme/postcss'),
		]
	},
	title: 'MTVehicles'
	head: [
		['link', { rel: 'icon', href: '/mtwapens.png' }]
	],
	theme: "default-prefers-color-scheme",
	themeConfig: {
		logo: '/mtwapens.png',
		nav: [
			{ text: 'Discord', link: 'https://discord.gg/vehicle' },
			{ text: 'Site', link: 'https://mtvehicles.eu' }
		],
		sidebar: [
			{
				title: 'MTVehicles',
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
