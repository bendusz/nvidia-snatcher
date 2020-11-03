import {Store} from './store';

export const AmazonNl: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['voer de karakters in die u hieronder ziet']
		},
		inStock: {
			container: '#availability',
			text: ['op voorraad', 'verkrijgbaar vanaf', 'wordt gewoonlijk verzonden binnen', 'nog slechts']
		},
		maxPrice: {
			container: 'span[class*="PriceString"]',
			euroFormat: true
		},
		outOfStock: [
			{
				container: '#availability',
				text: ['tijdelijk niet']
			},
			{
				container: '#outOfStock',
				text: ['we weten niet of en wanneer dit item weer op voorraad is']
			}
		]
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.nl/dp/B083JX52VG/'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HN7VVLJ/'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HN6KYS3/'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HN37VQK/'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HN4DSTC/'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HGBYWQ6/'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HGYXP4C/'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HGLN78Q/'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HH1BMQQ/'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HJ9XFNM/'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08KHLDS72/'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HHZVZ3N/'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HLZXHZY/'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08KH7RL89/'
		},
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08JD6QPXD/'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HM4V2DH/'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HM4M621/'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08JCVWTQY/'
		},
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08JCKYYL8/'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.nl/dp/B08HR1NPPQ/'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HN642LY/'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HN51T8Q/'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HN4FLFJ/'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HN5B8FJ/'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HGFNPJQ/'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08J5NMDP7/'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HGS1SXH/'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HGZ4XSZ/'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HGKQ527/'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HGTNDL4/'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08KH7R4FQ/'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HJPDJTY/'
		},
		{
			brand: 'gigabyte',
			model: 'turbo',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08KHKDTSJ/'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HJRF2CN/'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HRBW6VB/'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HM661YM/'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08JQQ1VD1/'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HR6ZBYJ/'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url: 'https://www.amazon.nl/dp/B08HJQ182D/'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08HSJ1622/'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08KHFZN9P/'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08HT7PR9Y/'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08L8JNTXQ/'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08KWPDXJZ/'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08L6PCZTR/'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08KWN2LZG/'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08M13DXSZ/'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08KHL21CV/'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08KHL2J5X/'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08L3QCZKZ/'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08L3QZP7W/'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08L3Q41SM/'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08HRBR7K9/'
		},
		{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08LBVNKT1/'
		},
		{
			brand: 'pny',
			model: 'dual fan',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08HBF5L3K/'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08HBJB7YD/'
		},
		{
			brand: 'gigabyte',
			model: 'GAMING OC',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08KHL21CV/'
		},
		{
			brand: 'palit',
			model: 'GamingPro',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08LDS72P2/'
		},
		{
			brand: 'palit',
			model: 'GamingPro OC',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08LDT6HQ5/'
		},
		{
			brand: 'msi',
			model: 'Gaming X Trio',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08LNPPCWJ/'
		},
		{
			brand: 'msi',
			model: 'Ventus 2X OC',
			series: '3070',
			url: 'https://www.amazon.nl/dp/B08LNQTSCT/'
		}
	],
	name: 'amazon-nl'
};
