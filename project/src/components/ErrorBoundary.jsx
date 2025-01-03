import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Configuration Required</h2>
            <p className="text-gray-700 mb-4">{this.state.error.message}</p>
            <p className="text-gray-600 text-sm">
              After connecting to Supabase, refresh the page to continue.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}