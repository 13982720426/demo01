import React from 'react'
import { Card, Table, Button } from 'antd'

function List() {
  const columns = [
    {
      title: '序号',
      key: 'id',
      with: 80,
      align: 'center',
    },
    {
      title: '名字',
      detaIndex: 'name',
    },
    {
      title: '价格',
      detaIndex: 'price',
    },
  ]
  return (
    <Card
      title="商品列表"
      extra={
        <Button type="primary" size="small">
          新增
        </Button>
      }
    >
      <Table columns={columns} />
    </Card>
  )
}

export default List
