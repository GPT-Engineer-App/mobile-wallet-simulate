import { Container, Text, VStack, Button, Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Box bg="blue.500" minH="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Container centerContent maxW="container.md" bg="white" p={6} borderRadius="md" boxShadow="md">
        <VStack spacing={4}>
          <Text fontSize="2xl">Balance: ₱10,000</Text>
          <Flex width="100%" justifyContent="space-between">
            <Button colorScheme="green" onClick={() => navigate("/topup")}>Top Up</Button>
            <Button colorScheme="red" onClick={() => navigate("/cashout")}>Cash Out</Button>
          </Flex>
          <Box width="100%" mt={4}>
            <Text fontSize="lg" mb={2}>Transactions</Text>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Text>No transactions available.</Text>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;