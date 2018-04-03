/**
 * @providesModule app-provider-keychain
 */

import SInfo from 'react-native-sensitive-info';

const keychainService = 'wallet-app-keychain';

class Keychain {
	
	async clean() {
		const items = await SInfo.getAllItems({ sharedPreferencesName: keychainService, keychainService: keychainService });
		
		const mySelf = this;
		await items.forEach(await function (keys) {
			keys.forEach(function (key) {
				mySelf.remove(key.key);
			});
		});
	}

	async remove(key) {
		await SInfo.deleteItem(key, { sharedPreferencesName: keychainService, keychainService: keychainService })
	}

	async add(key, value) {
		const item = await SInfo.setItem(key, value, { sharedPreferencesName: keychainService, keychainService: keychainService });
		return item;
	}

	async item(key) {
		const item = await SInfo.getItem(key, { sharedPreferencesName: keychainService, keychainService: keychainService });
		return item;
	}
	
}

export const keychain = new Keychain();
