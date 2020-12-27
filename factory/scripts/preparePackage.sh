#!/usr/bin/env bash

ROOT=$PWD
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

cd $COMPONENT_DEV_DIR
echo "Incrementing version number"
npm version patch

cd $ROOT

echo "Clearing existing $DIST_DIR/src"
rm -rf $DIST_DIR/src/*

echo "Copying src/components/$DEV_DIR to $DIST_DIR/src"
cp -r $COMPONENT_DEV_DIR/ $DIST_DIR/src/

echo "Moving src/components/$DEV_DIR/package.json to $DIST_DIR"
cd $DIST_DIR/src
mv package.json ..
echo "Moving src/components/$DEV_DIR/README.md to $DIST_DIR"
mv README.md ..

echo "Successfully copied files to $DIST_DIR/src"
echo "Installing npm modules"
yarn

# Add react (we don't include it in boilerplate package.json
# because that will result in https://reactjs.org/warnings/invalid-hook-call-warning.html)
yarn add --dev react react-dom @types/react @types/react-dom

echo "Building for npm..."
yarn build

echo "Build successfully"
echo "Run yarn npm-publish $DEV_DIR when you're ready"