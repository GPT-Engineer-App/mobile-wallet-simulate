import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, useColorMode, useColorModeValue } from "@chakra-ui/react";

const TopUp = () => {
  const [amount, setAmount] = useState("");
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const handleTopUp = async (e) => {
    e.preventDefault();
    const realAmount = (parseFloat(amount) / 100).toFixed(2);

    const url = "https://api.nexuspay.cloud/hook/process";
    const headers = {
      "Content-Type": "text/plain",
      "Authorization": "Bearer W6dprK2khmaaWJ5g5trryaaQjtOspcHNxqfZm9U="
    };
    const data = JSON.stringify({
      name: "gerald",
      email: "marcSmith@yahoo.com",
      amount: realAmount,
      pay_method: "sp-qrph",
      mobilenumber: "0909333322",
      address: "Manila ph",
      webhook: "https://api.nexuspay.cloud/hook/icore.php",
      remarks: "remarks"
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: data
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.text();
      alert(`Status Code: ${response.status}\nResponse Text: ${responseData}`);
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
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