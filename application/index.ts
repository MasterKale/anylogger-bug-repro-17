import anylogger from 'anylogger';
import 'anylogger-console';
import { log } from 'myLib';

// The instance of anylogger in myLib doesn't seem to be affected by any adapters
log('hello from myLib log in application');

// To demonstrate `anylogger-console` working as expected from application
const applog = anylogger('application');
applog('hello directly from applog in application');
