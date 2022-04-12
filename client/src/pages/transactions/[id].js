import { Flex, Text, Button, Container } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { useRouter } from "next/router";

const Transaction = () => {
  const { transaction, getTransaction } = useContext(TransactionContext);
  const { query } = useRouter();
  const router = useRouter();

  useEffect(() => {
    getTransaction(query.id);
  }, [transaction]);

  return (
    <>
      <Container maxW="600px">
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
              Transaction #{transaction?.id}
            </Text>
            <Text fontSize="sm" fontWeight="light">
              {transaction?.created_at}
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text color="gray.300">Sender: {transaction?.sender_address}</Text>
            <Text color="gray.300">
              Receiver: {transaction?.receiver_address}
            </Text>
            <Text color="gray.300">Amount: {transaction?.amount}</Text>
          </Flex>
        </Flex>
      </Container>
      <Flex justifyContent="center" mt={4}>
        <Button colorScheme="yellow" onClick={() => router.push("/dashboard")}>Back</Button>
      </Flex>
    </>
  );
};

export default Transaction;
