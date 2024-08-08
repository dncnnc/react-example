import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TablePaginationConfig } from 'antd/lib/table';

// TODO: 表格数据
export interface TableDataType {
  id: number;
  name: string;
  age: number;
  createTimeStr: string;
  updateTimeStr: string;
}

interface TableSimpleProps {
  /** 加载状态 */
  loading?: boolean;
  /** 表格数据 */
  dataSource: TableDataType[];
  /** 分页配置 */
  pagination?: TablePaginationConfig;
}

const TableSimple: React.FC<TableSimpleProps> = (props) => {
  const { loading = false, dataSource, pagination = false } = props;

  // TODO: 这里需要根据业务需求设置列数据
  const columns: ColumnsType<TableDataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 60,
      render: (text) => text || '-',
    },
    {
      title: '名称',
      dataIndex: 'name',
      width: 120,
      render: (text) => text || '-',
    },
    {
      title: '年纪',
      dataIndex: 'age',
      width: 80,
      render: (text) => text || '-',
    },
    {
      title: '创建时间',
      dataIndex: 'createTimeStr',
      width: 120,
      render: (text) => text || '-',
    },
    {
      title: '更新时间',
      dataIndex: 'updateTimeStr',
      width: 120,
      render: (text) => text || '-',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      width: 80,
      render: (_, record) => {
        return <span style={{ userSelect: 'none' }}>操作</span>;
      },
    },
  ];

  return (
    <div style={{ marginTop: 24 }}>
      <Table
        rowKey="id" // TODO: 唯一键设置
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
      />
    </div>
  );
};

export default TableSimple;
