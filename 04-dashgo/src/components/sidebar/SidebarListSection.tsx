import { Box, Text, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface SidebarListSectionProps {
    title: string;
    children: ReactNode;
}

export function SidebarListSection({ children, title }: SidebarListSectionProps) {
    return (
        <Box>
            <Text fontWeight='bold' color='gray.400' fontSize='small'>{title}</Text>
            <Stack spacing='4' mt='8' align='stretch'>
                {children}
            </Stack>
        </Box>
    );
}