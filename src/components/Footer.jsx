import React from "react";
import { Map, Phone, Mail, Home } from "lucide-react";
import sgulogo from "../assets/sgulogo.png";

// Social media icons components
const YouTubeIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 fill-current"
    >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const FacebookIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 fill-current"
    >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const TikTokIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 fill-current"
    >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="relative w-full bg-[var(--light-blue)] text-[var(--text-color)] overflow-hidden">
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-8">
                {/* Contact information section */}
                <div className="flex justify-center pb-8">
                    <h2 className="text-2xl font-bold border-b-2 border-white pb-1">
                        THÔNG TIN LIÊN HỆ
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    {/* Contact details */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Home className="w-6 h-6" />
                            <div>
                                <p className="text-sm mb-1 font-bold">
                                    Cơ sở chính
                                </p>
                                <p className="font-medium">
                                    273 An Dương Vương, Phường 2, Quận 5, TP.HCM
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Map className="w-6 h-6" />
                            <div>
                                <p className="text-sm mb-1 font-bold">
                                    Cơ sở khác
                                </p>
                                <p className="font-medium">
                                    Cơ sở 1: 105 Bà Huyện Thanh Quan, Phường Võ
                                    Thị Sáu, Quận 3, TP.HCM
                                </p>
                                <p className="font-medium">
                                    Cơ sở 2: 04 Tôn Đức Thắng, Phường Bến Nghé,
                                    Quận 1, TP.HCM
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6" />
                            <div>
                                <p className="text-sm mb-1 font-bold">
                                    Điện thoại
                                </p>
                                <p className="font-medium">
                                    (84-28) 38.354409 - 38.352309
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6" />
                            <div>
                                <p className="text-sm mb-1 font-bold">Email</p>
                                <p className="font-medium">
                                    daihocsaigon@sgu.edu.vn
                                </p>
                            </div>
                        </div>

                        {/* Follow us section */}
                        <div className="mt-6">
                            <p className="text-xl mb-4 font-bold">
                                Theo dõi chúng tôi
                            </p>
                            <div className="flex gap-6">
                                <a
                                    href="https://www.sgu.edu.vn/"
                                    target="_blank"
                                    className="bg-[var-(--light-blue)] rounded-md"
                                >
                                    <img
                                        src={sgulogo}
                                        alt=""
                                        width="42px"
                                        height="42px"
                                    />
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="bg-red-600 p-2 rounded-md"
                                >
                                    <YouTubeIcon />
                                </a>
                                <a
                                    href="https://www.facebook.com/TruongDaihocSaiGon.SGU"
                                    target="_blank"
                                    className="bg-blue-700 p-2 rounded-md"
                                >
                                    <FacebookIcon />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@sinhviendhsg"
                                    target="_blank"
                                    className="bg-black p-2 rounded-md"
                                >
                                    <TikTokIcon />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-100 hidden md:block">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.776186588903!2d106.6811008361129!3d10.759963598260425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b7c3ed289%3A0xa06651894598e488!2sSaigon%20University!5e0!3m2!1sen!2s!4v1745843418462!5m2!1sen!2s"
                            width="600"
                            height="400"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
