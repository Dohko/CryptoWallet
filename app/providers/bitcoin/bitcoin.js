/**
 * @providesModule app-provider-bitcoin
 */

import SInfo from 'react-native-sensitive-info';

import { keychain } from 'app-provider-keychain';
import Bitcoin from 'lib-bitcoin';

const bitcoinAddress = 'wallet-app-bitcoin-address';

class BitcoinWallet {
	
	async address() {
		let address = await keychain.item(bitcoinAddress);
		if (address == null) {
			const keyPair = Bitcoin.ECPair.makeRandom();
			const address = keyPair.getAddress();
			const newAddress = keychain.add(bitcoinAddress, address);
			return newAddress;
		}
		else {
			return address
		}
	}

}

export const bitcoin = new BitcoinWallet();
