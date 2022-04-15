import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginForm = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Flex
      flexDirection="column"
      border="1px"
      borderColor="gray.300"
      bgColor="white"
      p={10}
      w="full"
      gap={4}
    >
      <Text fontSize="3xl" textAlign="center" fontWeight="black">
        Etherverse
      </Text>
      <Button onClick={() => loginWithRedirect()} colorScheme="teal" p={7}>
        Login With Auth0
      </Button>
    </Flex>
  );
};

export default LoginForm;
