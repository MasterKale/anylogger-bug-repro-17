import anylogger from 'anylogger';
import { isConstructorDeclaration } from 'typescript';

(anylogger as any).justTesting = 'Let\'s try something';
const log = anylogger('myLib');
console.info('anylogger.justTesting=', (anylogger as any).justTesting)
export default log;
