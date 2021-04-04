import React from 'react'
import { Form, Card, Input, Button, message } from 'antd'

function Edit(props) {
  //   const handleSubmit = (event) => {
  //     console.log(event)
  //     event.preventDefault()
  //     props.form.validateFilesAndScrooll((err, values) => {
  //       if (!err) {
  //         console.log(values)
  //         console.log('提交')
  //       } else {
  //         message.error('请输入正确的内容')
  //       }
  //     })
  //   }
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
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
