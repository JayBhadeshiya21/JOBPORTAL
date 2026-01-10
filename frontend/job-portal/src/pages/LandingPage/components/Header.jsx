import React from 'react';
import { motion, numberValueTypes } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Header() {

    const isAuthenticated = true;
    const user = { fullname: "Alex", role: "employer" };
    const navigate = useNavigate();

    return <header>
        <div className='container mx-auto px-4'>
            <div className=' flex items-center justify-between h-16 '>
                {/* Logo */}
                <div className='flex items-center space-x-3'>
                    <div className='w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                        <Briefcase className='w-5 h-5 text-white' />
                    </div>
                    <span className='text-xl font-bold text-gray-900'>JobPortal </span>
                </div>

                {/* Navigation Link - hidden on mobile */}
                <nav className='hidden md:flex items-center space-x-8'>
                    <a
                        onClick={() => navigate("/find-jobs")}
                        className='text-gray-600 hover:text-gray-900 transition-colors font-medium'
                    >
                        FindJobs
                    </a>
                    <a
                        onClick={() => {
                            navigate(
                                isAuthenticated && user?.role === 'employer'
                                    ? "/employer-dashnoard"
                                    : "/login"
                            );
                        }}
                        className='text-gray-600 hover:text-gray-900 transition-colors font-medium'
                    >
                        For Employers
                    </a>
                </nav>

                {/* Auth Buttons */}
                <div className='flex items-center space-x-3'>
                    {isAuthenticated ? (
                        <div className='flex items-center space-x-3'>
                            <span className='text-gray-700'>Welcome, {user?.fullname}</span>
                            <a
                                href={
                                    user?.role === "employer"
                                        ? "/employer-dashboard"
                                        : "/find-jobs"
                                }
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                DashBoard
                            </a>
                        </div>
                    ) : (
                        <>
                            <a
                                heref='/login'
                                className='text-gray-600 hover:text-gray-900 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-50'
                            >
                                Login
                            </a>

                            <a
                                href='/signup'
                                className=''
                            >
                                Sign Up
                            </a>
                        </>
                    )}
                </div>
            </div>
        </div>

    </header>;
}

export default Header
