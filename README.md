# React Component Factory (RCF)

Rapidly create, distribute, and iterate on React components

## Overview

`App.js` is your sandbox and the components you create are your sandbox toys (components). Add components to `App.js` to test out the components you are developing or to test the components you've already published to npm.

See the **How to** section to learn how to rapidly create new components and distribute them to npm.

## How to

0. Fork this repository and clone your fork. **This repo is intended to be used as a fork and, by not doing so, you may make life harder for yourself later on**
1. `yarn comp some_name` to create a component
2. Go into `src/components/some_name` and add code for your component, install npm modules as needed, and try out your component by using the component in `App.js` and running `yarn start`
3. Edit `package.json` to reflect your component
4. Edit `README.md` to reflect your component
5. `yarn prep some_name` to prepare the component for distribution
6. `yarn pub some_name` to publish the component to npm

## Pointers

- You will never need to touch `npm_dist`, `factory`, `public` if you are using RCF as is
- To edit the boilerplate scripts, npm build, and npm distribution scripts, go to `factory/scripts`

### Troubleshooting

- Always remember to install the packages your particular component needs from your component's subdirectory (e.g. `cd src/components/my_component; yarn install @material-ui/core`). Sometimes you can get away with not installing those packages during the component development phase but during the npm build/distribution phase, you will receive an error saying package not installed, and you will realize you played yourself
- `@types/react/index"' has no default export.` this error implies you should change the line `import React from "react"` to `import * as React from "react"`

## Why did you make this?

I work on tons of projects and often I end up reusing the same React components. However, improvements often get lost in different versions of the components due to the isolated nature of my various repos and the fact that I usually copy over component files directly. An alternative option would have been to create a separate repo for each component and to submit each component from each repo to npm, but that would introduce a lot of overhead, especially as I am always trying to move fast. Instead, I built RCF to centralize the components I develop into a single repo and to automate the preparation and distribution of components.

With React Component Factory, creating a component through distribution takes under 30 seconds. Hard to argue with that, but if you'd like to, feel free to open a GitHub issue with label "argue".
