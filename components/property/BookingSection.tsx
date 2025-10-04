// components/property/BookingSection.tsx
import { useState } from 'react';

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<number>(1);

  // Get today's date in YYYY-MM-DD format for min dates
  const today = new Date().toISOString().split('T')[0];
  
  // Calculate min date for checkout (day after checkin)
  const getMinCheckoutDate = () => {
    if (!checkIn) return today;
    const nextDay = new Date(checkIn);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay.toISOString().split('T')[0];
  };

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return price;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? price * nights : price;
  };

  const nights = checkIn && checkOut ? 
    Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)) : 0;

  const total = calculateTotal();
  const cleaningFee = 50;
  const serviceFee = Math.round(total * 0.1);
  const finalTotal = total + cleaningFee + serviceFee;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
      <div className="mb-4">
        <span className="text-2xl font-bold">${price}</span>
        <span className="text-gray-600"> night</span>
      </div>

      {/* Date Pickers - Fixed structure */}
      <div className="border border-gray-300 rounded-lg overflow-hidden mb-4">
        <div className="grid grid-cols-2 border-b border-gray-300">
          {/* Check-in Date */}
          <div className="border-r border-gray-300 p-3">
            <label htmlFor="checkin-date" className="block text-xs font-semibold text-gray-800 mb-1">
              CHECK-IN
            </label>
            <input 
              id="checkin-date"
              type="date" 
              value={checkIn}
              min={today}
              onChange={(e) => {
                setCheckIn(e.target.value);
                // If checkout is before new checkin, clear checkout
                if (checkOut && new Date(checkOut) <= new Date(e.target.value)) {
                  setCheckOut('');
                }
              }}
              className="w-full text-sm focus:outline-none bg-transparent"
            />
          </div>
          
          {/* Check-out Date */}
          <div className="p-3">
            <label htmlFor="checkout-date" className="block text-xs font-semibold text-gray-800 mb-1">
              CHECKOUT
            </label>
            <input 
              id="checkout-date"
              type="date" 
              value={checkOut}
              min={getMinCheckoutDate()}
              disabled={!checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className={`w-full text-sm focus:outline-none bg-transparent ${
                !checkIn ? 'text-gray-400 cursor-not-allowed' : ''
              }`}
            />
          </div>
        </div>

        {/* Guests Selector */}
        <div className="p-3">
          <label htmlFor="guests-select" className="block text-xs font-semibold text-gray-800 mb-1">
            GUESTS
          </label>
          <select 
            id="guests-select"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full text-sm focus:outline-none bg-transparent"
          >
            <option value={1}>1 guest</option>
            <option value={2}>2 guests</option>
            <option value={3}>3 guests</option>
            <option value={4}>4 guests</option>
            <option value={5}>5 guests</option>
            <option value={6}>6+ guests</option>
          </select>
        </div>
      </div>

      {/* Reserve Button */}
      <button 
        className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 px-4 rounded-lg font-semibold text-lg transition duration-200 mb-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={!checkIn || !checkOut}
      >
        {!checkIn || !checkOut ? 'Select dates to reserve' : 'Reserve now'}
      </button>

      {/* Price Breakdown - Only show if dates are selected */}
      {(checkIn && checkOut) && (
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="underline">${price} × {nights} night{nights !== 1 ? 's' : ''}</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Cleaning fee</span>
            <span>${cleaningFee}</span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Service fee</span>
            <span>${serviceFee}</span>
          </div>
          <div className="border-t border-gray-300 pt-3 flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>${finalTotal}</span>
          </div>
        </div>
      )}

      {/* Helper text when no dates selected */}
      {(!checkIn || !checkOut) && (
        <p className="text-center text-gray-500 text-sm mt-2">
          Please select check-in and check-out dates to see total
        </p>
      )}
    </div>
  );
};

export default BookingSection;