import { openModal } from '../../common/slack-repository'
import { generateBlocks } from './generate-blocks'

export async function addTaskButton(triggerId: string, view: any, generateSlackBlocks: Function = generateBlocks) {
  const blocks = generateSlackBlocks()
  const botToken = process.env.BOT_TOKEN

  if (!botToken) {
    throw new Error('Bot token is required')
  }

  const todos = view.blocks[3].accessory ? view.blocks[3].accessory.options : []
  blocks.private_metadata = JSON.stringify(todos)

  const result = await openModal(
    botToken,
    triggerId,
    blocks
  )
  return result
}
