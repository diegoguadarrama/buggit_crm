/*
  # Create customers table for CRM

  1. New Tables
    - `customers`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `company_name` (text)
      - `contact_name` (text)
      - `email` (text)
      - `phone` (text)
      - `status` (text) - Represents the customer lifecycle stage
      - `notes` (text)
      - `last_contact` (timestamp)
      - `user_id` (uuid) - References the authenticated user who created/owns the customer
      
  2. Security
    - Enable RLS on `customers` table
    - Add policies for authenticated users to:
      - Read their own customers
      - Create new customers
      - Update their own customers
*/

CREATE TABLE customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  company_name text NOT NULL,
  contact_name text NOT NULL,
  email text,
  phone text,
  status text NOT NULL DEFAULT 'lead',
  notes text,
  last_contact timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id) NOT NULL
);

ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own customers"
  ON customers
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create customers"
  ON customers
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own customers"
  ON customers
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);