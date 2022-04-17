import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { FaEthereum, FaUserCircle, FaWallet } from "react-icons/fa";
import { TransactionContext } from "../context/TransactionContext";
import { connectWallet } from "../utils/connectWallet";
import SearchBar from "./SearchBar";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [connected, setConnected] = useState(false);

  const [search, setSearch] = useState("");
  const [hiddenSearchBox, setHiddenSearchBox] = useState(true);
  const { transactions } = useContext(TransactionContext);

  const { user, isAuthenticated, logout } = useAuth0();

  const connect = () => {
    connectWallet().then((isConnected) => {
      if (isConnected) {
        setConnected(true);
      } else {
        setConnected(false);
      }
    });
  };

  const filterTransactions = (transactions, query) => {
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
      <Flex alignItems="center">
        <Text fontSize="3xl" fontWeight="bold">
          ETHERVERSE
        </Text>
        <FaEthereum fontSize="30px" />
      </Flex>
      <Box w="100%">
        {isAuthenticated ? (
          <SearchBar
            search={search}
            setSearch={setSearch}
            onFocus={() => setHiddenSearchBox(false)}
          />
        ) : null}
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
      <Flex alignItems="center" gap={4}>
        <Text fontSize="2xl" fontWeight="light">
          {user?.email}
        </Text>
        {isAuthenticated ? (
          <>
            <FaUserCircle fontSize="40px" color="gray" />
            <Button onClick={() => connect()} colorScheme="teal" rounded="full">
              {connected ? "Connected" : "Connect"}
              <Box ml={4}>
                <FaWallet />
              </Box>
            </Button>
            <Button
              onClick={() => logout()}
              bgColor="transparent"
              color="red.500"
            >
              Logout
            </Button>
          </>
        ) : null}
      </Flex>
    </Flex>
  );
};

export default Navbar;
