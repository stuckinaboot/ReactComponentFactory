#!/usr/bin/env bash

DEV_DIR=$1
DIST_DIR="npm_dist/$DEV_DIR"

# Check if a component for $DEV_DIR exists
if [ ! -d $COMPONENT_DEV_DIR ] 
then
    echo "Component dist $DIST_DIR does not exist." 
    exit 1
fi

cd $DIST_DIR

echo "Publishing... $PWD"
npm publish