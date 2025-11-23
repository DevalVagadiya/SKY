import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { ArrowRight } from "lucide-react";

const AboutContact = () => {
    return (
        <>
            <section className="max-w-7xl mx-auto  py-12 ">
                <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-sm p-6">
                    {/* Left Content */}
                    <div>
                        <p className="text-sky-600 text-sm font-semibold uppercase tracking-wide">
                            Contact Info
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-6">
                            Have Questions? <br /> We’re Ready to Help
                        </h2>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="bg-gray-100 p-3 rounded-full">
                                    <Phone className="w-5 h-5 text-gray-800" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Phone Number</p>
                                    <p className="font-medium text-gray-900">+91 95107 66011</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="bg-gray-100 p-3 rounded-full">
                                    <Mail className="w-5 h-5 text-gray-800" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Email Address</p>
                                    <p className="font-medium text-gray-900">
                                        skypathology025@gmail.com
                                    </p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start gap-4">
                                <div className="bg-gray-100 p-3 rounded-full">
                                    <Clock className="w-5 h-5 text-gray-800" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Working Hours</p>
                                    <p className="font-medium text-gray-900">
                                        Mon to Sun &nbsp; 08:00 AM to 08:00 PM
                                    </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="bg-gray-100 p-3 rounded-full">
                                    <MapPin className="w-5 h-5 text-gray-800" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Our Location</p>
                                    <p className="font-medium text-gray-900">
                                        Shop 40, Ground floor, Serenity Space, opp. VISHWAS CITY-9,
                                        Gota, Ahmedabad
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                            alt="Lab Contact"
                            className="w-full rounded-xl shadow-md object-cover"
                        />
                    </div>
                </div>



            </section>
            <section className="max-w-7xl mx-auto bg-white py-12 px-6 md:px-16 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Heading */}
                    <p className="text-sky-600 text-sm font-semibold uppercase tracking-wide">
                        Send Message
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-10">
                        Get in Touch
                    </h2>

                    {/* Form */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name*
                            </label>
                            <input
                                type="text"
                                placeholder="Enter full name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address*
                            </label>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Subject*
                            </label>
                            <select
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                                required
                            >
                                <option value="">Select service</option>
                                <option value="general">General Inquiry</option>
                                <option value="appointment">Book Appointment</option>
                                <option value="support">Support</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message*
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Type here..."
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 flex justify-center">
                            <button
                                type="submit"
                                className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition"
                            >
                                Send Message <ArrowRight size={18} />
                            </button>
                        </div>
                    </form>
                </div>

<div className="my-20">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7339.734578987036!2d72.53885744168379!3d23.101953466472658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8335cc894419%3A0x812966ae73666447!2sNew%20Sky%20Pathology%20Laboratory%20Gota!5e0!3m2!1sen!2sin!4v1757503216787!5m2!1sen!2sin" className=" rounded-2xl" width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
            </section>
        </>
    )
}

export default AboutContact