import {Store} from './store';

export const JohnLewis: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		inStock: {
			container: 'button--add-to-basket"',
			text: ['Add to your basket']
		},
		maxPrice: {
            container: '.u-centred price',
            euroFormat: false // Note: JohnLewis uses non-euroFromat as price seperator
        },
        outOfStock: {
			container: '.button--add-to-basket-out-of-stock',
			text: ['Out of stock']
        }
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.argos.co.uk/product/5718469'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.johnlewis.com/sony-playstation-5-console-with-dualsense-controller/white/p5115192'
		},
		// {
		// 	brand: 'sony',
		// 	model: 'ps5 digital',
		// 	series: 'sonyps5de',
		// 	url: 'https://www.argos.co.uk/product/6795151'
        // },
        {
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.johnlewis.com/microsoft-xbox-series-x-console-1tb-with-wireless-controller-black/p5151987'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.johnlewis.com/microsoft-xbox-series-s-digital-edition-console-512gb-with-wireless-controller-white/p5151986'
		}
	],
	name: 'johnlewis'
};
