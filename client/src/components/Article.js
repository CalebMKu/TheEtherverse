import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const Article = ({ article }) => {
  return (
    <Flex
      flexDirection="column"
      bgColor="white"
      border="1px"
      borderColor="gray.300"
      w="full"
      p={5}
    >
      <Link href={article.url}>
        <Text fontSize="3xl" fontWeight="bold">
          {article.title}
        </Text>
      </Link>
      <Box mt={2}>
        <Text fontSize="sm">{article.source}</Text>
      </Box>
    </Flex>
  );
};

export default Article;
