import React, { useState } from 'react';
import { SALON_INFO, SERVICES_LIST } from '../data/salonData';
import { Calendar, Clock, User, Phone, MessageCircle, Sparkles, CheckCircle2, Send, MapPin } from 'lucide-react';

export const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES_LIST[0].name,
    date: '',
    time: '12:00 PM',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello Linta's Beauty Salon! I would like to book an appointment:
📌 Name: ${formData.name || 'Not provided'}
📞 Phone: ${formData.phone || 'Not provided'}
💇‍♀️ Service: ${formData.service}
📅 Date: ${formData.date || 'To be confirmed'}
⏰ Time Slot: ${formData.time}
💬 Requirements: ${formData.message || 'None'}

Studio: Block L, North Nazimabad, Karachi.`;

    const whatsappUrl = `https://wa.me/${SALON_INFO.phoneRaw}?text=${encodeURIComponent(formattedMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-16 lg:py-24 bg-[#FFF7F2] border-y border-[#F2D8DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-[#FFFDF9] rounded-3xl border border-[#F2D8DF] p-6 sm:p-10 shadow-lg relative overflow-hidden">
          
          {/* Decorative Rose Banner */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#8A4F62] via-[#D98B9D] to-[#C78E7B]" />

          {/* Header */}
          <div className="text-center space-y-3 mb-8">
            <div className="inline-flex items-center gap-1.5 bg-[#FFF7F2] border border-[#F2D8DF] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8A4F62]">
              <Sparkles className="w-3.5 h-3.5 text-[#D98B9D]" /> Quick Online Reservation
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E2E2E]">
              Book Your Slot at <span className="text-[#8A4F62] italic font-normal">Linta's Studio</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6E6E]">
              Fill out your details below to instantly send your appointment request via WhatsApp (+92 333 0247837).
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#FFF7F2] border border-[#F2D8DF] rounded-2xl p-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2E2E2E]">WhatsApp Opened!</h3>
              <p className="text-sm text-[#6E6E6E] max-w-md mx-auto">
                Your appointment details have been transferred to WhatsApp. Linta or our studio receptionist will confirm your slot shortly.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#8A4F62] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-[#723E50] transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#2E2E2E] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#8A4F62]" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sobia Khan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FFF7F2] border border-[#F2D8DF] rounded-xl px-4 py-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#8A4F62]"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#2E2E2E] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#8A4F62]" /> WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0333 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FFF7F2] border border-[#F2D8DF] rounded-xl px-4 py-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#8A4F62]"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#2E2E2E] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#8A4F62]" /> Select Desired Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#FFF7F2] border border-[#F2D8DF] rounded-xl px-4 py-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#8A4F62]"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.duration})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#2E2E2E] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8A4F62]" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#FFF7F2] border border-[#F2D8DF] rounded-xl px-4 py-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#8A4F62]"
                  />
                </div>

                {/* Time Slot */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#2E2E2E] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#8A4F62]" /> Preferred Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#FFF7F2] border border-[#F2D8DF] rounded-xl px-4 py-3 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#8A4F62]"
                  >
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                  </select>
                </div>

                {/* Studio Location Indicator */}
                <div className="space-y-1.5 sm:col-span-1">
                  <label className="text-xs font-semibold text-[#2E2E2E] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8A4F62]" /> Studio Location
                  </label>
                  <div className="bg-[#FFF7F2] border border-[#F2D8DF] rounded-xl px-4 py-3 text-xs text-[#2E2E2E] font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D98B9D] shrink-0" />
                    <span className="truncate">Block L North Nazimabad, Karachi</span>
                  </div>
                </div>

              </div>

              {/* Message / Special Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#2E2E2E]">Special Requirements / Notes (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need hair length consultation before coloring, or Barat date..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FFF7F2] border border-[#F2D8DF] rounded-xl p-4 text-sm text-[#2E2E2E] focus:outline-none focus:border-[#8A4F62]"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#8A4F62] hover:bg-[#723E50] text-white px-10 py-4 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 mx-auto cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-emerald-400" />
                  <span>Send Request to WhatsApp (+92 333 0247837)</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
