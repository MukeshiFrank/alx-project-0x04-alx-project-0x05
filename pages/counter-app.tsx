import { useCount } from "@/context/CountContext";

export default function CounterApp() {
  const { count, increment, decrement } = useCount();

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Counter App</h1>
      <p className="text-xl mb-4">Current Count: {count}</p>
      <div className="flex gap-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Decrement
        </button>
      </div>
    </main>
  );
}
