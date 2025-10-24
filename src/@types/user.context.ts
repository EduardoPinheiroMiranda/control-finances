

export interface UserContextType {
    loadingFinancialData: boolean,
    applications: Application | null,
    invoice: Invoice | null,
    cards: Card | null,
    movements: Movement | null
};

export interface Application {
    value: number,
    applications: {
        id: string,
        value: string,
        name: string,
        targetValue: string,
        institution: string,
        colorFont: string,
        colorApplication: string,
        icon: string,
        createdAt: string
        updatedAt: string
        userId: string
    }[]
};

interface Installment {
    installmentId: string,
    installmentNumber: number,
    installmentValue: number,
    dueDate: string,
    pay: true,
    shoppingId: string,
    totalInstallments: number,
    typeInvoice: string,
    paymentMethod: string,
    name: string,
    purchaseDate: string
};

export interface Invoice {
    invoiceId: string,
    pay: true,
    dueDate: string,
    closingDate: string,
    current: true,
    amount: number,
    limit: number,
    available: number,
    totalFixedExpense: number,
    totalExtraExpense: number,
    totalInvoice: number,
    totalCard: number,
    totalMoney: number,
    installments: {
        fixedExpense: Installment[],
        extraExpense: Installment[],
    }
    percentageSpent: number
};

export interface Card {
    name: string,
    id: string,
    colorFont: string,
    createdAt: string,
    updatedAt: string,
    userId: string,
    dueDay: number,
    closingDay: number,
    colorCard: string,
    active: boolean
}

export interface Movement {
    id: string,
    name: string,
    type: string,
    value: string,
    installment: number,
    createdAt: string,
    userId: string,
    shoppingId: string,
    extractId: string
}