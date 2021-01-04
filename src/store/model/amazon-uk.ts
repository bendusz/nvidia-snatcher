import {Link, Store} from './store';

export const AmazonUk: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '£',
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
			container: '#priceblock_ourprice'
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
				'https://www.amazon.co.uk/dp/B0753R2TWC',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.co.uk/dp/B0753R2TWC/'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08H95Y452',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.amazon.co.uk/dp/B08H95Y452'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08H97NYGP',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.amazon.co.uk/dp/B08H97NYGP'
		},
		{
			brand: 'microsoft',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08H93GKNJ',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.amazon.co.uk/dp/B08H93GKNJ'
		},
		{
			brand: 'microsoft',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08GD9MNZB',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.amazon.co.uk/dp/B08GD9MNZB'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.amazon.co.uk/AMD-Ryzen-5600X-Processor-Cache/dp/B08166SLDF'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.amazon.co.uk/AMD-Ryzen-5800X-Processor-Cache/dp/B0815XFSGK'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.amazon.co.uk/AMD-Ryzen-5900X-Processor-Cache/dp/B08164VTWH'
		},
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.amazon.co.uk/AMD-Ryzen-5950X-Processor-Cache/dp/B0815Y8J9N'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HN7VVLJ',
			model: 'strix',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HN7VVLJ'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HN6KYS3',
			model: 'strix oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HN6KYS3'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HN37VQK',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HN37VQK'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HN4DSTC',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HN4DSTC'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HGBYWQ6',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HGBYWQ6'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HGYXP4C',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HGYXP4C'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HGLN78Q',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HGLN78Q'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HH1BMQQ',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HH1BMQQ'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HJ9XFNM',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HJ9XFNM'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KHLDS72',
			model: 'aorus master',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08KHLDS72'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HHZVZ3N',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HHZVZ3N'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HLZXHZY',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HLZXHZY'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KH7RL89',
			model: 'vision oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08KH7RL89'
		},
		{
			brand: 'inno3d',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08JD6QPXD',
			model: 'twin x2 oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08JD6QPXD'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HM4V2DH',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HM4V2DH'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HM4M621',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HM4M621'
		},
		{
			brand: 'palit',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08JCVWTQY',
			model: 'gaming pro',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08JCVWTQY'
		},
		{
			brand: 'palit',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08JCKYYL8',
			model: 'gaming pro oc',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08JCKYYL8'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HR1NPPQ',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.co.uk/dp/B08HR1NPPQ'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KHFZN9P',
			model: 'dual',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KHFZN9P'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L8HPKR6',
			model: 'dual',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L8HPKR6'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L8JNTXQ',
			model: 'strix',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L8JNTXQ'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L8KC1J7',
			model: 'tuf',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L8KC1J7'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KY266MG',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KY266MG'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KWN2LZG',
			model: 'gaming',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KWN2LZG'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HBJB7YD',
			model: 'xlr8 revel',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08HBJB7YD'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08HBF5L3K',
			model: 'xlr8 uprising',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08HBF5L3K'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KWPDXJZ',
			model: 'ventus 2x oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KWPDXJZ'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KWLMZV4',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KWLMZV4'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08LF32LJ6',
			model: 'gaming',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08LF32LJ6'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L8L71SM',
			model: 'xc3 ultra',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L8L71SM'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08L8L9TCZ',
			model: 'ftw3 ultra',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08L8L9TCZ'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KY266MG',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KY266MG'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08M13DXSZ',
			model: 'vision oc',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08M13DXSZ'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08KXZV626',
			model: 'eagle',
			series: '3070',
			url: 'https://www.amazon.co.uk/dp/B08KXZV626'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08P2DQ28S',
			model: 'ventus 2x oc',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B08P2DQ28S'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08NW2YJB2',
			model: 'ventus 2x oc',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B08NW2YJB2'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08P3XJLJJ',
			model: 'twin edge',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B08P3XJLJJ'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08P3V572B',
			model: 'twin edge oc',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B08P3V572B'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08P3BJ9Y8',
			model: 'twin edge oc',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B08P3BJ9Y8'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08P3JPX8P',
			model: 'eagle',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B08P3JPX8P'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08NW2X37Z',
			model: 'gaming oc',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B08NW2X37Z'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08NW528S1',
			model: 'eagle oc',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B08NW528S1'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08NW693LG',
			model: 'xlr8 revel',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B08NW693LG'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B083Z5P6TX',
			model: 'tuf oc',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B083Z5P6TX'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08NZ4G4T2',
			model: 'tuf oc',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B08NZ4G4T2'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08P2HBBLX',
			model: 'dual oc',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B08P2HBBLX'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08PDN36R3',
			model: 'ftw3',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B08PDN36R3'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08PDP837W',
			model: 'xc gaming',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B08PDP837W'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.co.uk/dp/B08PDMVPZ4',
			model: 'xc3 black',
			series: '3060ti',
			url: 'https://www.amazon.co.uk/dp/B08PDMVPZ4'
		}
	],
	name: 'amazon-uk'
};
