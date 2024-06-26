import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, useColorMode, useColorModeValue } from "@chakra-ui/react";

const Onboarding = ({ onComplete }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user details and proceed to the next step
    onComplete({ name, address });
  };

  return (
    <Box bg={formBackground} p={8} rounded="md" w="full" maxW="md" mx="auto" mt={10}>
      <Heading mb={6} textAlign="center">Onboarding</Heading>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="address" isRequired>
          <FormLabel>Address</FormLabel>
          <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" w="full">Complete Onboarding</Button>
        <Button onClick={toggleColorMode} w="full">
          Toggle {useColorModeValue("Dark", "Light")} Mode
        </Button>
      </VStack>
    </Box>
  );
};

export default Onboarding;