import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useTableConfig } from './useTableConfig.jsx';

export function useCustomerTable() {
  const [customers, setCustomers] = useState([]);
  const [sorting, setSorting] = useState([]);

  const table = useTableConfig({ data: customers, sorting, setSorting });

  useEffect(() => {
    fetchCustomers();
  }, []);

  async function fetchCustomers() {
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching customers:', error);
      return;
    }

    setCustomers(data);
  }

  return { customers, table };
}