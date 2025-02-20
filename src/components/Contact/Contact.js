import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., sending email or storing data
        alert('Message sent!');
    };

    return (
        <div className="flex flex-col min-h-screen p-8 bg-white dark:bg-gray-800">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">Contact Me</h1>
            <div className="flex-grow flex items-center justify-center">
                <form onSubmit={handleSubmit} className="w-full max-w-3xl">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Name*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-2 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-2 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Subject*</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Message*</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-indigo-600 dark:bg-indigo-400 text-white dark:text-gray-900 font-semibold rounded-md shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
