#!/bin/bash

#generator-glucose > glucose.json

update-fake-glucose > glucose.json
update-pumphistory > pumphistory.json
update-currentTime > clock.json

oref0-calculate-iob pumphistory.json profile.json clock.json > iob.json
#oref0-meal pumphistory.json profile.json clock.json glucose.json basal_profile.json carbhistory.json > meal.json
oref0-determine-basal iob.json temp_basal.json glucose.json profile.json > suggested.json
#cat suggested.json | jq -C -c '. | del(.predBGs) | del(.reason)'
#cat suggested.json | jq -C -c .reason
#cat suggested.json | jq -C -c .predBGs
