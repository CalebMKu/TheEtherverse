import { Button, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { connectWebThree } from "../utils/connectWebThree";
import { abi } from "../abis/abi";
import { TransactionContext } from "../context/TransactionContext";

const contractAddress = "0x7B0399e704A4B4679e10130556586220f3C33959";

const EthereumForm = () => {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [amount, setAmount] = useState("");

  const { createTransaction } = useContext(TransactionContext);

  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  const sendEthereum = () => {
    const _price = web3.utils.toWei(amount);
    const encoded = contract.inputs?.send(receiverAddress).encodeABI();

    const tx = {
      from: window.ethereum.selectedAddress,
      to: receiverAddress,
      data: encoded,
      nonce: "0x00",
      value: web3.utils.numberToHex(_price),
    };

    const txHash = window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [tx],
      })
      .then((hash) => {
        createTransaction(
          window.ethereum.selectedAddress,
          receiverAddress,
          amount
        );
        alert("HASH: " + hash);
      })
      .catch((error) => {
        alert(error);
      });

    return txHash;
  };

  useEffect(() => {
    const w3 = connectWebThree();
    const c = new w3.eth.Contract(abi, contractAddress);
    setWeb3(w3);
    setContract(c);
  }, []);

  return (
    <Flex
      w="100%"
      flexDirection="column"
      bgColor="white"
      border="1px"
      borderColor="gray.300"
      p={10}
      gap={4}
    >
      <Text fontSize="3xl" textAlign="center" fontWeight="bold">
        Send Ethereum
      </Text>
      <Input
        value={receiverAddress}
        rounded="full"
        onChange={(e) => setReceiverAddress(e.target.value)}
        placeholder="Receiver address"
        border="1px"
        borderColor="gray.300"
        size="lg"
      />
      <Input
        value={amount}
        rounded="full"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount in ethereum"
        border="1px"
        borderColor="gray.300"
        size="lg"
      />
      <Button
        onClick={() => sendEthereum()}
        colorScheme="teal"
        rounded="full"
        w="full"
      >
        Send
      </Button>
    </Flex>
  );
};

export default EthereumForm;
