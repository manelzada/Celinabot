import { event, Events } from '../utils/index.js'

export default event(Events.ClientReady, ({ log }, client) => {
  return log(`Bot iniciado como ${client.user.username}!`);
});