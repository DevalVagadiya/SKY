
import React, { useState, useRef, useEffect } from 'react';
import {
    Calendar,
    Clock,
    User,
    Phone,
    Mail,
    MapPin,
    FileText,
    Check,
    ChevronDown,
    X,
    Send
} from 'lucide-react';

const Appoinment = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        age: '',
        gender: '', // Male, Female, Child
        address: '',
        email: '',
        time: '',
        date: ''
    });

    const [selectedReports, setSelectedReports] = useState<string[]>([]);
    const [isReportDropdownOpen, setIsReportDropdownOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const reportOptions = [
        "Blood Test (CBC)",
        "Urinalysis",
        "Lipid Profile",
        "Thyroid Profile",
        "Liver Function Test",
        "Kidney Function Test",
        "HbA1c",
        "Vitamin D Test",
        "Vitamin B12 Test",
        "Full Body Checkup"
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsReportDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGenderSelect = (gender: string) => {
        setFormData(prev => ({ ...prev, gender }));
    };

    const toggleReport = (report: string) => {
        setSelectedReports(prev => {
            if (prev.includes(report)) {
                return prev.filter(item => item !== report);
            } else {
                return [...prev, report];
            }
        });
    };

    const removeReport = (reportToRemove: string) => {
        setSelectedReports(prev => prev.filter(item => item !== reportToRemove));
    };

    const resetForm = () => {
        setFormData({
            name: '',
            contact: '',
            age: '',
            gender: '',
            address: '',
            email: '',
            time: '',
            date: ''
        });
        setSelectedReports([]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', { ...formData, selectedReports });
        setShowSuccess(true);
    };

    const closeSuccessModal = () => {
        setShowSuccess(false);
        resetForm();
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center font-sans">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl duration-300">

                {/* Header Section */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>

                    <h2 className="text-3xl font-extrabold text-center tracking-tight mb-2 relative z-10">
                        Book an Appointment
                    </h2>
                    <p className="text-center text-blue-100 relative z-10">
                        Schedule your laboratory tests quickly and easily.
                    </p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="p-8 space-y-8">

                    {/* Section: Personal Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4 flex items-center">
                            <User className="w-5 h-5 mr-2 text-indigo-600" /> Personal Details
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="group relative">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-indigo-600">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="group relative">
                                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-indigo-600">Contact No.</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                    </div>
                                    <input
                                        type="tel"
                                        id="contact"
                                        name="contact"
                                        required
                                        value={formData.contact}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                        placeholder="Enter contact number"
                                    />
                                </div>
                            </div>

                            {/* Age & Gender Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:col-span-2 lg:grid-cols-3">

                                {/* Age */}
                                <div className="group relative">
                                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-indigo-600">Age</label>
                                    <input
                                        type="number"
                                        id="age"
                                        name="age"
                                        required
                                        min="0"
                                        max="120"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                        placeholder="Age"
                                    />
                                </div>

                                {/* Gender Selection */}
                                <div className="lg:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors">Gender</label>
                                    <div className="flex flex-wrap gap-4">
                                        {['Male', 'Female', 'Child'].map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => handleGenderSelect(type)}
                                                className={`
                          flex-1 min-w-[100px] py-2.5 px-4 rounded-lg border text-sm font-medium transition-all duration-200
                          ${formData.gender === type
                                                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md transform scale-105'
                                                        : 'bg-white text-gray-600 border-gray-300 hover:border-indigo-400 hover:text-indigo-500'}
                        `}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group relative md:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-indigo-600">E-mail</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            {/* Address */}
                            <div className="group relative md:col-span-2">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-indigo-600">Address</label>
                                <div className="relative">
                                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                                        <MapPin className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                    </div>
                                    <textarea
                                        id="address"
                                        name="address"
                                        required
                                        rows={3}
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none resize-none"
                                        placeholder="Enter full address"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section: Test Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4 flex items-center">
                            <FileText className="w-5 h-5 mr-2 text-indigo-600" /> Test Details
                        </h3>

                        {/* Multi-Select Dropdown */}
                        <div className="relative mb-6" ref={dropdownRef}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Select Test Reports <span className="text-xs text-gray-500 font-normal">(You can select multiple)</span>
                            </label>

                            <div
                                className={`
                  min-h-[50px] w-full border border-gray-300 rounded-lg py-2 px-3 bg-white 
                  flex flex-wrap gap-2 items-center cursor-pointer transition-all hover:border-indigo-400
                  ${isReportDropdownOpen ? 'ring-2 ring-indigo-500 border-indigo-500' : ''}
                `}
                                onClick={() => setIsReportDropdownOpen(!isReportDropdownOpen)}
                            >
                                {selectedReports.length === 0 ? (
                                    <span className="text-gray-400 ml-1">Select reports...</span>
                                ) : (
                                    selectedReports.map((report) => (
                                        <span
                                            key={report}
                                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 border border-indigo-200"
                                        >
                                            {report}
                                            <button
                                                type="button"
                                                aria-label={`Remove ${report}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    removeReport(report);
                                                }}
                                                className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-600 focus:outline-none transition-colors"
                                            >
                                                <X className="h-3 w-3" />
                                            </button>
                                        </span>
                                    ))
                                )}

                                <div className="ml-auto pl-2">
                                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isReportDropdownOpen ? 'rotate-180' : ''}`} />
                                </div>
                            </div>

                            {/* Dropdown Options */}
                            {isReportDropdownOpen && (
                                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto animate-fade-in-down">
                                    {reportOptions.map((option) => {
                                        const isSelected = selectedReports.includes(option);
                                        return (
                                            <div
                                                key={option}
                                                onClick={() => toggleReport(option)}
                                                className={`
                          px-4 py-3 cursor-pointer flex items-center justify-between text-sm transition-colors
                          ${isSelected ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}
                        `}
                                            >
                                                <span className="flex items-center">
                                                    <div className={`
                            w-4 h-4 mr-3 rounded border flex items-center justify-center transition-colors
                            ${isSelected ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300 bg-white'}
                          `}>
                                                        {isSelected && <Check className="h-3 w-3 text-white" />}
                                                    </div>
                                                    {option}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Date & Time */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Date */}
                            <div className="group relative">
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-indigo-600">Date</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                    </div>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        required
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none bg-white"
                                    />
                                </div>
                            </div>

                            {/* Time */}
                            <div className="group relative">
                                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-indigo-600">Time</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Clock className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                    </div>
                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        required
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none bg-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Book Appointment
                            <Send className="ml-2 h-5 w-5" />
                        </button>
                    </div>

                </form>
            </div>

            {/* Custom Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all scale-100 animate-bounce-in">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Appointment Booked!</h3>
                        <p className="text-gray-600 mb-8">
                            Your appointment has been successfully scheduled. We will contact you shortly.
                        </p>
                        <button
                            onClick={closeSuccessModal}
                            className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Okay, Got it!
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Appoinment;
