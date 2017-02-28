# (Mi)nimalistic (S)ecure (api)
---

# Setup
First, clone this repo and navigate into the project:
```
git clone https://github.com/MirrorBytes/MiSapi.git && cd MiSapi
```
Second, install dependencies:
```
npm install --production
```
***OR*** (if you have [Yarn](https://yarnpkg.com/en/) installed)
```
yarn install --production
```
Third, make sure you have mongo installed (you may have to do some Google searches) and running:
```
mongod
```
Finally, run MiSapi:
```
node .
```
---

#TODO:
- Write cli script for easy installation, manipulation, and standardization.
  - Make sure it's user friendly, and simple.
  - Swap cluster.js out for node-webworker-threads on all database requests.
- Optimize modules, using explicit path resolution.
