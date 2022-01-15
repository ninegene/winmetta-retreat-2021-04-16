#!/bin/bash
set -ex

./build.sh

rsync -azhv --exclude=".DS_Store" ./ winmetta:~/htdocs/retreat.winmetta.org/
