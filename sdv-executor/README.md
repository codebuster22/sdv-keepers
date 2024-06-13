## SDV Executor

This AWS lambda function will update the tier ID for a SDV Membership token ID on SDV Membership contract.
The Trusted Entity will making the transaction. Following Enviornment Variables are needed to setup on AWS Lambda:
```sh
PRIVATE_KEY={"Encrypted Private key of the trusted entity, encrypt the Private Key using AWS KMS only."}
CHAIN_ID={"Chain ID where the SDV Membership contract is deployed"}
CONTRACT_ADDRESS={"SDV Membership contract address deployed on target chain ID"}
PUBLIC_ADDRESS={"Public Address of the trusted entity"}
NAME={"Name of the Smart Contract for EIP712 configuration."}
VERSION={"Version of the Smart Contract for EIP712 configuration."}
ETH_PROVIDER_URL={"RPC Provider URL for the target chain"}
```

The AWS Lambda function accepts following parameters:
```typescript
{
    "tokenId": number; // the token ID whose membership tier needs to be changed.
    "tierId": number; // the tier ID to which the membership need to be changed to
}
```

### Build a Zip file
```sh
sh createZip.sh
```