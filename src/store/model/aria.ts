import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Aria: Store = {
	labels: {
		inStock: {
			container: '#addQuantity',
			text: ['add to shopping basket']
		},
		maxPrice: {
			container: '.priceBig',
			euroFormat: false	// Note: Aria uses non-euroFromat as price seperator
		},
		outOfStock: {
			container: '.fBox',
			text: ['out of stock', 'there is currently no stock of this item']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.aria.co.uk/Products/Components/Graphics+Cards/NVIDIA+GeForce/GeForce+RTX+2060+Super/Gigabyte+NVIDIA+GeForce+RTX+2060+SUPER+8GB+WINDFORCE+OC+Turing+Graphics+Card+%2B+RTX+Bundle%21?productId=71541'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen 5',
			url: 'https://www.aria.co.uk/Products/Components/Processors/AMD+CPUs/Ryzen+5+-+Socket+AM4/AMD+Ryzen+5+5600X+6+Core+AM4+CPU%2FProcessor?productId=72872'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen 7',
			url: 'https://www.aria.co.uk/Products/Components/Processors/AMD+CPUs/Ryzen+7+-+Socket+AM4/AMD+Ryzen+7+5800X+8+Core+AM4+CPU%2FProcessor?productId=72870'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen 9',
			url: 'https://www.aria.co.uk/Products/Components/Processors/AMD+CPUs/Ryzen+9+-+Socket+AM4/AMD+Ryzen+9+5900X+12+Core+AM4+CPU%2FProcessor?productId=72869'
		},{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen 9',
			url: 'https://www.aria.co.uk/Products/Components/Processors/AMD+CPUs/Ryzen+9+-+Socket+AM4/AMD+Ryzen+9+5950X+16+Core+AM4+CPU%2FProcessor?productId=72868'
		}
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: '#productListingInner .listTable .listTableTr',
			sitePrefix: 'https://www.aria.co.uk',
			titleSelector: 'strong > a[href]'
		}),
		urls: [
			{
				series: '3080',
				url: 'https://www.aria.co.uk/Products/Components/Graphics+Cards/NVIDIA+GeForce/GeForce+RTX+3080'
			},
			{
				series: '3090',
				url: 'https://www.aria.co.uk/Products/Components/Graphics+Cards/NVIDIA+GeForce/GeForce+RTX+3090'
			}
		]
	},
	name: 'aria',
	waitUntil: 'domcontentloaded'
};
