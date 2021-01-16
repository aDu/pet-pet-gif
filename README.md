# pet-pet-gif
Given a square avatar, generate a petting gif (known as "petpet" or "pet the").

The avatar will bounce up and down to simulate the petting.

Inspired by benisland (https://benisland.neocities.org/petpet/).

Further meme info: https://knowyourmeme.com/memes/pet-the-x-petthe-emotes

## Demo

![Input](/example/input.png) → ![Output](/example/output.gif)

## Usage

https://www.npmjs.com/package/pet-pet-gif

`npm i -S pet-pet-gif`

Example usage for a Discord bot (using [Eris](https://www.npmjs.com/package/eris) in the example but should be similar for other Discord API wrappers).

```

const petPetGif = require('pet-pet-gif')

...

async (param) => {
	let animatedGif = await petPetGif(param.member.avatarURL)
	bot.createMessage(param.channel.id,
        {
          "embed": {
            "image": {
              "url": 'attachment://pet.gif',
            }
          }
        },
        {
            file: animatedGif,
            name: 'pet.gif'
        })
}

```