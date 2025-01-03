import React, { useState } from 'react';
import { FormField } from './form/FormField';
import { StatusSelect } from './form/StatusSelect';
import { useCustomerForm } from '../hooks/useCustomerForm';

export function CustomerForm({ onSuccess }) {
  const { formData, handleSubmit, handleChange } = useCustomerForm({ onSuccess });

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          label="Company Name"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          required
        />
        <FormField
          label="Contact Name"
          name="contact_name"
          value={formData.contact_name}
          onChange={handleChange}
          required
        />
        <FormField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormField
          label="Phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <StatusSelect
          value={formData.status}
          onChange={handleChange}
        />
      </div>

      <FormField
        label="Notes"
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        multiline
      />

      <div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Customer
        </button>
      </div>
    </form>
  );
}