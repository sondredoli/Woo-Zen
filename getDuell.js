const ftp = require("basic-ftp") 
const config = require("./config");
// ESM: import * as ftp from "basic-ftp"

example()

async function example() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: config.duellHost,
            user: config.duellUser,
            password: config.duellPass
        })
        console.log(await client.list())
        await client.downloadTo("./Duell/ic_CSV.csv", "ic_CSV.csv")
    }
    catch(err) {
        console.log(err)
    }
    client.close()
}