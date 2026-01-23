import React, { useState } from 'react'
import { motion } from 'framer-motion'

import {
  User,
  Mail,
  Lock,
  Upload,
  Eye,
  EyeOff,
  UserCheck,
  Building2,
  CheckCircle,
  AlertCircle,
  Loader,
} from 'lucide-react'

const SignUp = () => {

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    role: '',
    avatar: null
  });

  const [formState, setFormState] = useState({
    loading: false,
    errors: {},
    showPassword: false,
    avatarPreview: null,
    success: false
  });

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing 
    if (formState.errors[name]) {
      setFormData((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: '' }
      }));
    }
  };

  const handleRoleChange = (role) => {

  };

  const handleAvatarChange = (e) => {

  };

  const validateForm = () => {

  };

  const handleSubmit = async (e) => {

  }

  if(formState.success) {
      return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1}}
             className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center "
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Created!</h2>
            <p className="text-gray-600 mb-4">
             Welcome to JobPotal! Your acccount has been successfully created.
            </p>
            <div className="animate-spin w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto"/>
            <p className="text-sm text-gray-500 mt-2">Redirecting to your dashboard..</p>
          </motion.div>
        </div>
      )
    }


  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8'>
      <motion.div
        initial={{ opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{ duration: 0.6}}
        className='bg-white p-8 rounded-xl shadow-lg max-w-md w-full'
        >
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Create Account
            </h2>
            <p className="text-sm text-gray-600">
              Join thousands of professionals finding theirdream jobs 
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Full Name
              </label>
              <div className='relative'>
                <User className='abosolte left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5'/>
                <input 
                  type='text'
                  name='fullname'
                  value={FormData.fullname}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                    formState.errors.fullname
                    ? "border-red-500"
                    : "border-gray-300"
                  } focus:ring-2 focus: ring-blue-500 focus:border-transparent transition-colors `}
                  placeholder='Enter your full name'
                />
              </div>
              {formState.errors.fullname && (
                <p className=''>
                  <AlertCircle className=''/>
                  {formState.errors.fullname}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="">
                Email Address *
              </label>
              <div className="">
                <Mail className='' />
                <input 
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                    formState.errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                  placeholder='Enter your email'
                />
              </div>
              {formState.errors.email && 
                <p className=''>
                  <AlertCircle className='' />
                  {formState.errors.email}
                </p>
              }
            </div>

            {/* Password */}
            <div>
              <label className=''>
                Password *
              </label>
              <div className=''>
                <Lock className='' />
                <input
                  type={formState.showPassword ? 'text' : "password"}
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 rounded-lg border ${
                    formState.errors.password
                    ? 'broder-red-500'
                    : 'border-gray-300'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors `}
                  placeholder='Create a Strong password'
                />
              <button 
                type='button'
                onClick={() => 
                  setFormState((prev) => ({
                    ...prev,
                    showPassword: !prev.showPassword
                  }))
                }
                className=''
              >
                {formState.showPassword ? (
                  <Eyeoff className='' />
                ) : (
                  <Eye className='' />
                )}
              </button>
              </div>
              {formState.errors.password && (
                <p className="">
                  <AlertCircle className='' />
                  {formState.errors.password}
                </p>
              )}
            </div>
          </form>
        </motion.div>
    </div>
  )
}

export default SignUp
