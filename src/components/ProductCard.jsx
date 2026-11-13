import { Star } from 'lucide-react';

function ProductCard({ title, price, description, category, image, rating }) {
  const rate = rating?.rate ?? 0;
  const ratingColor =
    rate < 2.0 ? 'text-red-500' : rate < 4.0 ? 'text-amber-500' : 'text-green-500';

  return (
    <div className="rounded-xl border border-gray-300 overflow-hidden flex flex-col justify-between bg-white">
      <img src={image} alt={title} className="w-full h-72 object-contain" />

      <div className="flex flex-col gap-3 p-5">
        <h2 className="font-bold text-2xl">{title}</h2>
        <div className="text-red-500 font-bold bg-red-200 w-fit px-2 py-1 rounded-md">
          {category}
        </div>
        <p className="line-clamp-4 text-gray-500">{description}</p>
      </div>

      <div className="flex items-center justify-between p-5">
        <h3 className="font-bold text-3xl">${price}</h3>
        <div className="flex items-center gap-1">
          <Star className="text-orange-500" size={16} />
          <p className={`${ratingColor} text-lg font-bold`}>{rate}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;