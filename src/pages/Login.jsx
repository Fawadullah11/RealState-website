import { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import administrative from '../assets/administrative.jpg';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-secondary py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-secondary dark:text-white">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="mt-2 text-white">
            {isLogin ? 'Please sign in to continue' : 'Please create an account to continue'}
          </p>
        </div>

        {isLogin ? <LoginForm /> : <SignupForm />}

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-100 dark:bg-secondary text-gray-500 dark:text-gray-400">
                Or
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="mt-6 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
          >
            {isLogin
              ? "Create New Account"
              : 'Sign in to Existing Account'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login; 