import React from 'react';
import { Form, Input, Row, Col, Button, Space, Select } from 'antd';

interface SearchTableFieldsProps {
  /** 点击搜索按钮的回调 */
  onSearch?: (fieldsValue: Record<string, React.Key>) => void;
  /** 重置操作完成的回调 */
  onResetFinish?: (fieldsValue: Record<string, React.Key>) => void;
}
const SearchTableFields: React.FC<SearchTableFieldsProps> = (props) => {
  const { onSearch, onResetFinish } = props;
  const [form] = Form.useForm();

  return (
    <>
      <Form form={form}>
        <Row gutter={24}>
          <Col span={6}>
            <Form.Item label="编号" name="id">
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="名称" name="name">
              <Select />
            </Form.Item>
          </Col>
        </Row>
        <div style={{ textAlign: 'right' }}>
          <Space>
            <Button
              type="primary"
              onClick={() => {
                if (!onSearch) return;
                onSearch(form.getFieldsValue());
              }}
            >
              搜索
            </Button>
            <Button
              onClick={() => {
                form.resetFields();
                if (!onResetFinish) return;
                onResetFinish(form.getFieldsValue());
              }}
            >
              重置
            </Button>
          </Space>
        </div>
      </Form>
    </>
  );
};

export default SearchTableFields;
