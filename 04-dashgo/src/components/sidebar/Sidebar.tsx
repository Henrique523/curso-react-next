import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { SidebarListItem } from "./SidebarListItem";
import { SidebarListSection } from "./SidebarListSection";

export function Sidebar() {
    return (
        <Box as='aside' w='64' mr='8'>
            <Stack spacing='12' align='flex-start'>
                <SidebarListSection title="GERAL">
                    <SidebarListItem icon={RiDashboardLine} text="Dashboard" />
                    <SidebarListItem icon={RiContactsLine} text="Usuários" />
                </SidebarListSection>

                <SidebarListSection title="AUTOMAÇÃO">
                    <SidebarListItem icon={RiInputMethodLine} text="Formulários" />
                    <SidebarListItem icon={RiGitMergeLine} text="Automação" />
                </SidebarListSection>
            </Stack>
        </Box>
    );
}
