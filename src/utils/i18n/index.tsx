import React from "react"
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';

export const getAntdLocale = (localeString:string) =>{
    switch(localeString){
        case "zh-cn": return zhCN;
        case "en-us": return enUS;
        default: return zhCN;
    }
}