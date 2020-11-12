import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Currys: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		inStock: {
			container: '#product-actions button',
			text: ['add to basket']
		},
		maxPrice: {
			container: '#product-actions span[class*="ProductPriceBlock__Price"]',
			euroFormat: false // Note: Currys uses non-euroFromat as price seperator
		},
		outOfStock: {
			container: '#product-actions .unavailable',
			text: ['not available for delivery']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/msi-geforce-rtx-2060-8-gb-super-ventus-gp-oc-graphics-card-10196803-pdt.html'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen 5',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/processors/amd-ryzen-5-5600x-processor-10216691-pdt.html'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen 7',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/processors/amd-ryzen-7-5800x-processor-10216690-pdt.html'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen 9',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/processors/amd-ryzen-9-5900x-processor-10216689-pdt.html'
		},
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen 9',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/processors/amd-ryzen-9-5950x-processor-10216688-pdt.html'
		},
		{
			brand: 'microsoft',
			model: 'series x',
			series: 'xbox',
			url: 'https://business.currys.co.uk/catalogue/tv-entertainment/gaming/gaming-consoles/microsoft-xbox-series-x-1-tb/N780279W'
		},
		{
			brand: 'microsoft',
			model: 'series s',
			series: 'xbox',
			url: 'https://www.currys.co.uk/gbuk/gaming/console-gaming/consoles/microsoft-xbox-series-s-512-gb-ssd-10205195-pdt.html'
		},
		{
			brand: 'asus',
			model: 'tuf gaming oc',
			series: '3080',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/asus-geforce-rtx-3080-10-gb-tuf-gaming-oc-graphics-card-10214446-pdt.html'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3080',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/asus-geforce-rtx-3080-10-gb-rog-strix-gaming-oc-graphics-card-10215051-pdt.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/gigabyte-geforce-rtx-3080-10-gb-vision-oc-graphics-card-10216248-pdt.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/asus-geforce-rtx-3080-10-gb-tuf-gaming-graphics-card-10214421-pdt.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/msi-geforce-rtx-3080-10-gb-gaming-x-trio-graphics-card-10214425-pdt.html'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/asus-geforce-rtx-3080-10-gb-rog-strix-gaming-graphics-card-10214882-pdt.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/msi-geforce-rtx-3080-10-gb-ventus-3x-oc-graphics-card-10214426-pdt.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/gigabyte-geforce-rtx-3080-10-gb-gaming-oc-graphics-card-10214434-pdt.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/gigabyte-geforce-rtx-3080-10-gb-aorus-master-graphics-card-10216247-pdt.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/gigabyte-geforce-rtx-3080-10-gb-eagle-oc-graphics-card-10214430-pdt.html'
		},
		{
			brand: 'gigabyte',
			model: 'auros xtreme',
			series: '3080',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/gigabyte-geforce-rtx-3080-10-gb-aorus-xtreme-graphics-card-10216731-pdt.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3070',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/gigabyte-geforce-rtx-3070-8-gb-eagle-graphics-card-10217336-pdt.html'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3070',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/asus-geforce-rtx-3070-8-gb-dual-graphics-card-10215777-pdt.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3070',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/gigabyte-geforce-rtx-3070-8-gb-eagle-oc-graphics-card-10216239-pdt.html'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3070',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/msi-geforce-rtx-3070-8-gb-ventus-2x-oc-graphics-card-10217083-pdt.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/gigabyte-geforce-rtx-3070-8-gb-gaming-oc-graphics-card-10216240-pdt.html'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/asus-geforce-rtx-3070-8-gb-dual-oc-graphics-card-10215776-pdt.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/msi-geforce-rtx-3070-8-gb-ventus-3x-oc-graphics-card-10217078-pdt.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3070',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/asus-geforce-rtx-3070-8-gb-tuf-oc-gaming-graphics-card-10217338-pdt.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/msi-geforce-rtx-3070-8-gb-gaming-x-trio-graphics-card-10217077-pdt.html'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3070',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/asus-geforce-rtx-3070-8-gb-rog-strix-gaming-graphics-card-10215775-pdt.html'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3070',
			url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/graphics-cards/asus-geforce-rtx-3070-8-gb-rog-strix-gaming-oc-graphics-card-10215770-pdt.html'
		}
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: '.resultList .product',
			sitePrefix: 'https://www.currys.co.uk',
			titleSelector: '.productTitle',
			urlSelector: 'a[href]'
		}),
		urls: [
			// {
			// 	series: '3070',
			// 	url: 'https://www.currys.co.uk/gbuk/rtx-3070/components-upgrades/graphics-cards/324_3091_30343_xx_ba00013562-bv00313849/xx-criteria.html'

			// },
			// {
			// 	series: '3080',
			// 	url: 'https://www.currys.co.uk/gbuk/rtx-3080/components-upgrades/graphics-cards/324_3091_30343_xx_ba00013562-bv00313767/xx-criteria.html'
			// }, // was not working so took it off
			{
				series: '3090',
				url: 'https://www.currys.co.uk/gbuk/rtx-3090/components-upgrades/graphics-cards/324_3091_30343_xx_ba00013562-bv00313725/xx-criteria.html'
			}
		]
	},
	name: 'currys',
	waitUntil: 'domcontentloaded'
};
