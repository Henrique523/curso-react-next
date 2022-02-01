import { Flex, Button, Stack } from '@chakra-ui/react';
import { useCallback } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { CustomInput } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
}

export default function Home() {
  const { register, handleSubmit } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values);
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex 
        as="form" 
        width="100%" 
        maxWidth={360} 
        bg="gray.800" 
        p="8" 
        borderRadius={8} 
        flexDir='column' 
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <CustomInput name='email' type='email' label='E-mail' {...register('email')} />
          <CustomInput name='password' type='password' label='Senha' {...register('password')} />
        </Stack>

        <Button type='submit' mt={6} colorScheme='pink' size='lg'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
