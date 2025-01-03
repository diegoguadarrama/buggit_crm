import { useState } from 'react';
import { supabase } from '../lib/supabase';

const initialFormState = {
  company_name: '',
  contact_name: '',
  email: '',
  phone: '',
  status: 'lead',
  notes: '',
};

export function useCustomerForm({ onSuccess }) {
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: { user } } = await supabase.auth.getUser();
    
    const { error } = await supabase
      .from('customers')
      .insert([{ ...formData, user_id: user.id }]);

    if (error) {
      console.error('Error adding customer:', error);
      return;
    }

    setFormData(initialFormState);

    if (onSuccess) {
      onSuccess();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return { formData, handleSubmit, handleChange };
}