require('dotenv').config()
const { TimelineService } = require('wdio-timeline-reporter/timeline-service')

const debug = 'true'
const logLevel = 'error'

const reporter = [
  'dot',
  [
    'timeline',
    {
      outputDir: './reports',
      fileName: 'test-results.html',
      embedImages: true,
      images: {
        quality: 80,
        resize: false,
        redutionRatio: 2,
      },
      screenshotStrategy: 'none',
    },
  ],
]

exports.config = {
  specs: ['./test/**/*.js'],
  suites: {
    journey: ['./test/journey.*.js'],
    //journey.successful-booking-with-updated-language.test
  },
  exclude: [],
  maxInstances: 1,
  logLevel: logLevel || 'info',
  bail: 0,
  baseUrl: 'https://staging.snaptravel.com',
  waitforTimeout: 60000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  reporters: reporter,
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:@babel/register'],
    timeout: debug ? 24 * 60 * 60 * 1000 : 180000,
    fullTrace: true,
    retries: 0,
  },
}
