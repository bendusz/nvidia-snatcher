import {Store} from './store';

export const AmazonDe: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		captcha: {
			container: 'body',
			text: ['geben sie die unten angezeigten zeichen ein', 'geben sie die zeichen unten ein']
		},
		inStock: {
			container: '#desktop_buybox',
			text: ['in den einkaufswagen']
		},
		maxPrice: {
			container: 'span[class*="PriceString"]',
			euroFormat: true
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.de/dp/B083JX52VG/'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HN7VVLJ?tag=bend3st0e9-21'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HN6KYS3?tag=bend3st0e9-21'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HN37VQK?tag=bend3st0e9-21'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HN4DSTC?tag=bend3st0e9-21'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HGBYWQ6?tag=bend3st0e9-21'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HGYXP4C?tag=bend3st0e9-21'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HGLN78Q?tag=bend3st0e9-21'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HH1BMQQ?tag=bend3st0e9-21'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HJ9XFNM?tag=bend3st0e9-21'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08KHLDS72?tag=bend3st0e9-21'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HHZVZ3N?tag=bend3st0e9-21'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HLZXHZY?tag=bend3st0e9-21'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08KH7RL89?tag=bend3st0e9-21'
		},
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08JD6QPXD?tag=bend3st0e9-21'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HM4V2DH?tag=bend3st0e9-21'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HM4M621?tag=bend3st0e9-21'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08JCVWTQY?tag=bend3st0e9-21'
		},
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08JCKYYL8?tag=bend3st0e9-21'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HR1NPPQ?tag=bend3st0e9-21'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HN642LY?tag=bend3st0e9-21'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HN51T8Q?tag=bend3st0e9-21'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HN4FLFJ?tag=bend3st0e9-21'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HN5B8FJ?tag=bend3st0e9-21'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HGFNPJQ?tag=bend3st0e9-21'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08J5NMDP7?tag=bend3st0e9-21'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HGS1SXH?tag=bend3st0e9-21'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HGZ4XSZ?tag=bend3st0e9-21'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HGKQ527?tag=bend3st0e9-21'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HGTNDL4?tag=bend3st0e9-21'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08KH7R4FQ?tag=bend3st0e9-21'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HJPDJTY?tag=bend3st0e9-21'
		},
		{
			brand: 'gigabyte',
			model: 'turbo',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08KHKDTSJ?tag=bend3st0e9-21'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HJRF2CN?tag=bend3st0e9-21'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HRBW6VB?tag=bend3st0e9-21'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HM661YM?tag=bend3st0e9-21'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08JQQ1VD1?tag=bend3st0e9-21'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HR6ZBYJ?tag=bend3st0e9-21'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HJQ182D?tag=bend3st0e9-21'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08HSJ1622?tag=bend3st0e9-21'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08KHFZN9P?tag=bend3st0e9-21'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08HT7PR9Y?tag=bend3st0e9-21'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08L8JNTXQ?tag=bend3st0e9-21'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08KWPDXJZ?tag=bend3st0e9-21'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08L6PCZTR?tag=bend3st0e9-21'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08KWN2LZG?tag=bend3st0e9-21'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08M13DXSZ?tag=bend3st0e9-21'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08KHL21CV?tag=bend3st0e9-21'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08KHL2J5X?tag=bend3st0e9-21'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08L3QCZKZ?tag=bend3st0e9-21'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08L3QZP7W?tag=bend3st0e9-21'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08L3Q41SM?tag=bend3st0e9-21'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08HRBR7K9?tag=bend3st0e9-21'
		},
		{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08LBVNKT1?tag=bend3st0e9-21'
		},
		{
			brand: 'pny',
			model: 'dual fan',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08HBF5L3K?tag=bend3st0e9-21'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08HBJB7YD?tag=bend3st0e9-21'
		},
		{
			brand: 'gigabyte',
			model: 'GAMING OC',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08KHL21CV?tag=bend3st0e9-21'
		},
		{
			brand: 'palit',
			model: 'GamingPro',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08LDS72P2?tag=bend3st0e9-21'
		},
		{
			brand: 'palit',
			model: 'GamingPro OC',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08LDT6HQ5?tag=bend3st0e9-21'
		},
		{
			brand: 'msi',
			model: 'Gaming X Trio',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08LNPPCWJ?tag=bend3st0e9-21'
		},
		{
			brand: 'msi',
			model: 'Ventus 2X OC',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08LNQTSCT?tag=bend3st0e9-21'
		},
		{
			brand: 'msi',
			model: 'VENTUS 3X OC',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08KWLMZV4?tag=bend3st0e9-21'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen 9',
			url: 'https://www.amazon.de/dp/B08164VTWH?tag=bend3st0e9-21'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen 7',
			url: 'https://www.amazon.de/dp/B0815XFSGK?tag=.bend3st0e9-21'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen 5',
			url: 'https://www.amazon.de/dp/B08166SLDF?tag=.bend3st0e9-21'
		}
	],
	name: 'amazon-de'
};
