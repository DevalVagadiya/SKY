
import { ArrowRight } from "lucide-react";


export default function GetTuch () {
    return (
        <>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left Side - Image */}
                        <div className="relative rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1581091215367-59ab6d62f083?q=80&w=1200"
                                alt="Scientist in lab"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                                <p className="text-sm text-gray-200 tracking-widest uppercase">
                                    Contact Us
                                </p>
                                <h2 className="text-2xl font-bold text-white mt-2">
                                    Lorem Ipsum is simply dummy text of
                                </h2>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="bg-gray-50 rounded-xl shadow-md p-8">
                            <h2 className="text-2xl font-bold text-black mb-6">
                                Lorem Ipsum is simply dummy text of
                            </h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-black mb-1">
                                            Full Name*
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter full name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-black mb-1">
                                            Email Address*
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter email address"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-black mb-1">
                                            Phone Number*
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="Enter phone number"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-black mb-1">
                                            Service
                                        </label>
                                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                            <option>Select service</option>
                                            <option>Consultation</option>
                                            <option>Testing</option>
                                            <option>Support</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-black mb-1">
                                        Message*
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Type here..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-6 py-3 rounded-full shadow-md transition-all"
                                >
                                    Send Message
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
