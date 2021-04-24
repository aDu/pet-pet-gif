const path = require('path')
const _ = require('lodash')

const GIFEncoder = require('gifencoder')
const Canvas = require('canvas')

const FRAMES = 10

const petGifCache = []

const defaultOptions = {
    resolution: 128,
    delay: 20,
    backgroundColor: null,
}

module.exports = async (avatarURL, options = {}) => {
    options = _.defaults(options, defaultOptions) // Fill in the default option values

    // Create GIF encoder
    const encoder = new GIFEncoder(options.resolution, options.resolution)

    encoder.start()
    encoder.setRepeat(0)
    encoder.setDelay(options.delay)
    encoder.setTransparent()

    // Create canvas and its context
    const canvas = Canvas.createCanvas(options.resolution, options.resolution)
    const ctx = canvas.getContext('2d')

    const avatar = await Canvas.loadImage(avatarURL)

    // Loop and create each frame
    for (let i = 0; i < FRAMES; i++) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        if (options.backgroundColor) {
            ctx.fillStyle = options.backgroundColor
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        }

        const j = i < FRAMES / 2 ? i : FRAMES - i

        const width = 0.8 + j * 0.02
        const height = 0.8 - j * 0.05
        const offsetX = (1 - width) * 0.5 + 0.1
        const offsetY = (1 - height) - 0.08

        if (i == petGifCache.length) petGifCache.push(await Canvas.loadImage(path.resolve(__dirname, `img/pet${i}.gif`)))

        ctx.drawImage(avatar, options.resolution * offsetX, options.resolution * offsetY, options.resolution * width, options.resolution * height)
        ctx.drawImage(petGifCache[i], 0, 0, options.resolution, options.resolution)

        encoder.addFrame(ctx)
    }

    encoder.finish()
    return encoder.out.getData()
}