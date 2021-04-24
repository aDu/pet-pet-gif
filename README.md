# pet-pet-gif

https://www.npmjs.com/package/pet-pet-gif

Given a square avatar, generate a petting gif (known as "petpet" or "pet the").

The avatar will bounce up and down to simulate the petting.

Inspired by benisland (https://benisland.neocities.org/petpet/).

Further meme info: https://knowyourmeme.com/memes/pet-the-x-petthe-emotes

## Demo

![Input](/example/input.png) → ![Output](/example/output.gif)

You can also try it out on https://hellist.ru/discord (with the `;pet` command).

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

## Options
You can optionally specify the `options` argument (each field in the `options` field is optional).

```
let animatedGif = await petPetGif(param.member.avatarURL, {
    resolution: 128, // The width (or height) of the generated gif
    delay: 20, // Delay between each frame in milliseconds. Defaults to 20.
    backgroundColor: "red", // Other values could be the string "rgba(123, 233, 0, 0.5)". Defaults to null - i.e. transparent.
})
```


## Feature requests

Feel free to submit feature requests by [clicking here](https://github.com/aDu/pet-pet-gif/issues/new?assignees=aDu&labels=&template=feature_request.md&title=i+has+big+idea+for+u%2C+pls+implement) - I'd probably be happy to implement them!

Or make a pull request :).
