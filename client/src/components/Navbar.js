import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { connectWallet } from "../utils/connectWallet";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [connected, setConnected] = useState(false);

  const [search, setSearch] = useState("");
  const [hiddenSearchBox, setHiddenSearchBox] = useState(true);
  const { transactions } = useContext(TransactionContext);

  const connect = () => {
    const account = connectWallet();
    if (account) {
      setConnected(true);
    }
  };

  const filterTransactions = (transactions, query) => {
    if (!query) {
      return transactions;
    }

    return transactions.filter((t) => {
      const transactionID = t.id;
      return transactionID == Number(query);
    });
  };

  const filteredTransactions = filterTransactions(transactions, search);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="full"
      bgColor="white"
      border="1px"
      borderColor="gray.300"
      p={4}
      gap={6}
    >
      <Box>
        <Text fontSize="3xl" fontWeight="bold">
          ETHERVERSE
        </Text>
      </Box>
      <Box w="100%">
        <SearchBar
          search={search}
          setSearch={setSearch}
          onFocus={() => setHiddenSearchBox(false)}
        />
        {!hiddenSearchBox ? (
          <Flex
            flexDirection="column"
            alignItems="center"
            bg="white"
            border="1px"
            borderColor="gray.300"
            p={4}
            zIndex="overlay"
          >
            {filteredTransactions.map((t) => (
              <Link
                href={`/transactions/${t.id}`}
                color="blue.500"
                fontWeight="bold"
              >
                <p>
                  Transaction #{t.id} - on {t.created_at}
                </p>
              </Link>
            ))}
            <Button
              mt={4}
              colorScheme="yellow"
              onClick={() => setHiddenSearchBox(true)}
            >
              Cancel
            </Button>
          </Flex>
        ) : null}
      </Box>
      <Box>
        <Button onClick={() => connect()} colorScheme="teal" rounded="full">
          {connected ? "Connected" : "Connect"}
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
