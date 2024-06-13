## SDV Signer

This AWS lambda function will generate signature signed by trusted entity. This signatures are needed to make the transaction to mint the SDV membership NFT. Following Enviornment Variables are needed to setup on AWS Lambda:
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
    "toAddress": `0x${string}`; // the address of the user who will mint the NFT
}
```

### Build a Zip file
```sh
sh createZip.sh
```