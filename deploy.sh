#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run clean && npm run build

# navigate into the build output directory
cd dist

echo 'damian.bio' > CNAME

git init
git checkout -b deploy
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:dmreiter/dmreiter.github.io.git deploy

cd -
