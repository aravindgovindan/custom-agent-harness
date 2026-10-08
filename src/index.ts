import 'dotenv/config';

import {runTui} from './tui/index';
import { callModel } from './openrouter.ts';
import type { Message } from './types.ts';

async function respond(message: string): Promise<string> {
  
  const messages: Message[] = [{
    role: 'system',
    content: 'You are a helpful AI coding assistant'
  }, {
    role: 'user',
    content: message
  }];

  const assistant = await callModel(messages, []);
  return assistant.content ?? 'No text returned.';

}

runTui(respond);
