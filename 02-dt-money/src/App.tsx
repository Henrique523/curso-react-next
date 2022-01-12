import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import {useCallback, useState} from "react";
import {NewTransactionModal} from "./components/NewTransactionModal";
import {TransactionsProvider} from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


    const handleOpenNewTransactionModal = useCallback(() => {
        setIsNewTransactionModalOpen(true);
    }, []);

    const handleCloseNewTransactionModal = useCallback(() => {
        setIsNewTransactionModalOpen(false);
    }, []);


  return (
    <TransactionsProvider>
        <GlobalStyle />
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

        <Dashboard />
    </TransactionsProvider>
  );
}
