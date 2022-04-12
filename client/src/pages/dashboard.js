import { Container, GridItem } from "@chakra-ui/react";
import React from "react";
import DashboardGrid from "../components/DashboardGrid";
import EthereumForm from "../components/EthereumForm";
import Transactions from "../components/Transactions";

const Dashboard = () => {
  return (
    <Container maxW="1200px" mt={25}>
      <DashboardGrid>
        <GridItem w="100%">
          <EthereumForm />
        </GridItem>
        <GridItem w="100%">
          <Transactions />
        </GridItem>
      </DashboardGrid>
    </Container>
  );
};

export default Dashboard;
