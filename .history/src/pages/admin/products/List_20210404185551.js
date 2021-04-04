import React from 'react'
import { Card, Table, Button } from 'antd'

const dataSource = [
  {
    id: 1,
    name: '美国队长',
    price: 5,
  },
  {
    id: 2,
    name: '钢铁侠',
    price: 9,
  },
  {
    id: 3,
    name: '蜘蛛侠',
    price: 6,
  },
]；

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
      <Table columns={columns} bordered dataSource={dataSource} />
    </Card>
  )
}

export default List
