import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader,
  AlertCircle,
  CheckCircle
} from 'lucide-react'

function Login() {


  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [formState,setFormState] =  useState({
    loading: false,
    errors: {},
    shawpassword: false,
    success: false
  });

  // Validation Function 
  return (
    <div>
      Login
    </div>
  )
}
import { Form } from 'lucide-react'

export default Login
