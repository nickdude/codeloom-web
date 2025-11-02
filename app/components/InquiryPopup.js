"use client"
import React, { useState } from "react";

const InquiryPopup = ({ isOpen, onClose }) => {
    console.log("InquiryPopup rendered with isOpen:", isOpen);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState(""); // success/error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://formspree.io/f/mkgqwgon", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => onClose(), 1500); // auto-close after 1.5s
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        } finally {
            setTimeout(() => setStatus(""), 3000); // clear status after 3s
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-xl shadow-2xl w-11/12 sm:w-96 p-6 sm:p-8 relative transform scale-90 animate-fadeIn">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-brand text-2xl font-bold"
                >
                    &times;
                </button>

                <h2 className="text-2xl sm:text-3xl font-inter font-semibold text-darkBlue text-left mb-2">
                    Send Us an Inquiry
                </h2>
                <p className="text-sm text-darkBlue text-left mb-6">
                    Fill out the form and we will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border border-gray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-none transition"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border border-gray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-none transition"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border border-gray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-none resize-none h-28 transition"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-brand hover:bg-orange-600 text-white rounded-xl py-3 font-semibold text-lg transition"
                    >
                        Send Inquiry
                    </button>

                    {status === "success" && (
                        <p className="text-brand text-center mt-2">
                            Inquiry sent successfully!
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-brand text-center mt-2">
                            Something went wrong. Try again.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default InquiryPopup;
