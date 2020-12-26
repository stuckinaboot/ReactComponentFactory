# React Component Factory (RCF)

Rapidly create, distribute, and iterate on React components

## Overview

## How to

0. Fork this repository and clone your fork. **This repo is intended to be used as a fork and, by not doing so, you may make life harder for yourself later on**
1. `yarn comp-create some_name` to create a component
2. Go into `src/components/some_name` and add code for your component, install npm modules as needed, and try out your component by using the component in `App.js` and running `yarn start`
3. Edit `package.json` to reflect your component
4. Edit `README.md` to reflect your component
5. `yarn npm-prepare some_name` to prepare the component for distribution
6. `cd some_name`
7. `yarn` to install node modules
8. `yarn build`
9. Publish module to NPM: `npm publish`

## Pointers

- You will never need to touch `npm_dist`, `factory`, `public` if you are using RCF as is
- To edit the boilerplate scripts, npm build, and npm distribution scripts, go to `factory/scripts`
- Always remember to install the packages your particular component needs from your component's subdirectory (e.g. `cd src/components/my_component; yarn install @material-ui/core`). Sometimes you can get away with not installing those packages during the component development phase but during the npm build/distribution phase, you will receive an error saying package not installed, and you will realize you played yourself
