import {ethers} from "ethers";
import * as exportedHandler from  "./index.js";

// const newWallet = new ethers.Wallet("0xe006b5a80e09d549b3a5a8c4a7ae5e65f4c33cc747066ea5b0f4a3cf18c471ca");
// console.log(newWallet.privateKey, newWallet.address);

exportedHandler.handler({toAddress: "0x9cA70B93CaE5576645F5F069524A9B9c3aef5006"}).then(console.log);
// console.log(handler);
