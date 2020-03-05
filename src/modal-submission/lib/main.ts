import { publishViews } from '../../common/slack-repository'
import { generateBlocks } from './generate-blocks'

export async function addTodo(userId: string, view: any, generateSlackBlocks: Function = generateBlocks) {
  // const view = oldBlocks
  // view.blocks[3]
  const todo = view.state.values[view.blocks[0].block_id][view.blocks[0].element.action_id].value
  const blocks = generateSlackBlocks(userId, todo, JSON.parse(view.private_metadata))
  const botToken = process.env.BOT_TOKEN

  if (!botToken) {
    throw new Error('Bot token is required')
  }

  const result = await publishViews(
    botToken,
    userId,
    blocks
  )
  console.log(result)
  return result
}
