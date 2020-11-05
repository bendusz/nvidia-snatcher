import {Store} from './store';

export const AmazonIt: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['inserisci i caratteri che vedi sotto']
		},
		inStock: {
			container: '#desktop_buybox',
			text: ['aggiungi al carrello']
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
			url: 'https://www.amazon.it/dp/B083JX52VG/'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08HN7VVLJ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08HN6KYS3?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08HN37VQK?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08HN4DSTC?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08HGBYWQ6?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08HGYXP4C?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08HGLN78Q?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08HH1BMQQ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08HJ9XFNM?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08KHLDS72?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08HHZVZ3N?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08HLZXHZY?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08KH7RL89?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08JD6QPXD?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08HM4V2DH?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08HM4M621?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08JCVWTQY?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08JCKYYL8?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.it/dp/B08HR1NPPQ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HN642LY?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HN51T8Q?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HN4FLFJ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HN5B8FJ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HGFNPJQ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08J5NMDP7?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HGS1SXH?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HGZ4XSZ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HGKQ527?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HGTNDL4?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08KH7R4FQ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HJPDJTY?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'gigabyte',
			model: 'turbo',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08KHKDTSJ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HJRF2CN?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HRBW6VB?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HM661YM?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08JQQ1VD1?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HR6ZBYJ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url: 'https://www.amazon.it/dp/B08HJQ182D?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08HSJ1622?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08KHFZN9P?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08HT7PR9Y?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08L8JNTXQ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08KWPDXJZ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08L6PCZTR?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08KWN2LZG?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08M13DXSZ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08KHL21CV?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08KHL2J5X?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08L3QCZKZ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08L3QZP7W?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08L3Q41SM?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08HRBR7K9?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08LBVNKT1?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'pny',
			model: 'dual fan',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08HBF5L3K?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08HBJB7YD?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'gigabyte',
			model: 'GAMING OC',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08KHL21CV?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'palit',
			model: 'GamingPro',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08LDS72P2?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'palit',
			model: 'GamingPro OC',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08LDT6HQ5?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'msi',
			model: 'Gaming X Trio',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08LNPPCWJ?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'msi',
			model: 'Ventus 2X OC',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08LNQTSCT?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'msi',
			model: 'VENTUS 3X OC',
			series: '3070',
			url: 'https://www.amazon.it/dp/B08KWLMZV4?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen 9',
			url: 'https://www.amazon.it/dp/B08164VTWH?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen 7',
			url: 'https://www.amazon.it/dp/B0815XFSGK?tag=b3sz4r4s0a-21'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen 5',
			url: 'https://www.amazon.it/dp/B08166SLDF?tag=b3sz4r4s0a-21'
		}
	],
	name: 'amazon-it'
};
