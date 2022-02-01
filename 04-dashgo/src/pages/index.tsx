import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { CustomInput } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Campo obrigatório').email('Insira um e-mail válido'),
  password: yup.string().required('Campo obrigatório'),
});

export default function Home() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
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
          <CustomInput 
            name='email' 
            type='email' 
            label='E-mail' 
            error={errors.email}
            {...register('email')
            }
          />
          <CustomInput 
            name='password'
            type='password'
            label='Senha'
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button isLoading={isSubmitting} type='submit' mt={6} colorScheme='pink' size='lg'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
