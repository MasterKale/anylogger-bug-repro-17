import anylogger from 'anylogger';
import 'anylogger-console';
import { log } from 'myLib';

// The instance of anylogger in myLib doesn't seem to be affected by any adapters
log('hello from myLib log in application');


// To demonstrate `anylogger-console` working as expected from application
const applog = anylogger('application');
applog('hello directly from applog in application');

applog('log.name=', log.name)
applog('log.name in anylogger', log.name in anylogger)
applog('anylogger.justTesting=', (anylogger as any).justTesting)
