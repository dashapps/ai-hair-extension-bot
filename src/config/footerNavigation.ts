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
        aboutText:
            'Первая AI‑платформа для продажи услуг наращивания волос. Сайт является демо-витриной. Платформа продается под White Label для адаптации к вашему бренду.',
        logo: {
            src: '/hair_extension_64.webp',
            alt: 'AI Hair Extension',
            text: 'AI Hair Extension'
        }
    },
        footerColumns: [
                {
                        category: 'Product',
                        subCategories: [
                                {
                                        subCategory: 'Телеграм‑бот',
                                        subCategoryLink: 'https://t.me/darrrina'
                                },
                                {
                                        subCategory: 'Мастерам',
                                        subCategoryLink: '/features'
                                }
                        ]
                },
                {
                        category: 'Платформа',
                        subCategories: [
                                {
                                        subCategory: 'White Label Платформа',
                                        subCategoryLink: '/pricing'
                                },
                                {
                                        subCategory: 'Контакты',
                                        subCategoryLink: 'https://t.me/darrrina'
                                }
                        ]
                },
                {
                        category: 'О нас',
                        subCategories: [
                                {
                                        subCategory: 'AI Hair Extension',
                                        subCategoryLink: 'https://aihairextension.maugli.cfd/'
                                },
                                {
                                        subCategory: 'Maugli.cfd',
                                        subCategoryLink: 'https://maugli.cfd/ru'
                                },
                                {
                                        subCategory: 'Политика конфиденциальности',
                                        subCategoryLink: '/privacy'
                                }
                        ]
                }
        ],
    subFooter: {
        copywriteText: '© Maugli.cfd 2025 Внедряем ИИ в любые бизнес процессы'
    }
}
