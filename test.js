const {LokaliseApi} = require('@lokalise/node-api');

async function run() {
    const lokalise = new LokaliseApi({
        apiKey: '92e4b90b07b6a481532676593f497bd1abe37fa1'
    })
    
    const untranslatedKeys = await lokalise.keys().list({
        project_id: '4910057061090bdfd312c9.84691990',
        filter_key_ids: '213240072',
        include_screenshots: 0,
        include_comments: 0,
        include_translations: 1
    })

    console.log(JSON.stringify(untranslatedKeys))
}

run()



