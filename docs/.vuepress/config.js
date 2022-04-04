// .vuepress/config.js
module.exports = {
	cname: 'wiki.mtvehicles.eu',
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
		yuu: {
			defaultDarkTheme: true,
			disableThemeIgnore: true,
			defaultColorTheme: 'purple',
		},
		logo: 'https://www.spigotmc.org/data/resource_icons/80/80910.jpg',
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
				title: 'Information',
				collapsable: false,
				children: [
					'/information/commands.md',
					'/information/functionalities.md',
					'/information/softdependencies.md',
				]
			},
			{
				title: 'Placeholders',
				collapsable: false,
				children: [
					'/api',
				]
			}
		]
	}
}
