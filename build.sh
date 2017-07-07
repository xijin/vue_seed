npm install --save-dev
rm -rf output/*
export NODE_ENV=$1
node build/build.js