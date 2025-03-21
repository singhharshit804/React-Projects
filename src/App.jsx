import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LoginForm from './components/loginForm';
import SignupForm from './components/SignupForm';

function App() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle forms

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, x: 100 }, // Blur effect for smooth appearance
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)", 
      transition: { 
        type: "spring", 
        stiffness: 90,  // Controls bounce effect (Lower = more bounce)
        damping: 20,  // Controls speed (Lower = faster)
        duration: 1, // Smooth longer animation
        ease: "easeOut"
      } 
    }, 
    exit: { 
      opacity: 0, 
      x: -100, 
      filter: "blur(10px)", 
      transition: { 
        type: "tween", 
        duration: 0.6, 
        ease: "easeInOut" // Smooth in and out effect
      } 
    }
  };
  
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ebeef3] to-[#313e55]'>
      <motion.div 
        key={isLogin ? "login" : "signup"} 
        initial="hidden" 
        animate="visible" 
        exit="exit" 
        variants={containerVariants} 
        className='w-96 p-8 rounded-3xl bg-gray-200 shadow-[30px_30px_30px__rgb(49,62,85)]'
      >
        {/* LOGO and TITLE */}
        <div className='flex justify-start mb-8'>
          <span className='text-2xl font-bold text-[#2a425765]'>
            <i className="ri-moon-clear-fill"></i>
          </span>
          <span className='text-lg font-bold ml-3 mt-2'>
            <span className='text-[#2a4257]'>Mooney's</span>
            <span className='text-[#2a425765] ml-2'>{isLogin ? "Bookstore" : "Register"}</span>
          </span>
        </div>

        {/* Welcome Text */}
        <h2 className='text-3xl font-bold text-[#2a4257] mb-2'>{isLogin ? "Welcome" : "Join Us!"}</h2>
        <p className='text-[#2a4257a9] mb-6 font-semibold'>
          {isLogin ? "Let's get started" : "Create your account"}
        </p>

        {/* Input fields */}
        {isLogin ? <LoginForm /> : <SignupForm />}  {/* Form Switching */}

        {/* Button */}
        <div className='flex justify-center mt-8'>
          <button className="py-2 px-8 p-10 text-lg font-semibold text-[#2a4257] bg-gray-200 rounded-3xl shadow-[inset_4px_4px_8px_#b0b0b0,inset_-4px_-4px_8px_#ffffff] focus:outline-none focus:ring-2 focus:ring-gray-300">
            {isLogin ? "Sign in" : "Sign Up"}
          </button>
        </div>

        {/* Toggle Link */}
        <div className="flex items-center justify-center text-xs text-gray-600 mt-8 ">
          <h2 className='font-semibold text-[#2a4257]'>
            {isLogin ? "Forgot password?" : "Already have an account?"}
          </h2>
          <h2 className='font-bold text-sm ml-2 mr-2'>or</h2>
          <a 
            href="#" 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-[#2a4257a9] underline underline-offset-4 cursor-pointer"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
