import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Awd: Store = {
	backoffStatusCodes: [403, 503],
	labels: {
		inStock: {
			container: '.product-info',
			text: ['add to basket']
		},
		outOfStock: {
			container: '.vs-stock',
			text: ['out-of-stock']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.awd-it.co.uk/asus-dual-geforce-rtx-2060-mini-oc-6gb-gddr6-pci-express-vr-ready-graphics-card.html'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.awd-it.co.uk/amd-ryzen-5-5600x-cpu-six-core-3.7ghz-processor-socket-am4-retail.html'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.awd-it.co.uk/amd-ryzen-7-5800x-cpu-eight-core-3.8ghz-processor-socket-am4-retail.html'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.awd-it.co.uk/amd-ryzen-9-5900x-cpu-twelve-core-3.7ghz-processor-socket-am4-retail.html'
		},{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.awd-it.co.uk/amd-ryzen-9-5950x-sixteen-core-socket-am4-3.4ghz-processor.html'
		}
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: '#pagination_contents .grid-list .vs-grid',
			sitePrefix: 'https://www.awd-it.co.uk',
			titleSelector: '.title-price-wrapper > a[href]'
		}),
		ttl: 300000,
		urls: [
			{
				series: '3070',
				url: 'https://www.awd-it.co.uk/components/graphics-cards/nvidia/nvidia-geforce-rtx-3070.html'
			},
			{
				series: '3080',
				url: 'https://www.awd-it.co.uk/components/graphics-cards/nvidia/nvidia-geforce-rtx-3080.html'
			},
			{
				series: '3090',
				url: 'https://www.awd-it.co.uk/components/graphics-cards/nvidia/nvidia-geforce-rtx-3090.html'
			}
		]
	},
	name: 'awd',
	waitUntil: 'domcontentloaded'
};