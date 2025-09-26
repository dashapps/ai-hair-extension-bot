// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
    logo: {
        src: '/hair_extension_64.webp',
        alt: 'AI Hair Extension',
        text: 'AI Hair Extension'
    },
    navItems: [
        { name: 'Телеграм‑бот', link: '/' },
        { name: 'Мастерам', link: '/features' },
        { name: 'Платформа', link: '/pricing' },
        {
            name: 'Бизнесу',
            link: '#',
            submenu: [
                { name: 'Блог', link: '/blog' },
                { name: 'История изменений', link: '/changelog' },
                { name: 'FAQ', link: '/faq' },
                { name: 'Условия', link: '/terms' }
            ]
        },
        { name: 'Контакты', link: '/contact' }
    ],
    navActions: [{ name: 'Попробовать', link: '/', style: 'primary', size: 'lg' }]
}
