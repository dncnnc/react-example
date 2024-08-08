import { PAGE_INDEX, PAGE_SIZE, PAGE_TOTAL } from './constant';

const getMockSchema = (req: any) => {
  const params = JSON.parse(req?.body);
  if (!params.pageIndex) {
    params.pageIndex = PAGE_INDEX;
  }
  if (!params.pageSize) {
    params.pageSize = PAGE_SIZE;
  }
  return {
    totalRecords: PAGE_TOTAL * params?.pageSize - 3,
    totalPages: PAGE_TOTAL,
    pageIndex: params?.pageIndex,
    pageSize: params?.pageSize,
    success: true,
    code: '200',
    msg: '操作成功',
    [`data|${params?.pageSize}`]: [
      {
        'id|+1': 7123689,
        name: '@cname',
        'age|18-35': 21,
        createTimeStr: '@date',
        updateTimeStr: '@date',
      },
    ],
  };
};

export default getMockSchema;
