import React from 'react'
import { Card, Table, Button } from 'antd'

function List() {
  return (
    <Card
      title="商品列表"
      extra={
        <Button type="primary" size="small">
          新增
        </Button>
      }
    >
      <Table />
    </Card>
  )
}

export default List
