// Allow CloudWatch to read source maps
import 'source-map-support/register'

import { ScheduledEvent } from 'aws-lambda'
import { addTodo } from './lib/main'

export async function handler(event: ScheduledEvent) {
  console.log(JSON.stringify(event, null, 2))
  return await addTodo(event.detail.body.payload.user.id, event.detail.body.payload.view)
}
