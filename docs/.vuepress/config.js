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
		['link', { rel: 'icon', href: 'https://www.spigotmc.org/data/resource_icons/80/80910.jpg' }],
		['meta', {name: 'theme-color', content: '#25272a'}]
	],
	theme: "yuu",
	themeConfig: {
		logo: 'https://www.spigotmc.org/data/resource_icons/80/80910.jpg',
		yuu: {
			defaultDarkTheme: true,
		},
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
					'/faq.md',
					'/translating.md',
				]
			},
			{
				title: 'Api',
				collapsable: false,
				children: [
					'/api',
				]
			}
		]
	}
}
