import {JsonRpcProvider, ethers} from "ethers";
import dotenv from "dotenv";
dotenv.config({});

const providerUrl = process.env.ETH_PROVIDER_URL;
const privateKey = process.env.PRIVATE_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;
const contractABI = [
    {"type":"function","name":"updateTierId","inputs":[{"name":"_tokenId","type":"uint256","internalType":"uint256"},{"name":"_tierId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"}
];

const provider = new JsonRpcProvider(providerUrl);
const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

export async function updateTierId(tokenId, tierId) {
    const tx = await contract.updateTierId(tokenId, tierId);
    await tx.wait(); // Wait for the transaction to be mined
    return tx.hash; // Return the transaction hash
}
