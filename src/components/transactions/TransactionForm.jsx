import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export function TransactionForm() {
  const { addTransaction } = useGlobalState();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });

    setDescription("");
    setAmount(0);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
          className="block w-full px-3 py-2 mb-2 text-white rounded-lg bg-zinc-600"
          value={description}
        />
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          placeholder="0.00"
          className="block w-full px-3 py-2 mb-2 text-white rounded-lg bg-zinc-600"
          value={amount}
        />
        <button
          className="block w-full px-3 py-2 mb-2 text-white bg-indigo-700 rounded-lg disabled:opacity-50"
          disabled={!description || !amount}
        >Add Transaction</button>
      </form>
    </div>
  );
}