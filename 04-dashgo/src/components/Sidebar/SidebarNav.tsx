import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { SidebarListItem } from "./SidebarListItem";
import { SidebarListSection } from "./SidebarListSection";

export function SidebarNav() {
    return (
        <Stack spacing='12' align='flex-start'>
            <SidebarListSection title="GERAL">
                <SidebarListItem icon={RiDashboardLine} href='/dashboard' text="Dashboard" />
                <SidebarListItem icon={RiContactsLine} href='/users' text="Usuários" />
            </SidebarListSection>

            <SidebarListSection title="AUTOMAÇÃO">
                <SidebarListItem icon={RiInputMethodLine} href='/forms' text="Formulários" />
                <SidebarListItem icon={RiGitMergeLine} href='/automation' text="Automação" />
            </SidebarListSection>
        </Stack>
    );
}