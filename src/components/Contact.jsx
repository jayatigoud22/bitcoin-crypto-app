import React from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea
} from '@chakra-ui/react';

 const Contact = () =>{
   return(
    <Box w={"full"} h={"100vh"} textAlign={"center"} p={8}>
        <Heading>Contact Form</Heading>
        <form action="https://formspree.io/f/xbjeygyn"
            method="POST">
          <FormControl mt={4} isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="username" placeholder="Enter your name" />
          </FormControl> 
          <FormControl mt={4} isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" placeholder="test@test.com" />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea type="text" rows="5" cols="30"  name="message" placeholder="type Something..." />
          </FormControl>
          <Button  mt={4} type="submit" bgColor={"blackAlpha.800"} textColor={"white"}>
            Submit
          </Button>
        </form>
    </Box>
    
   );
 };

 export default Contact;