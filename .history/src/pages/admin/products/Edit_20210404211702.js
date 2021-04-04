import React from 'react'
import { Form, Card, Input, Button, message } from 'antd'

function Edit(props) {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  const priceValidate = (rule, value, callback) => {
    if (value * 1 > 100) {
      callback('价格不能大于一百')
    } else {
      callback()
    }
  }

  return (
    <Card title="商品编辑">
      <Form onFinish={onFinish}>
        <Form.Item
          label="名字"
          name="name"
          rules={[
            {
              required: true,
              message: '请输入商品名字',
            },
          ]}
        >
          <Input placeholder="请输入商品名字" />
        </Form.Item>
        <Form.Item
          label="价格"
          name="price"
          rules={[
            {
              required: true,
              message: '请输入商品价格',
            },
          ]}
        >
          <Input placeholder="请输入商品价格" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            保存
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Edit
