import React from 'react';

export function FormField({ label, name, value, onChange, type = 'text', required = false, multiline = false }) {
  const inputClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500";
  
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          className={inputClasses}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
        />
      )}
    </div>
  );
}