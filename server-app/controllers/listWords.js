const fs = require('fs');
const jsonFile = "db/TestData.json";



function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const listWords = (req, res) => {
    try {
        const data = fs.readFileSync(jsonFile, 'utf8');
        const dataAfterParse = JSON.parse(data);
        const adjectives = dataAfterParse.wordList.filter(word => word.pos === 'adjective');
        const adverbs = dataAfterParse.wordList.filter(word => word.pos === 'adverb');
        const nouns = dataAfterParse.wordList.filter(word => word.pos === 'noun');
        const verbs = dataAfterParse.wordList.filter(word => word.pos === 'verb');
        const randomWords = [
            getRandomElement(adjectives),
            getRandomElement(adverbs),
            getRandomElement(nouns),
            getRandomElement(verbs)
        ];
        while (randomWords.length < 10) {
            randomWords.push(getRandomElement(dataAfterParse.wordList));
        }
        return res.status(200).json(randomWords);
    } catch (err) {
        console.error(err);
    }
}


const getRank = (req, res) => {
    const data = fs.readFileSync(jsonFile, 'utf8');
    const dataAfterParse = JSON.parse(data);
    const finalScore = req.body.final_score
    let counter = 0;
    dataAfterParse.scoresList.forEach(element => {
        if (element < finalScore) {
            counter++;
        }
    });
    const rankPercentage = (counter / 30) * 100;
    return res.status(200).json({ rankPercentage: rankPercentage.toFixed(2) });
}

module.exports = {
    listWords,
    getRank
};