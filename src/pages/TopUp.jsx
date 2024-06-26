import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, useColorMode, useColorModeValue } from "@chakra-ui/react";

const TopUp = () => {
  const [amount, setAmount] = useState("");
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const handleTopUp = (e) => {
    e.preventDefault();
    const realAmount = (parseFloat(amount) / 100).toFixed(2);
    alert(`You have topped up ${realAmount} PHP`);
  };

  return (
    <Box bg={formBackground} p={8} rounded="md" w="full" maxW="md" mx="auto" mt={10}>
      <Heading mb={6} textAlign="center">Top Up</Heading>
      <VStack as="form" spacing={4} onSubmit={handleTopUp}>
        <FormControl id="amount" isRequired>
          <FormLabel>Amount (PHP)</FormLabel>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" w="full">Top Up</Button>
        <Button onClick={toggleColorMode} w="full">
          Toggle {useColorModeValue("Dark", "Light")} Mode
        </Button>
      </VStack>
    </Box>
  );
};

export default TopUp;