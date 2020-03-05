// This should be dynamic :)
export function generateBlocks(userId: string) {
  return {
    type: 'home',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `Hey <@${userId}>, \n\n How are you feeling today?`,
        },
        accessory: {
          type: 'image',
          image_url: 'https://cdn.icon-icons.com/icons2/1526/PNG/512/checklist_106575.png',
          alt_text: 'todo',
        },
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Add todo',
              emoji: true,
            },
            value: 'add_todo',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'About',
              emoji: true,
            },
            value: 'about_me',
          },
        ],
      },
      {
        type: 'divider',
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*Todos:*',
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: 'Built with 💖, by <https://vacationtracker.io|Vacation Tracker team>.',
          },
        ],
      },
    ],
  }
}
