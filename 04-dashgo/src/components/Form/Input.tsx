import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { UseFormRegister } from "react-hook-form";

interface CustomInputProps extends InputProps {
    name: string;
    label?: string;
}

const CustomInputBase: ForwardRefRenderFunction<HTMLInputElement, CustomInputProps> = ({ name, label, ...rest }, ref) => {
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
                ref={ref}
                size='lg'
                {...rest}
            />
        </FormControl>
    );
}

export const CustomInput = forwardRef(CustomInputBase);