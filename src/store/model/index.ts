import {config, defaultStoreData} from '../../config';
import {Amazon} from './amazon';
import {AmazonDe} from './amazon-de';
import {AmazonEs} from './amazon-es';
import {AmazonFr} from './amazon-fr';
import {AmazonIt} from './amazon-it';
import {AmazonNl} from './amazon-nl';
import {AmazonUk} from './amazon-uk';
import {Argos} from './argos';
import {AmdDe} from './amd-de';
import {AmdIt} from './amd-it';
import {Aria} from './aria';
import {AsusDe} from './asus-de';
import {Azerty} from './azerty';
import {Awd} from './awd';
import {Box} from './box';
import {Ccl} from './ccl';
import {Currys} from './currys';
import {Ebuyer} from './ebuyer';
import {EvgaEu} from './evga-eu';
import {Game} from './game';
import {JohnLewis} from './johnlewis';
import {Novatech} from './novatech';
import {Nvidia} from './nvidia';
import {NvidiaApi} from './nvidia-api';
import {Overclockers} from './overclockers';
import {Scan} from './scan';
import {SmythsToys} from './smythstoys';
import {Very} from './very'
import {Store} from './store';
import {logger} from '../../logger';


export const storeList = new Map([
	[Amazon.name, Amazon],
	[AmazonDe.name, AmazonDe],
	[AmazonEs.name, AmazonEs],
	[AmazonFr.name, AmazonFr],
	[AmazonNl.name, AmazonNl],
	[AmazonUk.name, AmazonUk],
	[AmazonIt.name, AmazonIt],
	[Argos.name, Argos],
	[AmdDe.name, AmdDe],
	[AmdIt.name, AmdIt],
	[Aria.name, Aria],
	[AsusDe.name, AsusDe],
	[Azerty.name, Azerty],
	[Awd.name, Awd],
	[Box.name, Box],
	[Ccl.name, Ccl],
	[Currys.name, Currys],
	[Ebuyer.name, Ebuyer],
	[EvgaEu.name, EvgaEu],
	[Game.name, Game],
	[JohnLewis.name, JohnLewis],
	[Novatech.name, Novatech],
	[Nvidia.name, Nvidia],
	[NvidiaApi.name, NvidiaApi],
	[Overclockers.name, Overclockers],
	[Scan.name, Scan],
	[SmythsToys.name, SmythsToys],
	[Very.name, Very],

]);

const brands = new Set();
const models = new Set();
const series = new Set();
const stores = new Map();

function filterBrandsSeriesModels() {
	brands.clear();
	series.clear();
	models.clear();

	for (const store of storeList.values()) {
		for (const link of store.links) {
			brands.add(link.brand);
			series.add(link.series);
			models.add(link.model);
		}

		if (store.minPageSleep === undefined) {
			store.minPageSleep = defaultStoreData.minPageSleep;
		}

		if (store.maxPageSleep === undefined) {
			store.maxPageSleep = defaultStoreData.maxPageSleep;
		}
	}
}

function printConfig() {
	if (config.store.stores.length > 0) {
		logger.info(
			`ℹ selected stores: ${config.store.stores
				.map((store) => store.name)
				.join(', ')}`
		);
	}

	if (config.store.showOnlyBrands.length > 0) {
		logger.info(`ℹ selected brands: ${config.store.showOnlyBrands.join(', ')}`);
	}

	if (config.store.showOnlyModels.length > 0) {
		logger.info(
			`ℹ selected models: ${config.store.showOnlyModels
				.map((entry) => {
					return entry.series
						? entry.name + ' (' + entry.series + ')'
						: entry.name;
				})
				.join(', ')}`
		);
	}

	if (config.store.showOnlySeries.length > 0) {
		logger.info(`ℹ selected series: ${config.store.showOnlySeries.join(', ')}`);
	}
}

function warnIfStoreDeprecated(store: Store) {
	switch (store.name) {
		case 'nvidia':
		case 'nvidia-api':
			logger.warn(`${store.name} is deprecated in favor of bestbuy`);
			break;
		case 'evga':
			logger.warn(
				`${store.name} is deprecated since they only support queuing`
			);
			break;
		default:
	}
}

export function updateStores() {
	stores.clear();

	for (const storeData of config.store.stores) {
		const store = storeList.get(storeData.name);

		if (store) {
			warnIfStoreDeprecated(store);
			stores.set(storeData.name, store);
			store.minPageSleep = storeData.minPageSleep;
			store.maxPageSleep = storeData.maxPageSleep;
		} else {
			logger.warn(`No store named ${storeData.name}, skipping.`);
		}
	}

	filterBrandsSeriesModels();
	printConfig();
}

updateStores();

export function getAllBrands() {
	return Array.from(brands);
}

export function getAllSeries() {
	return Array.from(series);
}

export function getAllModels() {
	return Array.from(models);
}

export function getStores() {
	return stores;
}

export * from './store';
