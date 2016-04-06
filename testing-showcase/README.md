#testing-showcase

## Introduction
This project shows one way to test your node.js code.  Included are two tests, one using a simulated external
service call and one replacing the service call with a stub.

## Libraries

* [node.js](http://nodejs.org/) - javascript evented i/o
* [express](http://expressjs.com/) - web application framework for node.js
* [supertest](https://github.com/visionmedia/supertest) - easy http assertions in tests
* [mocha](http://visionmedia.github.io/mocha/) - testing framework / runner
* [sinon](http://www.sinonjs.org) - javascript spy/stub/mock support
* [istanbul](http://gotwarlost.github.io/istanbul/) - javascript code coverage

## Setup

    npm install

## Testing

### Run the tests
To test this application execute `npm test` at the command prompt.  This will invoke Mocha.  How?  `npm` will
run `make` (test is defined as a script in package.json), which will run the mocha binary.

### Run the tests and watch the file system for changes
The Mocha framework can watch for changes and re-run all of the tests whenever a change is recorded on the filesystem.

### Run the tests and generate coverage reports
Execute `npm run coverage` at the command line.  This will run istanbul to instrument our javascript code to test, execute the tests,
and generate coverage reports available at ./coverage/lcov_reports/index.html

## Configuration

### package.json - npm configuration
### Makefile - make configuration to run Mocha
### test/mocha.opts - global options for Mocha

## On Windows?
- Run commands from the git bash shell
- To test: run `./test.sh`
- For coverage: run `./coverage.sh`
