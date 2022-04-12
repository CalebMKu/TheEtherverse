import Web3 from "web3";

export const connectWebThree = () => {
  const web3 = new Web3(window.ethereum);

  return web3;
};
