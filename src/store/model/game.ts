import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Game: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		inStock: {
			container: '.addToBasket',
			text: ['Buy New']
		},
		maxPrice: {
			container: '.btnPrice > p',
			euroFormat: true // Note: CCL uses non-euroFromat as price seperator
		},
		outOfStock: {
			container: '.btnName',
			text: ['Out of Stock', 'Preorder']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.game.co.uk/en/nintendo-switch-grey-improved-battery-2647590'
		}
	],
	// linksBuilder: {
	// 	builder: getProductLinksBuilder({
	// 		productsSelector: '.productListingContainerOuter .productList',
	// 		sitePrefix: 'https://www.cclonline.com',
	// 		titleAttribute: 'title',
	// 		titleSelector: '.productList_Detail a[title]'
	// 	}),
	// 	urls: [
	// 		{
	// 			series: 'xbox',
	// 			url: 'https://www.game.co.uk/en/hardware/xbox-series?sortBy=PRICE_DESC&cm_sp=Nav-_-Xbox-_-SeriesXS-_-Consoles',
  //             'https://www.game.co.uk/en/hardware/xbox-series/?contentOnly=&inStockOnly=true&listerOnly=&pageSize=48&sortBy=PRICE_DESC&pageNumber=2'
	// 		}
			// {
			// 	series: 'ps5',
			// 	url: 'https://www.cclonline.com/category/430/PC-Components/Graphics-Cards/GeForce-RTX-3080-Graphics-Cards/'
			// },
			// {
			// 	series: '3090',
			// 	url: 'https://www.cclonline.com/category/430/PC-Components/Graphics-Cards/GeForce-RTX-3090-Graphics-Cards/'
			// }
		]
	},
	name: 'game',
	waitUntil: 'domcontentloaded'
};
