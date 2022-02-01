import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface CustomInputProps extends InputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const CustomInputBase: ForwardRefRenderFunction<HTMLInputElement, CustomInputProps> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
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
                ref={ref}
                size='lg'
                {...rest}
            />

            {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}

        </FormControl>
    );
}

export const CustomInput = forwardRef(CustomInputBase);