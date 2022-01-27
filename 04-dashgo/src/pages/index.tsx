import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';
import { CustomInput } from '../components/Form/Input';

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir='column'>
        <Stack spacing={4}>
          <CustomInput name='email' type='email' label='E-mail' />
          <CustomInput name='password' type='password' label='Senha' />
        </Stack>

        <Button type='submit' mt={6} colorScheme='pink' size='lg'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
