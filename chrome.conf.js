// Provides configuration for running chrome and chrome headless on a local machine
const { TimelineService } = require('wdio-timeline-reporter/timeline-service')
const { config } = require('./shared.conf')
require('dotenv').config()

const headless = false
const service = ['chromedriver', [TimelineService]]
const sharedArgs = [
  '--headless',
  '--disable-gpu',
  '--disable-dev-shm-usage',
  '--no-sandbox',
]

const localConfig = {
  runner: 'local',
  port: 4723,
  path: '/',
  exclude: [],
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: headless
          ? sharedArgs.concat('--window-size=1920,1080')
          : ['--window-size=1920,1080'],
      },
    },
  ],
  services: service,
}

Object.assign(config, localConfig)
exports.config = config
