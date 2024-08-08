import Mock from 'mockjs';
import getTableSchema from './mocks/table';

Mock.mock('/api/table', 'get', (req: any) => {
  const schema = getTableSchema(req);
  const res = Mock.mock(schema);
  console.log(
    '%cNetwork:',
    'color: green;',
    req.url,
    JSON.parse(req.body),
    res
  );
  return res;
});

// 模拟带有延迟的接口响应
Mock.setup({
  timeout: '100-700',
});
