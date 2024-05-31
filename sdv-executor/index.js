import {updateTierId} from "./updateTierId";

exports.handler = async (event) => {
    try {
        const { tokenId, tierId } = JSON.parse(event.body || '{}');

        if (tokenId === undefined || tierId === undefined) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'tokenId and tierId are required' }),
            };
        }

        const txHash = await updateTierId(tokenId, tierId);

        return {
            statusCode: 200,
            body: JSON.stringify({ txHash }),
        };
    } catch (error) {
        console.error('Error updating tier ID:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};
