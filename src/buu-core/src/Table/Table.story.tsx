import React from 'react'
import { storiesOf } from '@storybook/react'
import { BuuProvider } from '@buu/theme'
import Table from './Table'

const elements = [
  { position: 6, name: 'a', age: 12 },
  { position: 8, name: 'b', age: 12 },
  { position: 12, name: 'c', age: 18 },
  { position: 16, name: 'd', age: 20 },
  { position: 26, name: 'e', age: 36 },
  { position: 36, name: 'f', age: 12 },
]

const rows = elements.map(element => (
  <tr key={element.name}>
    <td>{element.position}</td>
    <td>{element.name}</td>
    <td>{element.age}</td>
  </tr>
))

const table = (
  <>
    <thead>
      <tr>
        <th>Element position</th>
        <th>Element name</th>
        <th>age</th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </>
)

storiesOf('@buu/core', module).add('Table', () => {
  return <div style={{ maxWidth: 600 }}>
    <Table>{table}</Table>
    <div style={{ marginTop: 30 }}>
      <Table striped>{table}</Table>
    </div>
    <div style={{ marginTop: 30 }}>
      <Table highlightOnHover striped>
        {table}
      </Table>
    </div>
  </div>
})