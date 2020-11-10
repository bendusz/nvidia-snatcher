import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Ebuyer: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		inStock: {
			container: '.purchase-info',
			text: ['add to basket', 'in stock']
		},
		maxPrice: {
			container: '.purchase-info__price .price',
			euroFormat: false // Note: ebuyer uses non-euroFromat as price seperator
		},
		outOfStock: {
			container: '.purchase-info',
			text: ['coming soon', 'we are expecting this item on']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.ebuyer.com/874209-gigabyte-geforce-rtx-2060-windforce-6gb-oc-graphics-card-gv-n2060wf2oc-6gd-v2'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen 5',
			url: 'https://www.ebuyer.com/1126988-amd-ryzen-5-5600x-am4-processor-100-100000065box'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen 7',
			url: 'https://www.ebuyer.com/1126987-amd-ryzen-7-5800x-am4-processor-100-100000063wof'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen 9',
			url: 'https://www.ebuyer.com/1126986-amd-ryzen-9-5900x-am4-processor-100-100000061wof'
		},{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen 9',
			url: 'https://www.ebuyer.com/1126985-amd-ryzen-9-5950x-am4-processor-100-100000059wof'
		},
		{
			brand: 'sony',
			model: 'console',
			series: 'playstation',
			url: 'https://www.ebuyer.com/1125329-sony-playstation-5-console-cfi-1015a'
		},
		{
			brand: 'sony',
			model: 'digital',
			series: 'playstation',
			url:
				'https://www.ebuyer.com/1125332-sony-playstation-5-digital-edition-cfi-1015b'
		},
		{
			brand: 'microsoft',
			model: 'series s',
			series: 'xbox',
			url:
				'https://www.ebuyer.com/1125562-xbox-series-s-all-digital-console-rrs-00007'
		},
		{
			brand: 'microsoft',
			model: 'series x',
			series: 'xbox',
			url:
				'https://www.ebuyer.com/1125563-xbox-series-x-console-rrt-00007'
		}
		
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: '#list-view .listing-product',
			sitePrefix: 'https://www.ebuyer.com',
			titleSelector: '.listing-product-title',
			urlSelector: 'a[href]'
		}),
		urls: [
			{
				series: '3070',
				url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-Nvidia/subcat/GeForce-RTX-3070'
			},
			{
				series: '3080',
				url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-Nvidia/subcat/GeForce-RTX-3080'
			},
			{
				series: '3090',
				url: 'https://www.ebuyer.com/store/Components/cat/Graphics-Cards-Nvidia/subcat/GeForce-RTX-3090'
			}
		]
	},
	name: 'ebuyer',
	waitUntil: 'domcontentloaded'
};
