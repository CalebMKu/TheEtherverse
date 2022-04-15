import { Container } from "@chakra-ui/react";
import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Container maxW="md" mt={100}>
      <LoginForm />
    </Container>
  );
};

export default Login;
