import { signMintRequest } from './eip712.js';
import dotenv from "dotenv";
dotenv.config({});

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CHAIN_ID = parseInt(process.env.CHAIN_ID, 10);
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const NAME = process.env.NAME;
const VERSION = process.env.VERSION;

const handler = async (event) => {
    try {
        const { toAddress } = event;

        if (!toAddress) {
            return {
                statusCode: 400,
                error: 'toAddress is required'
            };
        }

        const signature = await signMintRequest(PRIVATE_KEY, toAddress, CHAIN_ID, CONTRACT_ADDRESS, NAME, VERSION);

        return {
            statusCode: 200,
            signature: signature
        };
    } catch (error) {
        console.error('Error signing mint request:', error);
        return {
            statusCode: 500,
            error: 'Internal Server Error'
        };
    }
};

export {handler};
