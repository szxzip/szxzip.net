#!/bin/bash
git pull
rm -rf /var/www/html/*
docker run --rm \
  -v $(pwd):/src \
  -v /var/www/html:/src/public \
  hugomods/hugo:exts \
  --minify --gc --cleanDestinationDir --logLevel debug
