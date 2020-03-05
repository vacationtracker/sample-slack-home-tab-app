// Allow CloudWatch to read source maps
import 'source-map-support/register'

import { ScheduledEvent } from 'aws-lambda'
import { slackAppHomeTab } from './lib/main'

export async function handler(event: ScheduledEvent) {
  console.log(event)
  return await slackAppHomeTab(event.detail.body.event.user)
}
