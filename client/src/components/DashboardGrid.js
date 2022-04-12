import React from "react";
import { Grid } from "@chakra-ui/react";

const DashboardGrid = ({ children }) => {
  return <Grid templateColumns="repeat(2, 1fr)" gap={6}>{children}</Grid>;
};

export default DashboardGrid;
