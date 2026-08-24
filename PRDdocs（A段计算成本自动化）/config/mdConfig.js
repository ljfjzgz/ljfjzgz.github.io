const phaseNavs = [
    {
        id: 'a-segment-cost',
        label: 'A段成本计算自动化',
        level: 1,
        children: [
            { id: 'a-segment-cost/01', label: '01-A段成本计算自动化方案', level: 2 },
            { id: 'a-segment-cost/02', label: '02-单接口传参JSON示例', level: 2 },
            { id: 'a-segment-cost/03', label: '03-报价同步接口-V0.0.2', level: 2 }
        ]
    }
];

// 文件路径映射（id → 00-PRDdocs/ 子目录下相对 .md 路径）
const filePathMap = {
    'a-segment-cost/01': '00-PRDdocs/01_A段成本计算自动化方案.md',
    'a-segment-cost/02': '00-PRDdocs/02_单接口传参JSON示例.md',
    'a-segment-cost/03': '00-PRDdocs/03_报价同步接口-V0.0.2.md'
};
