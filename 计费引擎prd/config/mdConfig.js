const phaseNavs = [
    {
        id: 'phase1',
        label: '一期',
        level: 1,
        children: [
            {
                id: 'functional-docs',
                label: '功能性需求',
                level: 2,
                children: [
                    { id: 'phase1-prd', label: '一期 prd', level: 3 }
                ]
            }
        ]
    },
    {
        id: 'phase2',
        label: '二期',
        level: 1,
        children: [
            {
                id: 'functional-requirements',
                label: '功能性需求',
                level: 2,
                children: [
                    { id: 'factor-config', label: '因子配置', level: 3 },
                    { id: 'billing-model-config', label: '计费模型配置', level: 3 }
                ]
            },
            {
                id: 'non-functional-requirements',
                label: '非功能性需求',
                level: 2,
                children: [
                    { id: 'business-system-params', label: '业务系统传参数据结构', level: 3 },
                    { id: 'billing-rule-abstraction', label: '计费规则抽象', level: 3 },
                    { id: 'billing-element-definition', label: '计费要素标准定义', level: 3 },
                    { id: 'billing-rule-flag', label: '是否计费规则', level: 3 }
                ]
            }
        ]
    }
];
