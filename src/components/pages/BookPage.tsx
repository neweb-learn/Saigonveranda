import React from 'react';
import { Button } from '../ui/Button';
import { Calendar, Users, Clock } from 'lucide-react';

export const BookPage = () => {
  return (
    <div className="py-24 container mx-auto px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
        <div className="text-center mb-8">
           <h1 className="font-serif text-3xl text-stone-900 mb-2">Book a Table</h1>
           <p className="text-stone-500">Reserve your spot at the Veranda.</p>
        </div>

        <form className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">Date</label>
                <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
                    <input type="date" className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:border-[#43A047] focus:ring-1 focus:ring-[#43A047] outline-none transition-all" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">Time</label>
                <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
                    <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:border-[#43A047] focus:ring-1 focus:ring-[#43A047] outline-none transition-all bg-white appearance-none">
                        <option>5:00 PM</option>
                        <option>5:30 PM</option>
                        <option>6:00 PM</option>
                        <option>6:30 PM</option>
                        <option>7:00 PM</option>
                        <option>7:30 PM</option>
                        <option>8:00 PM</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">Guests</label>
                <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
                    <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:border-[#43A047] focus:ring-1 focus:ring-[#43A047] outline-none transition-all bg-white appearance-none">
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4 People</option>
                        <option>5 People</option>
                        <option>6+ People</option>
                    </select>
                </div>
            </div>

            <div className="pt-4">
                <Button className="w-full justify-center" size="lg">Confirm Reservation</Button>
            </div>
            
            <p className="text-center text-xs text-stone-400 mt-4">
                For parties larger than 8, please call us directly.
            </p>
        </form>
      </div>
    </div>
  );
};
