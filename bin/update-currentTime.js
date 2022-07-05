#!/usr/bin/env node
'use strict';

var updateCurrentTime = function updateCurrentTime() {

  let time = new Date();
  return JSON.stringify(time.toISOString());
}

if (!module.parent) {
  let d = updateCurrentTime()
  console.log(d);
}

exports = module.exports = updateCurrentTime