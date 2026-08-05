const phaseNavs = [
  {
    id: "00-business-overview",
    label: "00-业务概况",
    level: 1,
    children: [
      { id: "00-business-overview/1.业务概况", label: "1.业务概况", level: 2 },
      {
        id: "00-business-overview/2.差异类型系统判断逻辑",
        label: "2.差异类型系统判断逻辑",
        level: 2,
      },
      {
        id: "00-business-overview/3.对账单生成账单管理记录逻辑",
        label: "3.对账单生成账单管理记录逻辑",
        level: 2,
      },
    ],
  },
  {
    id: "01-statement",
    label: "01-对账单",
    level: 1,
    children: [
      { id: "01-statement/1.对账单列表", label: "1.对账单列表", level: 2 },
      { id: "01-statement/2.对账单详情", label: "2.对账单详情", level: 2 },
      { id: "01-statement/3.对账单明细", label: "3.对账单明细", level: 2 },
      { id: "01-statement/4.对账明细底表", label: "4.对账明细底表", level: 2 },
      { id: "01-statement/5.对账结果汇总", label: "5.对账结果汇总", level: 2 },
    ],
  },
  {
    id: "02-clearing-bill",
    label: "02-清账单",
    level: 1,
    children: [
      { id: "02-clearing-bill/清账单列表", label: "清账单列表", level: 2 },
    ],
  },
  {
    id: "03-report",
    label: "03-报表",
    level: 1,
    children: [
      { id: "03-report/应付账单统计表", label: "应付账单统计表", level: 2 },
      { id: "03-report/滚动计提表", label: "滚动计提表", level: 2 },
    ],
  },
];

// 文件路径映射
const filePathMap = {
  "00-business-overview/1.业务概况": "00-业务概况/1.业务概况.md",
  "00-business-overview/2.差异类型系统判断逻辑":
    "00-业务概况/2.差异类型系统判断逻辑.md",
  "00-business-overview/3.对账单生成账单管理记录逻辑":
    "00-业务概况/3.对账单生成账单管理记录逻辑.md",
  "01-statement/1.对账单列表": "01-对账单/1.对账单列表.md",
  "01-statement/2.对账单详情": "01-对账单/2.对账单详情.md",
  "01-statement/3.对账单明细": "01-对账单/3.对账单明细.md",
  "01-statement/4.对账明细底表": "01-对账单/4.对账明细底表.md",
  "01-statement/5.对账结果汇总": "01-对账单/5.对账结果汇总.md",
  "02-clearing-bill/清账单列表": "02-清账单/清账单列表.md",
  "03-report/应付账单统计表": "03-报表/应付账单统计表.md",
  "03-report/滚动计提表": "03-报表/滚动计提表.md",
};
