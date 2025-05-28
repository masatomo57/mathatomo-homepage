'use client';

import React, { useState } from 'react';

export default function XFollowingCopyPage() {
  const [sourceAccountId, setSourceAccountId] = useState('');
  const [targetAccountId, setTargetAccountId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch('/api/x-following-copy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sourceAccountId, targetAccountId }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Operation successful!');
        setSourceAccountId('');
        setTargetAccountId('');
      } else {
        setError(data.error || 'An unexpected error occurred.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again later.');
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 text-amber-600 min-h-full bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">X Following Copy</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="sourceAccountId" className="block text-gray-700 text-sm font-bold mb-2">
            Source X Account ID
          </label>
          <input
            type="text"
            id="sourceAccountId"
            value={sourceAccountId}
            onChange={(e) => setSourceAccountId(e.target.value)}
            placeholder="Enter source X Account ID (e.g., @username or UserID)"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            disabled={isLoading}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="targetAccountId" className="block text-gray-700 text-sm font-bold mb-2">
            Target X Account ID (Your Account)
          </label>
          <input
            type="text"
            id="targetAccountId"
            value={targetAccountId}
            onChange={(e) => setTargetAccountId(e.target.value)}
            placeholder="Enter your X Account ID (e.g., @username or UserID)"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            disabled={isLoading}
          />
        </div>

        {message && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 border border-green-300 rounded">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded">
            {error}
          </div>
        )}

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className={`bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}
