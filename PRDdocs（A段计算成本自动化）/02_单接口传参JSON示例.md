# 接口传参示例

```json
{
  "Id": null, // 引擎内部ID（计费引擎返回），新建填null；业务系统需持久化引擎首次返回的该Id，更新时必填回传，因为要车更新可能运单和供应商产生变化
  "BusinessMainType": "ParcelFullSegment", // 一级业务：小包全段(固定传即可)
  "BusinessSecondaryType": "SectionA", // 二级业务：A段(固定传即可)
  "BusinessPeriodType": "LocalShortHaul", // 三级业务：国内转运(固定传即可)
  "BusinessItemTypeCode": "Waybill", // 单据类型：运单(固定传即可)
  "ClientInfo": {
    "Id": "YC260819000103", // 【最小单元主键】要车编码，唯一标识这个最小单元报价，因为要车数据不存在主子报价的关联关系，统一按一个编码即可
    "QuotationId": "YC260819000103", // 业务系统原始报价ID（同要车编码）
    "Name": null, // 报价名称（可空）
    "FileId": null, // 关联的报价文件ID（可空）
    "FileName": null, // 关联的报价文件名（可空）
    "AffectStart": "2026-01-01T00:00:00Z", // 生效开始时间（固定传2026-01-01开始就行，因为后续运单数据创建一定晚于这个时间，匹配没问题）
    "AffectEnd": null, // 生效截止时间（空则默认2099-12-31）
    "IsEnabled": true, // 是否启用（必传），传true=启用，false=停用
    "CreatedAt": "2026-08-20T10:00:00Z", // 创建时间（必传），可以传接口调用时间，因为这个要车数据不是传统报价，创建时间早于报价时间
    "CreatedBy": "YaoCheSystem", // 创建人（可空）
    "UpdatedAt": "2026-08-20T10:00:00Z", // 更新时间（可空）
    "UpdatedBy": "YaoCheSystem" // 更新人（可空）
  },
  "Content": {
    "Dimensions": "{\"WaybillId\":\"DWBL26080168\",\"SupplierId\":\"G16263\"}", // 匹配维度：运单号 + 供应商ID（要车任务固定按这个作为主键）
    "Fees": [
      { // ===== 费用项1：转运费（按方数即运单的cbm） =====
        "Id": "TranshipmentCharge", // 费用项在列表中的唯一标识（用于溯源），不限于0、1、2、3或者UUID或者FeeTypeCode+序号123等形式，能够通过此Id溯源业务系统的费用项即可
        "FeeTypeCode": "TranshipmentCharge", // 费用项编码，FeeTypeId（ID）和FeeTypeCode（编码）二选一，费用项最好统一调引擎费用项枚举，不然还需做映射处理
        "Seq": 0, // 顺序号（从0开始），用于区分同一费用项的不同计费方式。例如：转运费同时按方数和按重量计费时，两个对象 Seq 分别为 0 和 1
        "CurrencyCode": "CNY", // 币种，按该费用项币种传
        "CalculationCondition": {
          "IsDefaultCalculationEnabled": true, // true=无条件参与计费（当前计费场景固定传即可）
          "ConditionValue": null // 无条件，所以为空（当前计费场景固定传即可）
        },
        "CalculationMethod": {
          "RangeCalculation": { // 分段计费（本例只用一段）
            "Sections": [
              {
                "SectionFactor": "TotalCubicMeter", // 区间因子（必传），取值来自于BusinessItemFactor，未动态获取引擎基础数据则需要提前约定值
                "Begin": 0, // 区间因子开始值（必传）  
                "IncludeBegin": true, // 区间因子是否包含开始值（必传）  
                "End": null, // 区间因子结束值（可选，不传按正无穷处理） 
                "IncludeEnd": null, // 区间因子是否包含结束值（可选，当End有值时必传）
                "FeeFactor": "TotalCubicMeter", // 计费因子。取值来自于BusinessItemFactor，未动态获取引擎基础数据则需要提前约定值。
                "UnitPrice": 150.00, // 单价（必传）    
                "MinValue": 50.00, // 费用最小值（可选）   
                "MaxValue": 1000.00 // 费用最大值（可选）  
              }
            ]
          }
        }
      },
      { // ===== 费用项2：报关费（按车/固定费） =====
        "Id": "CustomsCharge", // 费用项在列表中的唯一标识（用于溯源），不限于0、1、2、3或者UUID或者FeeTypeCode+序号123等形式，能够通过此Id溯源业务系统的费用项即可
        "FeeTypeCode": "CustomsCharge", // 费用项编码，FeeTypeId（ID）和FeeTypeCode（编码）二选一，费用项最好统一调引擎费用项枚举，不然还需做映射处理
        "Seq": 0, // 顺序号（从0开始），用于区分同一费用项的不同计费方式。例如：转运费同时按方数和按重量计费时，两个对象 Seq 分别为 0 和 1
        "CurrencyCode": "CNY", // 币种，按该费用项币种传
        "CalculationCondition": {
          "IsDefaultCalculationEnabled": true, // 无条件参与计费（当前计费场景固定传即可）
          "ConditionValue": null // 无条件，所以为空（当前计费场景固定传即可）
        },
        "CalculationMethod": {
          "RangeCalculation": {
            "Sections": [
              {
                "SectionFactor": "WaybillsCount", // 区间因子（必传），取值来自于BusinessItemFactor，未动态获取引擎基础数据则需要提前约定值
                "Begin": 0, // 区间因子开始值（必传）  
                "IncludeBegin": true, // 区间因子是否包含开始值（必传）  
                "End": null, // 区间因子结束值（可选，不传按正无穷处理） 
                "IncludeEnd": null, // 区间因子是否包含结束值（可选，当End有值时必传）
                "FeeFactor": "WaybillsCount", // 计费因子。取值来自于BusinessItemFactor，未动态获取引擎基础数据则需要提前约定值。
                "UnitPrice": 300.00, // 单价（必传）    
                "MinValue": null, // 最低收费（可选）
                "MaxValue": null // 最高封顶（可选）
              }
            ]
          }
        }
      },
      { // ===== 费用项3：其他费用（按重量） =====
        "Id": "OtherCharge1", // 费用项在列表中的唯一标识（用于溯源），不限于0、1、2、3或者UUID或者FeeTypeCode+序号123等形式，能够通过此Id溯源业务系统的费用项即可
        "FeeTypeCode": "OtherCharge", // 费用项编码，FeeTypeId（ID）和FeeTypeCode（编码）二选一，费用项最好统一调引擎费用项枚举，不然还需做映射处理
        "Seq": 0, // 顺序号（从0开始），用于区分同一费用项的不同计费方式。例如：转运费同时按方数和按重量计费时，两个对象 Seq 分别为 0 和 1
        "CurrencyCode": "CNY", // 币种，按该费用项币种传
        "CalculationCondition": {
          "IsDefaultCalculationEnabled": true, // 无条件参与计费（当前计费场景固定传即可）
          "ConditionValue": null // 无条件，所以为空（当前计费场景固定传即可）
        },
        "CalculationMethod": {
          "RangeCalculation": {
            "Sections": [
              {
                "SectionFactor": "TotalWeight", // 区间因子（必传），取值来自于BusinessItemFactor，未动态获取引擎基础数据则需要提前约定值
                "Begin": 0, // 区间因子开始值（必传）  
                "IncludeBegin": true, // 区间因子是否包含开始值（必传）  
                "End": null, // 区间因子结束值（可选，不传按正无穷处理） 
                "IncludeEnd": null, // 区间因子是否包含结束值（可选，当End有值时必传）
                "FeeFactor": "TotalWeight", // 计费因子：按"核重"乘
                "UnitPrice": 5.00, // 单价（必传）    
                "MinValue": 20.00, // 最低收费（可选）
                "MaxValue": 500.00 // 最高封顶（可选）
              }
            ]
          }
        }
      }
    ],
    "ChildDimensionQuotations": null // 不需要传，要车系统没有这个场景
  }
}
```