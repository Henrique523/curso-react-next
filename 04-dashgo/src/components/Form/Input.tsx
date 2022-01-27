import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface CustomInputProps extends InputProps {
    name: string;
    label?: string;
}

export function CustomInput({ name, label, ...rest }: CustomInputProps) {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor='password'>{label}</FormLabel>}
            <Input
                name={name}
                id={name}
                focusBorderColor='pink.500'
                bgColor="gray.900"
                variant='filled'
                _hover={{
                    bgColor: 'gray.900',
                }}
                size='lg'
                {...rest}
            />
        </FormControl>
    );
}