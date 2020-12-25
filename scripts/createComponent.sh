#!/usr/bin/env bash

NPM_DIST_NAME="npm_base"

DEV_DIR=$1
COMPONENT_DEV_DIR="src/components/$DEV_DIR"

# Check if a component for $DEV_DIR exists
if [ -d $COMPONENT_DEV_DIR ] 
then
    echo "Component $COMPONENT_DEV_DIR already exists." 
    exit 1
fi

mkdir $COMPONENT_DEV_DIR
cp npm_prepare/ $COMPONENT_DEV_DIR