#!/usr/bin/env bash

DEV_DIR=$1
COMPONENT_DEV_DIR="src/components/$DEV_DIR"
NPM_DIST_DIR="factory/boilerplate/npm_base"

# Check if a component for $DEV_DIR exists
if [ -d $COMPONENT_DEV_DIR ] 
then
    echo "Component $COMPONENT_DEV_DIR exists." 
else
    echo "Component $COMPONENT_DEV_DIR does not exist. Nothing more can be done." 
    exit 1
fi

if [ ! -f $COMPONENT_DEV_DIR/package.json ]; then
    echo "Component package.json not found. Add a package.json and continue"
    exit 1
fi

if [ -d $DEV_DIR ] 
then
    echo "Directory $DEV_DIR exists." 
else
    echo "Directory $DEV_DIR does not exist, creating directory $DEV_DIR"
    mkdir $DEV_DIR
    echo "Copying base npm package at $NPM_DIST_DIR into $DEV_DIR"
    cp -r $NPM_DIST_DIR/ $DEV_DIR/
fi

echo "Clearing existing $DEV_DIR/src"
rm -rf $DEV_DIR/src/*

echo "Copying src/components/$DEV_DIR to $DEV_DIR/src"
cp -r $COMPONENT_DEV_DIR/ $DEV_DIR/src/

echo "Moving src/components/$DEV_DIR/package.json to $DEV_DIR"
cd $DEV_DIR/src
mv package.json ..

echo "Successfully copied files to $DEV_DIR/src"
echo "Next steps: Edit $DEV_DIR/package.json, in $DEV_DIR run yarn and yarn build, and finally npm publish when you're ready"