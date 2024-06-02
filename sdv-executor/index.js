import {updateTierId} from "./updateTierId.js";
import {decryptEnvVar} from "./kms.js";

// Call decryptEnvVar outside the handler, at the top-level, 
// so that these are decrypted once per container.
await decryptEnvVar("PRIVATE_KEY");

async function handler (event) {
    try {
        const { tokenId, tierId } = event;

        if (tokenId === undefined || tierId === undefined) {
            return {
                statusCode: 400,
                error: 'tokenId and tierId are required' ,
            };
        }

        const txHash = await updateTierId(tokenId, tierId);

        return {
            statusCode: 200,
            transactionHash: { txHash },
        };
    } catch (error) {
        console.error('Error updating tier ID:', error);
        return {
            statusCode: 500,
            error: 'Internal Server Error',
            errorBody: error
        };
    }
};

export {handler};
