import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Transaction = ({ transaction, onDelete }) => {
  return (
    <Flex
      flexDirection="column"
      bgColor="white"
      p={5}
      w="100%"
      border="1px"
      borderColor="gray.300"
      mt={3}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">
          Transaction #{transaction.id}
        </Text>
        <Text fontSize="sm" fontWeight="light">
          {transaction.created_at}
        </Text>
      </Flex>
      <Flex flexDirection="column">
        <Text color="gray.300">Sender: {transaction.sender_address}</Text>
        <Text color="gray.300">Receiver: {transaction.receiver_address}</Text>
        <Text color="gray.300">Amount: {transaction.amount}</Text>
      </Flex>
      <Flex justifyContent="center" mt={4}>
        <Button onClick={onDelete} color="blue.500" bgColor="transparent" fontWeight="bold">
          Delete
        </Button>
      </Flex>
    </Flex>
  );
};

export default Transaction;
