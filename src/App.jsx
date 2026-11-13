import RandomProduct from './components/RandomProduct';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center pt-8">Fake Store</h1>
      <RandomProduct />
    </div>
  );
}