import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'} fontFamily={'cursive'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
            fontFamily={'cursive'}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'white'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'} fontFamily={'cursive'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'} fontFamily={'cursive'}>
            <a target={'black'} href="https://youtube.com/">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'} fontFamily={'cursive'}>
            <a target={'black'} href="https://instagram.com/">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'} fontFamily={'cursive'}>
            <a target={'black'} href="https://github.com/">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;