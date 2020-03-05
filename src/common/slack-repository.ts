import { post } from 'minimal-request-promise'

export async function publishViews(token: string, userId: string, blocks: any, httpPost: Function = post) {
  const params = {
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      user_id: userId,
      view: blocks,
    }),
  }
  return await httpPost('https://slack.com/api/views.publish', params).catch(console.log)
}

export async function openModal(token: string, triggerId: string, blocks: any, httpPost: Function = post) {
  const params = {
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      token,
      trigger_id: triggerId,
      view: blocks,
    }),
  }
  console.log(JSON.stringify(params, null, 2))
  return await httpPost('https://slack.com/api/views.open', params)
}
