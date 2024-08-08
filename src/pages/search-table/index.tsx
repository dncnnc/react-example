import React, { useState, useEffect } from 'react';
import SearchTableFields from './components/search-table-fields';
import TableSimple from './components/table-simple';
import useTableSearch from './hooks/use-table-search';
import type { Params } from './hooks/use-table-search';

interface SeaarchTableProps {}

const SeaarchTable: React.FC<SeaarchTableProps> = (
  props: SeaarchTableProps
) => {
  const [tableQueryParams, setTableQueryParams] = useState<Params>({});
  const { tableLoading, tableData, pageInfo } = useTableSearch({
    params: tableQueryParams,
  });

  /** 查询表格数据 */
  const handleSearch = (values: Params) => {
    setTableQueryParams({
      ...values,
      pageIndex: pageInfo?.pageIndex || 1,
      pageSize: pageInfo?.pageSize || 20,
    });
  };

  /** 重置表格数据 */
  const handleReset = (values: Params) => {
    setTableQueryParams({
      ...values,
      pageIndex: pageInfo?.pageIndex || 1,
      pageSize: pageInfo?.pageSize || 20,
    });
  };

  useEffect(() => {
    setTableQueryParams({
      pageIndex: pageInfo?.pageIndex || 1,
      pageSize: pageInfo?.pageSize || 20,
    });
  }, []);

  return (
    <div>
      <h3>查询表格</h3>
      <SearchTableFields onSearch={handleSearch} onResetFinish={handleReset} />
      <TableSimple
        loading={tableLoading}
        dataSource={tableData}
        pagination={{
          current: pageInfo?.pageIndex,
          pageSize: pageInfo?.pageSize,
          total: pageInfo?.totalRecords,
          onChange: (page, pageSize) => {
            setTableQueryParams((prev) => ({
              ...prev,
              pageIndex: page,
              pageSize,
            }));
          },
        }}
      />
    </div>
  );
};

export default SeaarchTable;
