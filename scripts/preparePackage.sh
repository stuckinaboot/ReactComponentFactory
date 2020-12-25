#!/usr/bin/env bash

NPM_DIST_NAME="npm_dist"

echo "Clearing existing $NPM_DIST_NAME/src"
rm -rf $NPM_DIST_NAME/src/*

echo "Copying components to $NPM_DIST_NAME"
cp -r src/components npm_dist/src

echo "Copying types to $NPM_DIST_NAME"
cp -r src/typings npm_dist/src

echo "Successfully copied components to $NPM_DIST_NAME"

cd $NPM_DIST_NAME

echo "Preparing to build from $NPM_DIST_NAME"
yarn build

echo "Built npm package"
echo "Now go edit $NPM_DIST_NAME/package.json and then run npm publish when you're ready"