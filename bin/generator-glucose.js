#!/usr/bin/env node
'use strict';

// 60—100mg/dl
var generatorGlucose = function generatorGlucose() {
    let len = 200;
    let glucose = 180;
    let createTime = new Date();
    let glucoseArray = []
    createTime = createTime || new Date()

    for (let i = 0; i < len; i++) {
        let data = {
            type: "sgv",
            device: "fakecgm"
        }
        let tempTime = new Date(createTime.getTime() - (5 * i -1) * 60 * 1000);
        data["dateString"] = tempTime.toISOString();
        data["date"] = tempTime.getTime();

        // 血糖的浮动数值
        let fluctuate = Math.floor(Math.random() * 20);
        // 血糖走势 + or -
        let calSymbol = Math.floor(Math.random() * 10) > 5;
        let tempGlucose = calSymbol ? glucose + fluctuate : glucose - fluctuate

        data["sgv"] = tempGlucose;
        data["glucose"] = tempGlucose;

        glucose = tempGlucose;

        glucoseArray.push(data);
    }

    return JSON.stringify(glucoseArray);
}

if (!module.parent) {
  let d = generatorGlucose()
  console.log(d);
}

exports = module.exports = generatorGlucose