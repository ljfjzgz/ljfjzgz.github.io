const phaseNavs = [
    {
        id: '00-business-overview',
        label: '00-业务概况',
        level: 1,
        children: [
            { id: '00-business-overview/1.业务概况', label: '1.业务概况', level: 2 },
            { id: '00-business-overview/2.客户赔付流程', label: '2.客户赔付流程', level: 2 },
            { id: '00-business-overview/3.供应商索赔流程', label: '3.供应商索赔流程', level: 2 },
            { id: '00-business-overview/4.权限管理', label: '4.权限管理', level: 2 }
        ]
    },
    {
        id: '01-compensation-type-config',
        label: '01-赔付类型配置',
        level: 1,
        children: [
            { id: '01-赔付类型配置/索赔原因（供应商）', label: '索赔原因（供应商）', level: 2 },
            { id: '01-赔付类型配置/赔付原因（客户）', label: '赔付原因（客户）', level: 2 }
        ]
    },
    {
        id: '02-data-import',
        label: '02-数据导入',
        level: 1,
        children: [
            { id: '02-数据导入/尾程索赔导入', label: '尾程索赔导入', level: 2 },
            { id: '02-数据导入/赔付客户导入', label: '赔付客户导入', level: 2 }
        ]
    },
    {
        id: '03-small-package-compensation',
        label: '03-小包客户赔付',
        level: 1,
        children: [
            { id: '03-小包客户赔付/小包客户赔付列表', label: '小包客户赔付列表', level: 2 }
        ]
    },
    {
        id: '04-supplier-claim-list',
        label: '04-供应商索赔列表',
        level: 1,
        children: [
            { id: '04-供应商索赔列表/尾程索赔列表', label: '尾程索赔列表', level: 2 },
            { id: '04-供应商索赔列表/干线索赔列表', label: '干线索赔列表', level: 2 }
        ]
    },
    {
        id: '05-underlying-data',
        label: '05-底层数据',
        level: 1,
        children: [
            { id: '05-底层数据/订单赔付索赔底表', label: '订单赔付索赔底表', level: 2 }
        ]
    },
    {
        id: '06-statistical-reports',
        label: '06-统计报表',
        level: 1,
        children: [
            { id: '06-统计报表/赔付索赔匹配分析报表', label: '赔付索赔匹配分析报表', level: 2 }
        ]
    }
];

// 文件路径映射
const filePathMap = {
    '00-business-overview/1.业务概况': '00-业务概况/1.业务概况.md',
    '00-business-overview/2.客户赔付流程': '00-业务概况/2.客户赔付流程.md',
    '00-business-overview/3.供应商索赔流程': '00-业务概况/3.供应商索赔流程.md',
    '00-business-overview/4.权限管理': '00-业务概况/4.权限管理.md',
    '01-赔付类型配置/索赔原因（供应商）': '01-赔付类型配置/索赔原因（供应商）.md',
    '01-赔付类型配置/赔付原因（客户）': '01-赔付类型配置/赔付原因（客户）.md',
    '02-数据导入/尾程索赔导入': '02-数据导入/尾程索赔导入.md',
    '02-数据导入/赔付客户导入': '02-数据导入/赔付客户导入.md',
    '03-小包客户赔付/小包客户赔付列表': '03-小包客户赔付/小包客户赔付列表.md',
    '04-供应商索赔列表/尾程索赔列表': '04-供应商索赔列表/尾程索赔列表.md',
    '04-供应商索赔列表/干线索赔列表': '04-供应商索赔列表/干线索赔列表.md',
    '05-底层数据/订单赔付索赔底表': '05-底层数据/订单赔付索赔底表.md',
    '06-统计报表/赔付索赔匹配分析报表': '06-统计报表/赔付索赔匹配分析报表.md'
};
