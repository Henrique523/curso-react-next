import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface SidebarListItemProps extends ChakraLinkProps {
    icon: ElementType;
    text: string;
    href: string;
}

export function SidebarListItem({ text, icon, href, ...rest }: SidebarListItemProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display='flex' align='center' {...rest}>
                <Icon as={icon} fontSize='20' />
                <Text ml='4' fontWeight='medium'>{text}</Text>
            </ChakraLink>
        </ActiveLink>
    );
}