#!/usr/bin/env bash

NPM_DIST_NAME="npm_dist"

DEV_DIR=$1
if [ -d $DEV_DIR ] 
then
    echo "Directory $DEV_DIR exists." 
else
    echo "Directory $DEV_DIR does not exist, creating directory $DEV_DIR"
    mkdir $DEV_DIR
    echo "Copying base npm package at $NPM_DIST_NAME into $DEV_DIR"
    # rT copies recursively and includes hidden files
    # https://superuser.com/questions/61611/how-to-copy-with-cp-to-include-hidden-files-and-hidden-directories-and-their-con
    cp -rT $NPM_DIST_NAME/* $DEV_DIR/
fi
cd $DEV_DIR

echo "Clearing existing $DEV_DIR/src"
rm -rf $DEV_DIR/src/*

echo "Copying src/$DEV_DIR to $DEV_DIR"
cp -r src/$DEV_DIR/* $DEV_DIR/src

# echo "Copying types to $NPM_DIST_NAME"
# cp -r src/typings npm_dist/src

echo "Successfully copied files to $DEV_DIR/src"

cd $DEV_DIR

echo "Preparing to build from $DEV_DIR"
yarn build

echo "Built npm package"
echo "Now go edit $DEV_DIR/package.json and then run npm publish when you're ready"