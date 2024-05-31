import { Wallet } from 'ethers';

export async function signMintRequest(privateKey, toAddress, chainId, contractAddress, name, version) {
    const domain = {
        name: name,
        version: version,
        chainId: chainId,
        verifyingContract: contractAddress
    }
    const types = {
        "MintRequest": [{name: 'toAddress', type: 'address'}]
    };
    const values = {
        toAddress: toAddress
    };

    const wallet = new Wallet(privateKey);
    const typedSignature = await wallet.signTypedData(domain, types, values);
    return typedSignature;
}
