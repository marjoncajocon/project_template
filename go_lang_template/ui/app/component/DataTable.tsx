import React, { type ReactNode } from 'react';

export interface Column<T> {
  header: string;
  key: keyof T | 'actions'; // 'actions' for custom buttons
  render?: (item: T) => ReactNode; // Optional custom rendering
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  striped?: boolean;
  hover?: boolean;
  bordered?: boolean;
  responsive?: boolean;
  theme?: 'dark' | 'light';
}

const DataTable = <T extends { id: string | number }>({
  columns,
  data,
  striped = true,
  hover = true,
  bordered = false,
  responsive = true,
  theme = 'light'
}: TableProps<T>) => {

  // Combine Bootstrap classes based on props
  const tableClasses = [
    'table',
    striped ? 'table-striped' : '',
    hover ? 'table-hover' : '',
    bordered ? 'table-bordered' : '',
    theme === 'dark' ? 'table-dark' : ''
  ].join(' ');

  const content = (
    <table className={tableClasses}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index} scope="col">{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((col, index) => (
              <td key={index}>
                {col.render ? col.render(item) : (item[col.key as keyof T] as ReactNode)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return responsive ? <div className="table-responsive">{content}</div> : content;
};

export default DataTable;