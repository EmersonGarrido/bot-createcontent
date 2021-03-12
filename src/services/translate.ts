const { Translate } = require('@google-cloud/translate').v2;

export default async function TranslateText(text: string) {

  const translate = new Translate({
    projectId: process.env.GOOGLE_ID,
    key: process.env.GOOGLE_KEY,
  });

  const target = 'pt-br'

  let [translations] = await translate.translate(text, target);

  translations = Array.isArray(translations) ? translations : [translations];

  var textTranslate = [];
  translations.forEach((translation, i) => {
    const translate = translation.replace(/\r?\n/g, ' ').trim()
    textTranslate.push(translate);
  });

  return textTranslate[0]
}