import {Link, Store} from './store';
import {logger} from '../../logger';
import {parseCard} from './helpers/card';

export const Very: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		inStock: {
			container: '.stockMessaging .indicator',
			text: ['available', 'low stock']
		},
		maxPrice: {
			container: '.priceNow',
			euroFormat: false // Note: Very uses non-euroFromat as price seperator
		},
		outOfStock: {
			container: '.stockMessaging .indicator',
			text: ['pre-order']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.very.co.uk/msi-geforce-gtx-1660-ti-gaming-x-6g-graphics-card/1600350984.prd'
		}
		// Will be added later, there are no URLs available atm
		// {
		// 	brand: 'sony',
		// 	model: 'ps5 console',
		// 	series: 'sonyps5c',
		// 	url: 'https://www.box.co.uk/CFI-1015A-Sony-Playstation-5-Console_3199689.html'
		// },
		// {
		// 	brand: 'sony',
		// 	model: 'ps5 digital',
		// 	series: 'sonyps5de',
		// 	url: 'https://www.box.co.uk/CFI-1015B-Sony-PlayStation-5-Digital-Edition-Conso_3199692.html'
		// },
		// {
		// 	brand: 'microsoft',
		// 	model: 'xbox series x',
		// 	series: 'xboxsx',
		// 	url: 'https://www.currys.co.uk/gbuk/gaming/console-gaming/consoles/microsoft-xbox-series-x-1-tb-10203371-pdt.html'
		// },
		// {
		// 	brand: 'microsoft',
		// 	model: 'xbox series s',
		// 	series: 'xboxss',
		// 	url: 'https://www.currys.co.uk/gbuk/gaming/console-gaming/consoles/microsoft-xbox-series-s-512-gb-ssd-10205195-pdt.html'
		// }
	],
	linksBuilder: {
		builder: (docElement, series) => {
			const productElements = docElement.find('.productList .product');
			const links: Link[] = [];
			for (let i = 0; i < productElements.length; i++) {
				const productElement = productElements.eq(i);
				const titleElement = productElement.find('.productTitle').first();
				const title = titleElement.text()?.replace(/\n/g, ' ').trim();

				if (
					!title ||
					['RTX', series]
						.map((x) => title.toLowerCase().includes(x.toLowerCase()))
						.filter((x) => !x).length > 0
				) {
					continue;
				}

				const url = titleElement.attr()?.href;

				if (!url) {
					continue;
				}

				const card = parseCard(title);

				if (card) {
					links.push({
						brand: card.brand as any,
						model: card.model,
						series,
						url
					});
				} else {
					logger.error(`Failed to parse card: ${title}`, {url});
				}
			}

			return links;
		},
		ttl: 300000,
		urls: [
			{
				series: '3060ti',
				url:
					'https://www.very.co.uk/electricals/pc-components/graphics-cards/e/b/118786.end?sort=newin,0&numProducts=100'
			},
			{
				series: '3070',
				url:
					'https://www.very.co.uk/electricals/pc-components/graphics-cards/e/b/118786.end?sort=newin,0&numProducts=100'
			},
			{
				series: '3080',
				url:
					'https://www.very.co.uk/electricals/pc-components/graphics-cards/e/b/118786.end?sort=newin,0&numProducts=100'
			},
			{
				series: '3090',
				url:
					'https://www.very.co.uk/electricals/pc-components/graphics-cards/e/b/118786.end?sort=newin,0&numProducts=100'
			}
		]
	},
	name: 'very'
};
