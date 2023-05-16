const readline = require('readline')
const fs = require('fs')
const eta = require('eta')
const md5 = require('md5')
let files = []

async function processLineByLine() {
    const fileStream = fs.createReadStream(__dirname + '/desculpas.txt')

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    })

    for await (const line of rl) {
        if (!line) {
            continue
        }
        const message_hash = md5(line)
        const template = await eta.renderFile(__dirname + '/index.html', {
            message: line,
            message_hash
        })

        files.push(`/permalink/${message_hash}`)
        fs.writeFileSync(__dirname + `/../build/permalink/${message_hash}.html`, template)
        fs.writeFileSync(__dirname + `/../build/permalink/${message_hash}.txt`, line)
        fs.writeFileSync(__dirname + `/../build/permalink/${message_hash}.json`, JSON.stringify({
            hash: message_hash,
            message: line,
            permalink: `https://desculpe.me/permalink/${message_hash}`
        }))
    }

    fs.writeFileSync(__dirname + '/../functions/messages.js', "module.exports = " + JSON.stringify(files))
}

processLineByLine()
