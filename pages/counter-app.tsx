import { useCount } from "@/context/CountContext";

export default function CounterApp() {
  const { count, increment, decrement } = useCount();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <p className="text-xl mb-4">Count: {count}</p>
      <div className="flex gap-4">
        <button onClick={decrement} className="bg-red-500 text-white px-4 py-2 rounded">
          -
        </button>
        <button onClick={increment} className="bg-blue-500 text-white px-4 py-2 rounded">
          +
        </button>
      </div>
    </div>
  );
}
