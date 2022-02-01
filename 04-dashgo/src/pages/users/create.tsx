import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from "next/link";

import { CustomInput } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().required('Campo obrigatório').email('Insira um e-mail válido'),
    password: yup.string().required('Campo obrigatório').min(6, 'A senha precisa ter no mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

export default function CreateUser() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(createUserFormSchema),
    });

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        console.log(values);
    }

    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box
                    as="form"
                    flex="1"
                    borderRadius={8}
                    bgColor="gray.800"
                    p={["6", "8"]}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size='lg' fontWeight='normal'>Criar Usuário</Heading>
                    <Divider my='6' borderColor='gray.700' />

                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing={["6", "8"]} width='100%'>
                            <CustomInput 
                                name='name'
                                label='Nome Completo'
                                error={errors.name}
                                {...register('name')}
                            />
                            <CustomInput 
                                name='email'
                                label='E-mail'
                                type='email'
                                error={errors.email}
                                {...register('email')}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing={["6", "8"]} width='100%'>
                            <CustomInput 
                                name='password'
                                label='Senha'
                                type='password'
                                error={errors.password}
                                {...register('password')}
                            />
                            <CustomInput
                                name='password_confirmation'
                                label='Confirmação de Senha'
                                type='password_confirmation'
                                error={errors.password_confirmation}
                                {...register('password_confirmation')}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                                <Button as="a" colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button isLoading={isSubmitting} type='submit' colorScheme='pink'>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}