#!/bin/bash
set -ex

rsync -azhv --exclude=".DS_Store" ./ winmetta:~/htdocs/retreat.winmetta.org/
