// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
    footerAbout: {
        title: 'AI Hair Extension',
        aboutText: 'Первая AI‑платформа для продажи услуг наращивания волос и роста бренда.',
        logo: {
            src: '/hair_extension_64.webp',
            alt: 'AI Hair Extension',
            text: 'AI Hair Extension'
        }
    },
	footerColumns: [
		{
			category: 'Платформа',
			subCategories: [
				{
					subCategory: 'О платформе',
					subCategoryLink: '/pricing'
				},
				{
					subCategory: 'Демо мастерам',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Демо клиентам',
					subCategoryLink: '/'
				}
			]
		},
		{
			category: 'Бьюти-бизнесу',
			subCategories: [
				{
					subCategory: 'Решения',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'Условия',
					subCategoryLink: '/terms'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				}
			]
		},
		{
			category: 'О нас',
			subCategories: [
				{
					subCategory: 'Контакты',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Другие продукты',
					subCategoryLink: 'https://maugli.cfd/ru'
				}
			]
		}
	],
    subFooter: {
        copywriteText: '© <a href="https://maugli.cfd/ru" target="_blank" rel="noopener">Maugli.cfd</a> 2025 — ИИ для бьюти‑бизнеса и не только.'
    }
}
