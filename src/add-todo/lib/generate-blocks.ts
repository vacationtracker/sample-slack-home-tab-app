export function generateBlocks() {
  return {
    type: 'modal',
    title: {
      type: 'plain_text',
      text: 'Add a new todo',
      emoji: true,
    },
    submit: {
      type: 'plain_text',
      text: 'Add',
      emoji: true,
    },
    close: {
      type: 'plain_text',
      text: 'Cancel',
      emoji: true,
    },
    blocks: [
      {
        type: 'input',
        element: {
          type: 'plain_text_input',
        },
        label: {
          type: 'plain_text',
          text: 'What your next task? 📝',
          emoji: true,
        },
      },
    ],
  }
}
