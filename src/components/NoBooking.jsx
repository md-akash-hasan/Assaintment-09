import Link from "next/link";

export default function NoBooking() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-6xl mb-4">🚗</div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        No bookings yet
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-xs">
        You haven t booked any car yet. Explore our collection and book your
        ride!
      </p>
      <Link
        href="/allcars"
        className="bg-black text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-gray-800 active:scale-95 transition"
      >
        Explore Cars
      </Link>
    </div>
  );
}
