const {Translate} = require('@google-cloud/translate').v2;
require('dotenv').config();

// Your credentials
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// Configuration for the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const detectLanguage = async (text) => {

    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}

//  detectLanguage('Oggi è lunedì')
//     .then((res) => {
//         console.log(res);
//      })
//      .catch((err) => {
//         console.log(error);
//      });


const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};



 translateText("Morning","id")
     .then((res) => {
         console.log(res);
     })
     .catch((err) => {
         console.log(err);
     });
    
async function listLanguages() {
    // Lists available translation language with their names in English (the default).
    const [languages] = await translate.getLanguages();
  
    console.log('Languages:');
    languages.forEach(language => console.log(language));
}

//listLanguages();