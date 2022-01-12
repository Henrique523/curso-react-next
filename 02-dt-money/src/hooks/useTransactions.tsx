import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from 'react';
import {api} from "../services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode,
}

interface TransactionsProviderData {
    transactions: Transaction[];
    createTransaction: (transaction: Omit<Transaction, 'id' | 'createdAt'>) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsProviderData>({} as TransactionsProviderData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions));
    }, []);

    const createTransaction = useCallback(async (transaction: Omit<Transaction, 'id' | 'createdAt'>) => {
        const { data } = await api.post('/transactions', {...transaction, createdAt: new Date()});
        setTransactions([...transactions, {...data, createdAt: String(new Date())}]);
    }, [transactions]);

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}
