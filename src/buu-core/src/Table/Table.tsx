import React from 'react'
import { DefaultProps, useBuuTheme } from '@buu/theme'

interface TableProps extends DefaultProps, React.HTMLProps<HTMLTableElement> {
  striped?: boolean;
  highlightOnHover?: boolean;
}

const Table = ({
  className,
  children,
  striped = false,
  highlightOnHover = false,
  themeOverride,
  ...others
}: TableProps) => {
  return (
    <table
      {...others}
      className='className'
    >
      {children}
    </table>
  )
}

Table.displayName = Table

export default Table