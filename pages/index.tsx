import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Splash App</h1>
      <Link href="/counter-app">
        <a className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Go to Counter App</a>
      </Link>
    </main>
  );
}
