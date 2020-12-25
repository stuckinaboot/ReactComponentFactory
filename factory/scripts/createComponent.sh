#!/usr/bin/env bash

NPM_DIST_NAME="npm_base"

DEV_DIR=$1
COMPONENT_DEV_DIR="src/components/$DEV_DIR"
PREPARE_DIR="factory/boilerplate/npm_prepare"

# Check if a component for $DEV_DIR exists
if [ -d $COMPONENT_DEV_DIR ] 
then
    echo "Component $COMPONENT_DEV_DIR already exists." 
    exit 1
fi

echo "Component $COMPONENT_DEV_DIR does not exist"
mkdir $COMPONENT_DEV_DIR
cp -r PREPARE_DIR/ $COMPONENT_DEV_DIR
echo "Created $COMPONENT_DEV_DIR. Now get building!"