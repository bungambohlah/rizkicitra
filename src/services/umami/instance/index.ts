// server code and client code should be separated, otherwise module not found :)
// dunnow why, but you might want to
// @see this: https://nextjs.org/docs/messages/module-not-found#the-module-youre-trying-to-import-uses-nodejs-specific-modules
export { default as umamiClient } from './umamiClient'
export { default as umamiServer } from './umamiServer'
