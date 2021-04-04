import React from 'react'
import { Card, Table, Button } from 'antd'

const dataSource = [
  {
    id: 1,
    name: '香皂',
    price: 5,
  },
  {
    id: 2,
    name: '特仑苏',
    price: 6,
  },
  {
    id: 3,
    name: '小浣熊',
    price: 1.5,
  },
]

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
      {console.log(dataSource)}
    </Card>
  )
}

export default List
