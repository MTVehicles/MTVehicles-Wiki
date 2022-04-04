// .vuepress/config.js
module.exports = {
	base: '/',
	postcss: {
		plugins: [
			require('css-prefers-color-scheme/postcss'),
		]
	},
	title: 'MT-Wapens',
	description: 'De officiële MT-Wapens V3 documentation.',
	head: [
		['link', { rel: 'icon', href: '/mtwapens.png' }]
	],
	theme: "yuu",
	themeConfig: {
		logo: '/mtwapens.png',
		nav: [
			{ text: 'Discord', link: 'https://discord.gg/AvRpCUZ' },
			{ text: 'Admin Panel', link: 'https://dash.mtwapens.nl' }
		],
		sidebar: [
			{
				title: 'MT-Wapens V3',
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
	},
  postcss: {
      plugins: [
        require('css-prefers-color-scheme/postcss'), 
        require('autoprefixer')
      ]
    }
}
