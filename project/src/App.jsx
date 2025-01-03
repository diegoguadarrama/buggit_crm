import React, { useState } from 'react';
import { CustomerTable } from './components/CustomerTable';
import { CustomerForm } from './components/CustomerForm';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleFormSuccess = () => {
    setShowForm(false);
    // Force a re-render of the table
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Sales CRM
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {showForm ? 'Cancel' : 'Add Customer'}
                </button>
              </div>

              {showForm ? (
                <div className="bg-white shadow sm:rounded-lg p-6 mb-6">
                  <CustomerForm onSuccess={handleFormSuccess} />
                </div>
              ) : null}

              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <CustomerTable />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;