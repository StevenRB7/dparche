#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory


git add .
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push 

