import React from 'react';
import { siteContent } from '../../data/content';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export const VisitPage = () => {
  return (
    <div className="py-24 container mx-auto px-4 md:px-8 min-h-[80vh]">
      <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-16 text-center">Visit Us</h1>
      
      <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto items-center">
        <div className="space-y-12">
            <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#43A047]/10 flex items-center justify-center flex-shrink-0 text-[#43A047]">
                    <MapPin className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-serif text-2xl text-stone-900 mb-2">Location</h3>
                    <p className="text-stone-600 text-lg">{siteContent.footer.address}</p>
                    <p className="text-stone-500 mt-1">Located in the heart of the Culinary District, just steps from the river.</p>
                </div>
            </div>

            <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#43A047]/10 flex items-center justify-center flex-shrink-0 text-[#43A047]">
                    <Clock className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-serif text-2xl text-stone-900 mb-2">Opening Hours</h3>
                    <p className="text-stone-600 text-lg">{siteContent.footer.hours}</p>
                    <p className="text-stone-500 mt-1">Happy Hour: 4pm - 6pm</p>
                </div>
            </div>

            <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#43A047]/10 flex items-center justify-center flex-shrink-0 text-[#43A047]">
                    <Phone className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-serif text-2xl text-stone-900 mb-2">Contact</h3>
                    <p className="text-stone-600 text-lg">(555) 123-4567</p>
                    <p className="text-stone-600 text-lg">hello@saigonveranda.com</p>
                </div>
            </div>
        </div>

        <div className="h-full min-h-[400px] rounded-2xl overflow-hidden bg-stone-200 shadow-lg relative">
             {/* Placeholder for Map */}
             <div className="absolute inset-0 bg-[#E5E3D9] flex items-center justify-center">
                 <span className="font-serif text-stone-400 text-xl italic">Map Integration</span>
             </div>
             <img 
                src="https://images.unsplash.com/photo-1715713088263-c7856e67f890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtZXNlJTIwYW5jaWVudCUyMGNlbWVudCUyMHRpbGVzJTIwcGF0dGVybnxlbnwxfHx8fDE3NjQ0ODM2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Location Map"
                className="w-full h-full object-cover opacity-20"
             />
        </div>
      </div>
    </div>
  );
};
