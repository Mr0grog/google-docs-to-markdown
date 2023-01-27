import { convertToMarkdown } from './lib/convert.js';
import jsdom from 'jsdom';

global.DOMParser = new jsdom.JSDOM().window.DOMParser;
global.convertToMarkdown = convertToMarkdown;