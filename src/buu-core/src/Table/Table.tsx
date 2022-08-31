import React from 'react'
import { DefaultProps } from '@buu/types'

interface TableProps extends DefaultProps, React.HTMLProps<HTMLTableElement> {
  striped?: boolean;
  highlightOnHover?: boolean;
}

const Table = ({
  className,
  children,
  striped = false,
  highlightOnHover = false,
  ...others
}: TableProps) => {
  return (
    <table
      className='className'
      {...others}
    >
      {children}
    </table>
  )
}

Table.displayName = Table

export default Table