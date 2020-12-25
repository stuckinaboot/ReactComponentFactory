#!/usr/bin/env bash

DEV_DIR=$1
COMPONENT_DEV_DIR="src/components/$DEV_DIR"
NPM_BOILERPLATE_DIR="factory/boilerplate/npm_base"
DIST_DIR="npm_dist/$DEV_DIR"

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

if [ -d $DIST_DIR ] 
then
    echo "Directory $DIST_DIR exists." 
else
    echo "Directory $DIST_DIR does not exist, creating directory $DIST_DIR"
    mkdir $DIST_DIR
    echo "Copying base npm package at $NPM_BOILERPLATE_DIR into $DIST_DIR"
    cp -r $NPM_BOILERPLATE_DIR/ $DIST_DIR/
fi

echo "Clearing existing $DIST_DIR/src"
rm -rf $DIST_DIR/src/*

echo "Copying src/components/$DEV_DIR to $DIST_DIR/src"
cp -r $COMPONENT_DEV_DIR/ $DIST_DIR/src/

echo "Moving src/components/$DEV_DIR/package.json to $DIST_DIR"
cd $DIST_DIR/src
mv package.json ..

echo "Successfully copied files to $DIST_DIR/src"
echo "Next steps: Edit $DIST_DIR/package.json, in $DIST_DIR run yarn and yarn build, and finally npm publish when you're ready"