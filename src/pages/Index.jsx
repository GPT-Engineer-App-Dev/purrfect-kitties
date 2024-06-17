import { Container, Text, VStack, Heading, Box, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <Heading as="h1" size="2xl">Welcome to Cat World</Heading>
          <Text fontSize="xl" mt={4}>Discover the amazing world of cats</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Cat Breeds</Heading>
          <Text fontSize="md">Learn about different cat breeds and their unique characteristics.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Cat Care Tips</Heading>
          <Text fontSize="md">Get the best tips on how to take care of your feline friends.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Gallery</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={4}>
            <Image src="https://via.placeholder.com/300" alt="Cat 1" borderRadius="md" />
            <Image src="https://via.placeholder.com/300" alt="Cat 2" borderRadius="md" />
            <Image src="https://via.placeholder.com/300" alt="Cat 3" borderRadius="md" />
            <Image src="https://via.placeholder.com/300" alt="Cat 4" borderRadius="md" />
            <Image src="https://via.placeholder.com/300" alt="Cat 5" borderRadius="md" />
            <Image src="https://via.placeholder.com/300" alt="Cat 6" borderRadius="md" />
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;