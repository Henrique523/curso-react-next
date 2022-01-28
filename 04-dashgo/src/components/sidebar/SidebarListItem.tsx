import { Icon, Link, Text } from "@chakra-ui/react";

interface SidebarListItemProps {
    icon: any;
    text: string;
}

export function SidebarListItem({ text, icon }: SidebarListItemProps) {
    return (
        <Link display='flex' align='center'>
            <Icon as={icon} fontSize='20' />
            <Text ml='4' fontWeight='medium'>{text}</Text>
        </Link>
    );
}