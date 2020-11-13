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
				'https://www.amazon.co.uk/dp/B081265T5Z?tag=bend3st0b-21',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.co.uk/dp/B081265T5Z/'
		},
		{
			brand: 'pny',
			cartUrl: 'https://www.amazon.co.uk/dp/B08HBR7QBM?tag=bend3st0b-21',
			model: 'xlr8',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HBR7QBM'
		},
		{
			brand: 'pny',
			cartUrl: 'https://www.amazon.co.uk/dp/B08HBTJMLJ?tag=bend3st0b-21',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HBTJMLJ'
		},
		{
			brand: 'msi',
			cartUrl: 'https://www.amazon.co.uk/dp/B08HR7SV3M?tag=bend3st0b-21',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HR7SV3M'
		},
		{
			brand: 'evga',
			cartUrl: 'https://www.amazon.co.uk/dp/B08HR3Y5GQ?tag=bend3st0b-21',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HR3Y5GQ'
		},
		{
			brand: 'evga',
			cartUrl: 'https://www.amazon.co.uk/dp/B08HR55YB5?tag=bend3st0b-21',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HR55YB5'
		},
		{
			brand: 'evga',
			cartUrl: 'https://www.amazon.co.uk/dp/B08HR3DPGW?tag=bend3st0b-21',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HR3DPGW'
		},
		{
			brand: 'evga',
			cartUrl: 'https://www.amazon.co.uk/dp/B08HR4RJ3Q?tag=bend3st0b-21',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HR4RJ3Q'
		},
		{
			brand: 'evga',
			cartUrl: 'https://www.amazon.co.uk/dp/B08HR6FMF3?tag=bend3st0b-21',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HR6FMF3'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://www.amazon.co.uk/dp/B08HJTH61J?tag=bend3st0b-21',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HJTH61J'
		},
		{
			brand: 'gigabyte',
			cartUrl: 'https://www.amazon.co.uk/dp/B08HJS2JLJ?tag=bend3st0b-21',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HJS2JLJ'
		},
		{
			brand: 'asus',
			cartUrl: 'https://www.amazon.co.uk/dp/B08HH5WF97?tag=bend3st0b-21',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HH5WF97'
		},
		{
			brand: 'asus',
			cartUrl: 'https://www.amazon.co.uk/dp/B08HHDP9DW?tag=bend3st0b-21',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HHDP9DW'
		},
		{
			brand: 'asus',
			cartUrl: 'https://www.amazon.co.uk/dp/B08J6F174Z?tag=bend3st0b-21',
			model: 'rog strix oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08J6F174Z'
		},
		{
			brand: 'asus',
			cartUrl: 'https://www.amazon.co.uk/dp/B08J6GMWCQ?tag=bend3st0b-21',
			model: 'rog strix oc',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08J6GMWCQ'
		},
		{
			brand: 'msi',
			cartUrl: 'https://www.amazon.co.uk/dp/B08HR5SXPS?tag=bend3st0b-21',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HR5SXPS'
		},
		{
			brand: 'zotac',
			cartUrl: 'https://www.amazon.co.uk/dp/B08HJNKT3P?tag=bend3st0b-21',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HJNKT3P'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HN7VVLJ?tag=bend3st0b-21',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HN7VVLJ/'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HN6KYS3?tag=bend3st0b-21',
			model: 'rog strix oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HN6KYS3/'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HN37VQK?tag=bend3st0b-21',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HN37VQK/'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HN4DSTC?tag=bend3st0b-21',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HN4DSTC/'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HGBYWQ6?tag=bend3st0b-21',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HGBYWQ6/'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HGYXP4C?tag=bend3st0b-21',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HGYXP4C/'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HGLN78Q?tag=bend3st0b-21',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HGLN78Q/'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HH1BMQQ?tag=bend3st0b-21',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HH1BMQQ/'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HJ9XFNM?tag=bend3st0b-21',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HJ9XFNM/'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KHLDS72?tag=bend3st0b-21',
			model: 'aorus master',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08KHLDS72/'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HHZVZ3N?tag=bend3st0b-21',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HHZVZ3N/'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HLZXHZY?tag=bend3st0b-21',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HLZXHZY/'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KH7RL89?tag=bend3st0b-21',
			model: 'vision oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08KH7RL89/'
		},
		{
			brand: 'inno3d',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08JD6QPXD?tag=bend3st0b-21',
			model: 'twin x2 oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08JD6QPXD/'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HM4V2DH?tag=bend3st0b-21',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HM4V2DH/'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HM4M621?tag=bend3st0b-21',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HM4M621/'
		},
		{
			brand: 'palit',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08JCVWTQY?tag=bend3st0b-21',
			model: 'gaming pro',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08JCVWTQY/'
		},
		{
			brand: 'palit',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08JCKYYL8?tag=bend3st0b-21',
			model: 'gaming pro oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08JCKYYL8/'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HR1NPPQ?tag=bend3st0b-21',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HR1NPPQ/'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HN642LY?tag=bend3st0b-21',
			model: 'rog strix',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HN642LY/'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HN51T8Q?tag=bend3st0b-21',
			model: 'rog strix oc',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HN51T8Q/'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HN4FLFJ?tag=bend3st0b-21',
			model: 'tuf',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HN4FLFJ/'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HN5B8FJ?tag=bend3st0b-21',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HN5B8FJ/'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HGFNPJQ?tag=bend3st0b-21',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HGFNPJQ/'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08J5NMDP7?tag=bend3st0b-21',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08J5NMDP7/'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HGS1SXH?tag=bend3st0b-21',
			model: 'ftw3 ultra',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HGS1SXH/'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HGZ4XSZ?tag=bend3st0b-21',
			model: 'xc3',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HGZ4XSZ/'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HGKQ527?tag=bend3st0b-21',
			model: 'xc3 black',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HGKQ527/'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HGTNDL4?tag=bend3st0b-21',
			model: 'xc3 ultra',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HGTNDL4/'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KH7R4FQ?tag=bend3st0b-21',
			model: 'aorus master',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08KH7R4FQ/'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HJPDJTY?tag=bend3st0b-21',
			model: 'eagle oc',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HJPDJTY/'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KHKDTSJ?tag=bend3st0b-21',
			model: 'turbo',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08KHKDTSJ/'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HJRF2CN?tag=bend3st0b-21',
			model: 'gaming oc',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HJRF2CN/'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HRBW6VB?tag=bend3st0b-21',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HRBW6VB/'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HM661YM?tag=bend3st0b-21',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HM661YM/'
		},
		{
			brand: 'palit',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08JQQ1VD1?tag=bend3st0b-21',
			model: 'gaming pro',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08JQQ1VD1/'
		},
		{
			brand: 'nvidia',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HR6ZBYJ?tag=bend3st0b-21',
			model: 'founders edition',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HR6ZBYJ/'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HJQ182D?tag=bend3st0b-21',
			model: 'trinity',
			series: '3090',
			url: 'https://www.amazon.co.uk/dp/B08HJQ182D/'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HSJ1622?tag=bend3st0b-21',
			model: 'dual',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08HSJ1622/'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KHFZN9P?tag=bend3st0b-21',
			model: 'dual oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KHFZN9P/'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HT7PR9Y?tag=bend3st0b-21',
			model: 'rog strix',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08HT7PR9Y/'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L8JNTXQ?tag=bend3st0b-21',
			model: 'rog strix oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L8JNTXQ/'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KWPDXJZ?tag=bend3st0b-21',
			model: 'ventus 2x oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KWPDXJZ/'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L6PCZTR?tag=bend3st0b-21',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L6PCZTR/'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KWN2LZG?tag=bend3st0b-21',
			model: 'gaming x trio',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KWN2LZG/'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08M13DXSZ?tag=bend3st0b-21',
			model: 'vision oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08M13DXSZ/'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KHL21CV?tag=bend3st0b-21',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KHL21CV/'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KHL2J5X?tag=bend3st0b-21',
			model: 'eagle oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KHL2J5X/'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L3QCZKZ?tag=bend3st0b-21',
			model: 'xc3 black',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L3QCZKZ/'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L3QZP7W?tag=bend3st0b-21',
			model: 'xc3',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L3QZP7W/'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L3Q41SM?tag=bend3st0b-21',
			model: 'xc3 ultra',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L3Q41SM/'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HRBR7K9?tag=bend3st0b-21',
			model: 'twin edge',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08HRBR7K9/'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08LBVNKT1?tag=bend3st0b-21',
			model: 'twin edge oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08LBVNKT1/'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HBF5L3K?tag=bend3st0b-21',
			model: 'dual fan',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08HBF5L3K/'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HBJB7YD?tag=bend3st0b-21',
			model: 'xlr8 rgb',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08HBJB7YD/'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KHL21CV?tag=bend3st0b-21',
			model: 'GAMING OC',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KHL21CV/'
		},
		{
			brand: 'palit',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08LDS72P2?tag=bend3st0b-21',
			model: 'GamingPro',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08LDS72P2/'
		},
		{
			brand: 'palit',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08LDT6HQ5?tag=bend3st0b-21',
			model: 'GamingPro OC',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08LDT6HQ5/'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08LNPPCWJ?tag=bend3st0b-21',
			model: 'Gaming X Trio',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08LNPPCWJ/'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08LNQTSCT?tag=bend3st0b-21',
			model: 'Ventus 2X OC',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08LNQTSCT/'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KWLMZV4?tag=bend3st0b-21',
			model: 'VENTUS 3X OC',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KWLMZV4/'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.co.uk/dp/B0815Y8J9N?tag=bend3st0b-21',
			model: '5950x',
			series: 'ryzen 9',
			url: 'https://www.amazon.co.uk/dp/B0815Y8J9N/'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08164VTWH?tag=bend3st0b-21',
			model: '5900x',
			series: 'ryzen 9',
			url: 'https://www.amazon.co.uk/dp/B08164VTWH/'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.co.uk/dp/B0815XFSGK?tag=bend3st0b-21',
			model: '5800x',
			series: 'ryzen 7',
			url: 'https://www.amazon.co.uk/dp/B0815XFSGK/'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08166SLDF?tag=bend3st0b-21',
			model: '5600x',
			series: 'ryzen 5',
			url: 'https://www.amazon.co.uk/dp/B08166SLDF/'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08FC5L3RG?tag=bend3st0b-21',
			model: 'console',
			series: 'playstation',
			url: 'https://www.amazon.co.uk/dp/B08FC5L3RG/'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08H97NYGP?tag=bend3st0b-21',
			model: 'digital',
			series: 'playstation',
			url: 'https://www.amazon.co.uk/dp/B08H97NYGP/'
		},
		{
			brand: 'microsoft',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08H93GKNJ?tag=bend3st0b-21',
			model: 'series x',
			series: 'xbox',
			url: 'https://www.amazon.co.uk/dp/B08H93GKNJ/'
		},
		{
			brand: 'microsoft',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08GD9MNZB?tag=bend3st0b-21',
			model: 'series s',
			series: 'xbox',
			url: 'https://www.amazon.co.uk/dp/B08GD9MNZB/'
		}
		
	],
	// linksBuilder: {
	// 	builder: (docElement, series) => {
	// 		const productElements = docElement.find(
	// 			'.s-result-list .s-result-item[data-asin]'
	// 		);
	// 		const links: Link[] = [];
	// 		for (let i = 0; i < productElements.length; i++) {
	// 			const productElement = productElements.eq(i);
	// 			const asin = productElement.attr()['data-asin'];

	// 			if (!asin) {
	// 				continue;
	// 			}

	// 			const url = `https://www.amazon.co.uk/dp/${asin}/`;
	// 			const titleElement = productElement
	// 				.find('.sg-col-inner h2 a.a-text-normal[href] span')
	// 				.first();
	// 			const title = titleElement.text().trim();

	// 			if (!title || !new RegExp(`RTX.*${series}`, 'i').exec(title)) {
	// 				continue;
	// 			}

	// 			const card = parseCard(title);

	// 			if (card) {
	// 				links.push({
	// 					brand: card.brand as any,
	// 					cartUrl: `https://www.amazon.co.uk/dp/${asin}?tag=bend3st0b-21`,
	// 					model: card.model,
	// 					series,
	// 					url
	// 				});
	// 			} else {
	// 				logger.error(`Failed to parse card: ${title}`);
	// 			}
	// 		}

	// 		return links;
	// 	},
	// 	ttl: 300000,
	// 	urls: [
	// 		{
	// 			series: '3080',
	// 			url: [
	// 				'https://www.amazon.co.uk/s?k=%2B%22RTX+3080%22+-2080+-GTX&i=computers&rh=n%3A430500031%2Cp_n_availability%3A419162031&s=relevancerank&dc&qid=1601675291',
	// 				'https://www.amazon.co.uk/s?k=%2B%22RTX+3080%22+-2080+-GTX&i=computers&rh=n%3A430500031%2Cp_n_availability%3A419162031&s=relevancerank&dc&qid=1601675594&page=2'
	// 			]
	// 		},
	// 		{
	// 			series: '3090',
	// 			url: [
	// 				'https://www.amazon.co.uk/s?k=%2B%22RTX+3090%22+-3080+-GTX&i=computers&rh=n%3A430500031%2Cp_n_availability%3A419162031&s=relevancerank&dc&qid=1601675291',
	// 				'https://www.amazon.co.uk/s?k=%2B%22RTX+3090%22+-3080+-GTX&i=computers&rh=n%3A430500031%2Cp_n_availability%3A419162031&s=relevancerank&dc&qid=1601675594&page=2'
	// 			]
	// 		}
	// 	]
	// },
	name: 'amazon-uk'
};
