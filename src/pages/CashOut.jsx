import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, useColorMode, useColorModeValue } from "@chakra-ui/react";

const CashOut = () => {
  const [amount, setAmount] = useState("");
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const handleCashOut = async (e) => {
    e.preventDefault();
    const realAmount = (parseFloat(amount) / 100).toFixed(2);

    // Simulated API response
    const simulatedResponse = {
      status: 200,
      text: JSON.stringify({
        trans_id: "165798067",
        external_id: "ZGYH310558446322",
        operation_id: "89648123750-479991711751",
        redirect_url: "https://portal.icorepay.net/pay/qr?content=MDAwMjAxMDEwMjEyMjg1MzAwMTFwaC5wcG1pLnAybTAxMTFTUkNQUEhNMlhYWDAzMTJNUkNITlQtM1YxSDYwNTAzMDAwNTIwNDUzOTk1MzAzNjA4NTQwNDEuMDA1ODAyUEg1OTA2TkVYUEFZNjAwNk1hbmlsYTYyNTUwMDEwcGguc3RhcnBheTAzMDZORVhQQVkwNTA4T1IjMjQwOE4wNzA4MTIzNDUgICAwODAzKioqODgyODAwMTJwaC5wcG1pLnFycGgwMTA4T1IjMjQwOE42MzA0RkFCNA==&amp;amount=MS4wMA==&amp;name=TkVYUEFZ&amp;expiration=MjAyNC0wNi0yNiAxOToyMjoxNA==",
        qr_content: "00020101021228530011ph.ppmi.p2m0111SRCPPHM2XXX0312MRCHNT-3V1H6050300052045399530360854041.005802PH5906NEXPAY6006Manila62550010ph.starpay0306NEXPAY0508OR#2408N070812345   0803***88280012ph.ppmi.qrph0108OR#2408N6304FAB4",
        operation: {
          status: "awaiting_redirect",
          error_code: null,
          error_message: "",
          provider_error_message: ""
        },
        request: {
          status: "success",
          error_code: 0,
          error_message: ""
        },
        timestamp: "2024-06-26 18:22:13",
        signature: "60514c7897ceb1cfe5f526f9379e06ea8d0e3139a60eac338698e6cf0987fe4f"
      })
    };

    try {
      if (simulatedResponse.status !== 200) {
        throw new Error(`HTTP error! status: ${simulatedResponse.status}`);
      }

      const responseData = simulatedResponse.text;
      alert(`Status Code: ${simulatedResponse.status}\nResponse Text: ${responseData}`);
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  };

  return (
    <Box bg={formBackground} p={8} rounded="md" w="full" maxW="md" mx="auto" mt={10}>
      <Heading mb={6} textAlign="center">Cash Out</Heading>
      <VStack as="form" spacing={4} onSubmit={handleCashOut}>
        <FormControl id="amount" isRequired>
          <FormLabel>Amount (PHP)</FormLabel>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" w="full">Cash Out</Button>
        <Button onClick={toggleColorMode} w="full">
          Toggle {useColorModeValue("Dark", "Light")} Mode
        </Button>
      </VStack>
    </Box>
  );
};

export default CashOut;