import { useEffect } from 'react';
import ProductCard from './ProductCard';

export default function RandomProduct() {
	// fetch products depending on the product id https://fakestoreapi.com/products/${productId}
    const [productId, setProductId] = useState(()=> Math.floor(Math.random() * 20) + 1);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


	useEffect(() => {
        async function fetchProduct() {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `product id https://fakestoreapi.com/products/${productId}`
                );

                if (!response.ok) {
                    throw new Error(`Response failed with status ${response.status}`)
                }

                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [productId]);

    function randomize() {
        // implement a randomize function that returns a random integer from 1 to 20 and updates the productId state variable
        let randomId;

        do {
            randomId = Math.floor(Math.random() * 20) + 1;
        } while (randomId === productId);

        setProductId(randomId);
    }

	return (
		<div className="flex flex-col items-center gap-4 p-6 max-w-md mx-auto">
            <button
                onClick={randomize}
                className="px-4 py-2 rounded-lg bg-black text-white cursor-pointer"
            >
                Random Product
            </button>

            {loading && <p>Loading ...</p>}
            {error && <p className="text-red-500">Something went wrong: {error}</p>}
            {!loading && !error && product && <ProductCard {...product}/>}
		</div>
	);
}