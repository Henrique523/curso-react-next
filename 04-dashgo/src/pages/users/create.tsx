import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { CustomInput } from "../../components/Form/Input";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex="1" borderRadius={8} bgColor="gray.800" p={["6", "8"]}>
                    <Heading size='lg' fontWeight='normal'>Criar Usuário</Heading>
                    <Divider my='6' borderColor='gray.700' />

                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing={["6", "8"]} width='100%'>
                            <CustomInput name='name' label='Nome Completo' />
                            <CustomInput name='email' label='E-mail' type='email' />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing={["6", "8"]} width='100%'>
                            <CustomInput name='password' label='Senha' type='password' />
                            <CustomInput 
                                name='password_confirmation' 
                                label='Confirmação de Senha' 
                                type='password_confirmation' 
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                                <Button as="a" colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button colorScheme='pink'>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}