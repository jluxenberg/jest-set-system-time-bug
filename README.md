## issue

jest.setSystemTime seems to be broken when extraGlobals includes 'Date'

## steps to reproduce

1. check out this repo
2. run "yarn test" -- see that this succeeds
3. run "yarn test-broken" -- see that this fails

"test-broken" simply runs the same test with the jest.config.broken.js config file
