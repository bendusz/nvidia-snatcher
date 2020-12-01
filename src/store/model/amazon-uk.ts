import {Link, Store} from './store';
import {logger} from '../../logger';
import {parseCard} from './helpers/card';

export const AmazonUk: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
		inStock: {
			container: '#availability',
			text: ['in stock']
		},
		maxPrice: {
			container: 'span[class*="PriceString"]'
		},
		outOfStock: [
			{
				container: '#availability',
				text: ['out of stock', 'unavailable']
			},
			{
				container: '#backInStock',
				text: ['unavailable']
			}
		]
	},
	links: [
		{
			brand: 'test:brand',
			cartUrl:
				'https://www.amazon.co.uk/dp/B081265T5Z?tag=bend3st04-21',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.co.uk/dp/B081265T5Z/'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HSJ1622?tag=bend3st04-21',
			model: 'dual',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08HSJ1622'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KHFZN9P?tag=bend3st04-21',
			model: 'dual oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KHFZN9P'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HT7PR9Y?tag=bend3st04-21',
			model: 'strix',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08HT7PR9Y'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L8JNTXQ?tag=bend3st04-21',
			model: 'strix oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L8JNTXQ'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KWPDXJZ?tag=bend3st04-21',
			model: 'ventus 2x oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KWPDXJZ'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L6PCZTR?tag=bend3st04-21',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L6PCZTR'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KWN2LZG?tag=bend3st04-21',
			model: 'gaming x trio',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KWN2LZG'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08M13DXSZ?tag=bend3st04-21',
			model: 'vision oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08M13DXSZ'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KHL21CV?tag=bend3st04-21',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KHL21CV'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KHL2J5X?tag=bend3st04-21',
			model: 'eagle oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KHL2J5X'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L3QCZKZ?tag=bend3st04-21',
			model: 'xc3 black',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L3QCZKZ'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L3QZP7W?tag=bend3st04-21',
			model: 'xc3',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L3QZP7W'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L3Q41SM?tag=bend3st04-21',
			model: 'xc3 ultra',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L3Q41SM'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HRBR7K9?tag=bend3st04-21',
			model: 'twin edge',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08HRBR7K9'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08LBVNKT1?tag=bend3st04-21',
			model: 'twin edge oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08LBVNKT1'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HBF5L3K?tag=bend3st04-21',
			model: 'dual fan',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08HBF5L3K'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HBJB7YD?tag=bend3st04-21',
			model: 'xlr8 revel',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08HBJB7YD'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08H95Y452?tag=bend3st04-21',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.amazon.co.uk/dp/B08H95Y452'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08H97NYGP?tag=bend3st04-21',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.amazon.co.uk/dp/B08H97NYGP'
		},
		{
			brand: 'microsoft',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08H93GKNJ?tag=bend3st04-21',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.amazon.co.uk/dp/B08H93GKNJ'
		},
		{
			brand: 'microsoft',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08GD9MNZB?tag=bend3st04-21',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.amazon.co.uk/dp/B08GD9MNZB'
		}
	],
	linksBuilder: {
		builder: (docElement, series) => {
			const productElements = docElement.find(
				'.s-result-list .s-result-item[data-asin]'
			);
			const links: Link[] = [];
			for (let i = 0; i < productElements.length; i++) {
				const productElement = productElements.eq(i);
				const asin = productElement.attr()['data-asin'];

				if (!asin) {
					continue;
				}

				const url = `https://www.amazon.co.uk/dp/${asin}/`;
				const titleElement = productElement
					.find('.sg-col-inner h2 a.a-text-normal[href] span')
					.first();
				const title = titleElement.text().trim();

				if (!title || !new RegExp(`RTX.*${series}`, 'i').exec(title)) {
					continue;
				}

				const card = parseCard(title);

				if (card) {
					links.push({
						brand: card.brand as any,
						cartUrl: `https://www.amazon.co.uk/dp/${asin}?tag=bend3st04-21`,
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
				series: '3080',
				url: [
					'https://www.amazon.co.uk/s?k=%2B%22RTX+3080%22+-2080+-GTX&i=computers&rh=n%3A430500031%2Cp_n_availability%3A419162031&s=relevancerank&dc&qid=1601675291',
					'https://www.amazon.co.uk/s?k=%2B%22RTX+3080%22+-2080+-GTX&i=computers&rh=n%3A430500031%2Cp_n_availability%3A419162031&s=relevancerank&dc&qid=1601675594&page=2'
				]
			},
			{
				series: '3090',
				url: [
					'https://www.amazon.co.uk/s?k=%2B%22RTX+3090%22+-3080+-GTX&i=computers&rh=n%3A430500031%2Cp_n_availability%3A419162031&s=relevancerank&dc&qid=1601675291',
					'https://www.amazon.co.uk/s?k=%2B%22RTX+3090%22+-3080+-GTX&i=computers&rh=n%3A430500031%2Cp_n_availability%3A419162031&s=relevancerank&dc&qid=1601675594&page=2'
				]
			}
		]
	},
	name: 'amazon-uk'
};
