#!/bin/bash
set -ex

rsync -azhv ./ winmetta:~/htdocs/retreat.winmetta.org/
