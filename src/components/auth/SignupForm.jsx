
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    
    try {
      const result = await signup(name, email, password);
      if (result.success) {
        navigate('/'); // Redirect to home page after successful signup
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError('Failed to create an account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-secondary rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-secondary dark:text-white">Sign Up</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-secondary dark:text-white mb-2">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-secondary text-secondary dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-secondary dark:text-white mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-secondary text-secondary dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-secondary dark:text-white mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-secondary text-secondary dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-secondary dark:text-white mb-2">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-secondary text-secondary dark:text-white"
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Creating Account...' : 'Sign Up'}
        </Button>
      </form>
    </div>
  );
}

export default SignupForm; 
