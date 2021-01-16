const fs = require('fs')
const path = require('path')

const GIFEncoder = require('gifencoder')
const Canvas = require('canvas')

let FRAMES = 10
let RESOLUTION = 128
let DELAY = 20

let petGifCache = []

module.exports = async (avatarURL) => {
    const encoder = new GIFEncoder(RESOLUTION, RESOLUTION)

    encoder.start()
    encoder.setRepeat(0)
    encoder.setDelay(DELAY)

    const canvas = Canvas.createCanvas(RESOLUTION, RESOLUTION)
    const ctx = canvas.getContext('2d')

    const avatar = await Canvas.loadImage(avatarURL)

    for (let i = 0; i < FRAMES; i++) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        let j = i < FRAMES / 2 ? i : FRAMES - i

        let width = 0.8 + j * 0.02
        let height = 0.8 - j * 0.05
        let offsetX = (1 - width) * 0.5 + 0.1
        let offsetY = (1 - height) - 0.08

        if (i == petGifCache.length) petGifCache.push(await Canvas.loadImage(path.resolve(__dirname, `img/pet${i}.gif`)))

        ctx.drawImage(avatar, RESOLUTION * offsetX, RESOLUTION * offsetY, RESOLUTION * width, RESOLUTION * height)
        ctx.drawImage(petGifCache[i], 0, 0, RESOLUTION, RESOLUTION)
        encoder.addFrame(ctx)
    }

    encoder.finish()
    return encoder.out.getData()
}