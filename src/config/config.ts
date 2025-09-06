// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
        siteTitle: 'AI Hair Extension Selling Platform',
        siteDescription:
                'Первая платформа, разработанная специально для продажи услуги наращивания волос и сопутствующих материалов.',
        ogImage: '/og.jpg',
        logo: {
                src: '/hair_extension_192.webp',
                alt: 'AI Hair Extension Selling Platform logo'
        },
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
