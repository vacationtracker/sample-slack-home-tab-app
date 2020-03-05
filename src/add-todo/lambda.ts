// Allow CloudWatch to read source maps
import 'source-map-support/register'

import { ScheduledEvent } from 'aws-lambda'
import { addTaskButton } from './lib/main'

export async function handler(event: ScheduledEvent) {
  console.log(JSON.stringify(event, null, 2))

  return await addTaskButton(event.detail.body.payload.trigger_id, event.detail.body.payload.view)
}
