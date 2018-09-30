#!/bin/bash

# What to clean
npm_dependencies="node_modules"
lock_file="package-lock.json"
test_reports="test-reports"

$(rm -rf $npm_dependencies \
         $lock_file \
         $test_reports)
