import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function RandomProduct() {
  const [productId, setProductId] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) throw new Error(`Status ${response.status}`);
        const data = await response.json();
        console.log('fetched:', data);
        setProduct(data);
      } catch (err) {
        console.log('fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  function randomize() {
    setProductId(Math.floor(Math.random() * 20) + 1);
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6 max-w-md mx-auto">
      <button
        onClick={randomize}
        className="px-4 py-2 rounded-lg bg-black text-white cursor-pointer"
      >
        Random product
      </button>

      <p className="text-sm text-gray-500">
        id: {productId} | loading: {String(loading)} | error: {String(error)} |
        title: {product?.title ?? 'none'}
      </p>

      {product && <ProductCard {...product} />}
    </div>
  );
}