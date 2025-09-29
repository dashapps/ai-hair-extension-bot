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
	siteTitle: 'AI Hair Extension — платформа с ИИ-примеркой для бьюти',
	siteDescription:
		'White Label-платформа для школ наращивания и бьюти-бизнеса: ИИ-превью «до/после», токены, PRO-подписки и автоматизация продаж.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'AI Hair Extension'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
