import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "./TransactionItem";

export function TransactionList() {
  const { transactions } = useGlobalState();

  if (transactions.length === 0) {
    return (
      <div className="p-4 my-2 bg-zinc-900">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="my-2 text-xl font-bold">
            There are no transactions yet
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-zinc-900">
      <h3 className="my-2 text-xl font-bold text-center text-slate-300">History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}