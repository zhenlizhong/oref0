#!/usr/bin/env node
'use strict';

var updatePumpHistory = function updatePumpHistory() {

  let time = new Date();

  let pumpTemp = [
    {
      "_type": "Bolus",
      "amount": 1,
      "timestamp": new Date(time.getTime() - (5 * 10 -1) * 60 * 1000) // 23 or 13
    }
  ]

  return JSON.stringify(pumpTemp);
}

if (!module.parent) {
  let d = updatePumpHistory()
  console.log(d);
}

exports = module.exports = updatePumpHistory