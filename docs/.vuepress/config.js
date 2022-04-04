// .vuepress/config.js
module.exports = {
	base: '/',
	cname: 'wiki.mtvehicles.eu',
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
			colorThemes: ['purple'],
			defaultColorTheme: 'purple',
		},
		searchPlaceholder: 'Search...',
		repo: 'gamerjoep/mtvehicles-wiki',
   		repoLabel: 'Contribute',
		logo: 'https://www.spigotmc.org/data/resource_icons/80/80910.jpg',
		editLinks: true,
    		nextLinks: true,
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last updated',
		serviceWorker: {
		  updatePopup: {
		    message: "New content is available.",
		    buttonText: "Refresh"
		  }
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
					'/translating.md',
					'/faq.md',
				]
			},
			{
				title: 'Information',
				collapsable: false,
				children: [
					'/information/functionalities.md',
					'/information/softdependencies.md',
					'/information/commands.md',
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
