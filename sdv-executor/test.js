import {handler} from "./index.js";

const tokenId = 1;
const tierId = 1;

// console.log(exported);
handler({tokenId, tierId}).then(console.log);