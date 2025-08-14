import type { Stay } from "../../types/index";

export default function StayCard({ stay }: { stay: Stay }) {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src={stay.imageUrl} 
          alt={stay.title} 
          className="h-40 w-full object-cover rounded-xl"
        />
        {stay.isFavorite && (
          <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-md text-xs font-semibold">
            Guest favorite
          </div>
        )}
      </div>
      <div className="mt-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-sm line-clamp-1">{stay.title}</h3>
          <div className="flex items-center">
            <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs ml-1">{stay.rating}</span>
          </div>
        </div>
        <p className="text-sm mt-1">
          <span className="font-semibold">${stay.price}</span> for 2 nights
        </p>
      </div>
    </div>
  );
}
