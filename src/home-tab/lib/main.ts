import { publishViews } from '../../common/slack-repository'
import { generateBlocks } from './generate-blocks'

export async function slackAppHomeTab(userId: string, generateSlackBlocks: Function = generateBlocks) {
  const blocks = generateSlackBlocks(userId)
  const botToken = process.env.BOT_TOKEN

  if (!botToken) {
    throw new Error('Bot token is required')
  }

  const result = await publishViews(
    botToken,
    userId,
    blocks
  )
  return result
}
