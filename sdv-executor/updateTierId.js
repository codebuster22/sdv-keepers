import {ethers} from "ethers";

const providerUrl = process.env.ETH_PROVIDER_URL;
const privateKey = process.env.PRIVATE_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;
const contractABI = [
    // Replace this with your contract's ABI
    "function updateTierId(uint256 _tokenId, uint256 _tierId) public onlyRole(bytes32 role)"
];

const provider = new ethers.providers.JsonRpcProvider(providerUrl);
const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

export async function updateTierId(tokenId, tierId) {
    const tx = await contract.updateTierId(tokenId, tierId);
    await tx.wait(); // Wait for the transaction to be mined
    return tx.hash; // Return the transaction hash
}
