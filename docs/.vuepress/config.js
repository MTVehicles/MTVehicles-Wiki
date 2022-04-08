// .vuepress/config.js
module.exports = {
	base: '/',
	cname: 'wiki.mtvehicles.eu',
plugins:
  [
  ['@vuepress/last-updated',
  {
    transformer: (timestamp, lang) => {
	const moment = require('moment')
	moment.locale(lang)
	return moment(timestamp).format("LLL")
    }
  }],
  ['@vuepress/pwa',
  {
    serviceWorker: true,
    updatePopup: true
  }]],
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
			colorThemes: ['#32a852'],
			defaultColorTheme: '#32a852',
		},
		searchPlaceholder: 'Search...',
		repo: 'GamerJoep/MTVehicles-Wiki/docs',
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
			{ text: 'Website', link: 'https://mtvehicles.eu' }
		],
		sidebar: [
			{
				title: 'MTVehicles v2.3.0',
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
					'/information/commands.md',
					'/information/softdependencies.md',
					'/information/placeholders.md',
				]
			},
			{
				title: 'Tutorials',
				collapsable: false,
				children: [
					'/tutorials/resourcepack.md',
				]
			},
			{
				title: 'API',
				collapsable: false,
				children: [
					'/api/start.md',
				]
			}
		]
	}
}
