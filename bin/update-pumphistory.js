#!/usr/bin/env node
'use strict';

var updatePumpHistory = function updatePumpHistory() {

  let time = new Date();

  let pumpTemp = [
    {
      "_type": "Bolus",
      "amount": 1,
      "timestamp": new Date(new Date().getTime() - 2000) // 2 secs ago
    },
    {
      "_type": "Bolus",
      "amount": 2,
      "timestamp": new Date(time.getTime() - (5 * 10 -1) * 60 * 1000) // 50 min ago
    },
  ]

  return JSON.stringify(pumpTemp);
}

if (!module.parent) {
  let d = updatePumpHistory()
  console.log(d);
}

exports = module.exports = updatePumpHistory