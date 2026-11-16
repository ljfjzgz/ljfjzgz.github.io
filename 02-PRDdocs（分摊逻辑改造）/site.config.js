// 站点信息与文档清单。改这个文件即可，C段分摊改造PRD.html 不用动。
window.SITE = {

  // 显示在左上角和页面元信息里
  title: 'C段分摊改造',
  docsTitle: '需求文档',
  subtitle: 'Product Docs',

  // 左上角圆形图标里的字母，留空则取 title 首字
  mark: '',

  // 按显示顺序排列，顺序与文件名无关
  docs: [
    { id: 'refactor', num: '01', title: '分摊逻辑重构', file: '正文/01-分摊逻辑重构.md', kind: 'PRD' },
    { id: 'config', num: '02', title: '配置表初始化清单', file: '正文/02-配置表初始化清单.md', kind: '配置清单' },
    { id: 'us', num: '03', title: 'C段美国分摊逻辑调整', file: '正文/03-C段美国分摊逻辑调整.md', kind: 'PRD' },
    { id: 'v3', num: '04', title: 'C段分摊新增 V3 包裹类型', file: '正文/04-C段分摊新增V3包裹类型.md', kind: 'PRD' }
  ],

  // 表格列宽：这些表头的列不换行；指定列的最小宽度
  layout: {
    keepWidth: ['成本段', '国家', '汇总费用项', '类型', '序号', '本次', '判定顺序', '字段', '箱子', '包裹', '是否多值', '费用项编码', '费用项', '计费因子'],
    minWidth: { '分摊因子': '156px', '组内费用项': '200px' }
  }
};
