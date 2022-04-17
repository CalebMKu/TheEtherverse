import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Articles from "../components/Articles";
import EthereumForm from "../components/EthereumForm";
import Transactions from "../components/Transactions";
import { useScreenType } from "../utils/useScreenType";

const Dashboard = () => {
  const screenType = useScreenType();
  let middle = null;

  if (screenType === "1-cols") {
    middle = (
      <Container maxW="1200px" mt={25}>
        <Grid templateColumns="repeat(1, 1fr)">
          <GridItem w="100%">
            <EthereumForm />
          </GridItem>
          <GridItem w="100%">
            <Transactions />
            <Articles />
          </GridItem>
        </Grid>
      </Container>
    );
  } else if (screenType === "2-cols") {
    middle = (
      <Container maxW="1200px" mt={25}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%">
            <EthereumForm />
            <Transactions />
          </GridItem>
          <GridItem w="100%">
            <Articles />
          </GridItem>
        </Grid>
      </Container>
    );
  } else if (screenType === "fullscreen") {
    middle = (
      <Container maxW="1200px" mt={25}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%">
            <EthereumForm />
            <Transactions />
          </GridItem>
          <GridItem w="100%">
            <Articles />
          </GridItem>
        </Grid>
      </Container>
    );
  }

  return middle;
};

export default Dashboard;
