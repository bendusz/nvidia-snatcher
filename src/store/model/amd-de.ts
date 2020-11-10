import {Store} from './store';

export const AMDDe: Store = {
	labels: {
		inStock: {
			container: '.btn-shopping-cart',
			text: ['add to cart']
		},
		maxPrice: {
			container: '.product-page-description h4',
			euroFormat: true
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amd.com/de/direct-buy/5450881400/de'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amd.com/de/direct-buy/5450881400/de?add-to-cart=true',
			model: '5950x',
			series: 'ryzen 9',
			url: 'https://www.amd.com/de/direct-buy/5450881400/de'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amd.com/de/direct-buy/5450881500/de?add-to-cart=true',
			model: '5900x',
			series: 'ryzen 9',
			url: 'https://www.amd.com/de/direct-buy/5450881500/de'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amd.com/de/direct-buy/5450881600/de?add-to-cart=true',
			model: '5800x',
			series: 'ryzen 7',
			url: 'https://www.amd.com/de/direct-buy/5450881600/de'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amd.com/de/direct-buy/5450881700/de?add-to-cart=true',
			model: '5600x',
			series: 'ryzen 5',
			url: 'https://www.amd.com/de/direct-buy/5450881700/de'
		}
	],
	name: 'amd-de'
};
