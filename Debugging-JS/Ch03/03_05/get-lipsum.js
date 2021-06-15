const readline = require('readline');
const https = require('https');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt for how many paragraphs we want
rl.question('How many paragraphs do you need? ', function getParagraphs(numParagraphs) {
    let paras = parseInt(numParagraphs, 10);

    // Sanitize user input
    if (isNaN(paras) || paras < 0) paras = 2;
    if (paras > 5) paras = 5;

    process.stdout.write('Retrieving ' + paras + ' paragraphs from lipsum.com…\n\n');

    // Retrieve Lorem Ipsum text as JSON from lipsum.com
    https.get('https://lipsum.com/feed/json?what=paras&start=0&amount=' + paras, function processResponse(response) {
        let feedData = '';

        // Callback collects raw response data
        response.on('data', function collectData(data) {
            feedData += data;
        });

        // When the response is completely collected, we have complete data and can act
        response.on('end', function printLipsum() {
            process.stdout.write(feedData);

            process.stdout.write('\n');
        });
    });

    rl.close();
});