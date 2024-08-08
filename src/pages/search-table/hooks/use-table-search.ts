import { useState, useEffect } from 'react';
import request from '../../../utils/request';
import { TableDataType } from '../components/table-simple';

export type Params = Record<string, React.Key>;

interface TableSearchProps {
  /** 表格请求的入参 */
  params: Params;
}

export type PageInfo = {
  pageIndex: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
};

interface TableSearchResult {
  /** 表格是否加载中 */
  tableLoading?: boolean;
  /** 表格数据 */
  tableData: TableDataType[];
  /** 分页信息 */
  pageInfo: PageInfo | undefined;
}

const useTableSearch = (props: TableSearchProps): TableSearchResult => {
  const { params } = props;

  /** 表格数据是否加载中 */
  const [tableLoading, setTableLoading] = useState(false);
  /** 表格数据 */
  const [tableData, setTableData] = useState<TableDataType[]>([]);
  /** 分页信息 */
  const [pageInfo, setPageInfo] = useState<PageInfo>();

  /** TODO: 将源数据转换成符合表格展示的数据 */
  const formatData = (data: TableDataType[]) => {
    return data.map((item: TableDataType) => {
      return {
        id: item?.id,
        name: item?.name,
        age: item?.age,
        createTimeStr: item?.createTimeStr,
        updateTimeStr: item?.updateTimeStr,
      };
    });
  };

  /** 获取表格数据 */
  const getTableData = async (params: Params) => {
    setTableLoading(true);
    try {
      // TODO: 请求表格数据
      const res: any = await request.get('/api/table', {
        data: params,
      });
      const data = res?.data;

      setPageInfo({
        pageIndex: res?.pageIndex || 1,
        pageSize: res?.pageSize || 20,
        totalPages: res?.totalPages,
        totalRecords: res?.totalRecords,
      });

      setTableData(formatData(data || []));
    } catch (error) {
      console.error(error);
    } finally {
      setTableLoading(false);
    }
  };

  useEffect(() => {
    // 如果正在加载中，不再请求
    if (tableLoading) return;
    // 如果没有入参，不请求接口
    if (Object.keys(params).length === 0) {
      return;
    }
    getTableData(params);
  }, [params]);

  return { tableLoading, tableData, pageInfo };
};

export default useTableSearch;
