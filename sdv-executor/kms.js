import { KMSClient, DecryptCommand } from "@aws-sdk/client-kms"; // ES Modules import

const client = new KMSClient({region: process.env.AWS_DEFAULT_REGION});

async function decryptEnvVar(name) {
    try {
        const encrypted = process.env[name];
        const req = {
          CiphertextBlob: Buffer.from(encrypted, 'base64'),
          EncryptionContext: { LambdaFunctionName: process.env.AWS_LAMBDA_FUNCTION_NAME },
        };
        const command = new DecryptCommand(req);
        const response = await client.send(command);
        const decryptedValue = new TextDecoder().decode(response.Plaintext);

        process.env[name] = decryptedValue;
        return decryptedValue;
    } catch (err) {
        console.log('Decrypt error:', err);
        throw err;
    }
}

export {decryptEnvVar};
