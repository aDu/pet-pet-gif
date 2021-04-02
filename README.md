# pet-pet-gif

https://www.npmjs.com/package/pet-pet-gif

Given a square avatar, generate a petting gif (known as "petpet" or "pet the").

The avatar will bounce up and down to simulate the petting.

Inspired by benisland (https://benisland.neocities.org/petpet/).

Further meme info: https://knowyourmeme.com/memes/pet-the-x-petthe-emotes

## Demo

![Input](/example/input.png) → ![Output](/example/output.gif)

## Usage

`npm i -S pet-pet-gif`

Two examples in one (using [Eris](https://www.npmjs.com/package/eris) in the example but should be similar for other Discord Bot API wrappers).

```
const petPetGif = require('pet-pet-gif')

...

const petCommandExample = async (param) => {
    let animatedGif = await petPetGif(param.member.avatarURL)

    // Example #1: Reply with the image attached
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

    // Example #2: Or you could save it somewhere.
    fs.writeFile('idi_nahui.gif', animatedGif, function (err) {
        console.log('Cyka blyat! An error occurred!')
    })
}
```

## Feature requests

Feel free to submit feature requests on https://github.com/aDu/pet-pet-gif/issues/new - I'd probably be happy to implement them!

Or make a pull request :).
