npm install babel-core babel-loader --save-dev
rm -rf output/*
export NODE_ENV=$1
node build/build.js