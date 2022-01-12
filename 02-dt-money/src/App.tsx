import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import {useCallback, useState} from "react";
import {NewTransactionModal} from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    const handleOpenNewTransactionModal = useCallback(() => {
        setIsNewTransactionModalOpen(true);
    }, [isNewTransactionModalOpen]);

    const handleCloseNewTransactionModal = useCallback(() => {
        setIsNewTransactionModalOpen(false);
    }, [isNewTransactionModalOpen]);


  return (
    <>
        <GlobalStyle />
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

        <Dashboard />
    </>
  );
}
