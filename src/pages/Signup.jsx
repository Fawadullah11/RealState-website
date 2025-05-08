import SignupForm from '../components/auth/SignupForm';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-secondary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-secondary dark:text-white">Create Account</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:text-primary/90">
              Login
            </Link>
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup; 