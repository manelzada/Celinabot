import { Event } from '../utils/index.js'
import ready from './message.js'
import message from './ready.js'

export default [
  ready,
  message,
] as Event[];