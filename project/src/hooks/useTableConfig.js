import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { format } from 'date-fns';
import { getStatusColor } from '../utils/statusColors';

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('company_name', {
    header: 'Company',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('contact_name', {
    header: 'Contact',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('email', {
    header: 'Email',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: info => (
      <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(info.getValue())}`}>
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor('last_contact', {
    header: 'Last Contact',
    cell: info => format(new Date(info.getValue()), 'MMM d, yyyy'),
  }),
];

export function useTableConfig({ data, sorting, setSorting }) {
  return useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
}