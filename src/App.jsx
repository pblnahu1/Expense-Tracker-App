import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/transactions/TransactionList";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { ExpenseChart } from "./components/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="flex items-center justify-center h-screen text-white bg-neutral-950">
        <div className="flex items-center justify-center w-2/5">
          <div className="w-full p-10 rounded-md bg-neutral-800">
            <Header />
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div className="flex-1">
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>
              <div className="flex flex-col flex-1">
                <ExpenseChart />
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;