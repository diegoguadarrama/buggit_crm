import React from 'react';
import { CUSTOMER_STATUSES } from '../../constants/customerStatuses';

export function StatusSelect({ value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Status
      </label>
      <select
        name="status"
        value={value}
        onChange={onChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      >
        {CUSTOMER_STATUSES.map(status => (
          <option key={status} value={status}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}