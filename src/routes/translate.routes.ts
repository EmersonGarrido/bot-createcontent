import { Router } from 'express';
const TranslaterRoute = Router();

import TranslateText from '../services/translate';
import getSocialMediaToday from '../services/getSocialMediaToday';

TranslaterRoute.post('/', async (request, response) => {
  const { type } = request.body;
  const { url } = request.body;

  const result = await (async () => {
    
    if(type === 'socialmediatoday'){
      const data = await getSocialMediaToday(url)
      return data
    }else{
      return
    }

  })();

  const translateTitle = await TranslateText(result.title);
  const translateText = await TranslateText(result.text);

  return response.json({
    title : translateTitle,
    text : translateText,
  })

})

export default TranslaterRoute
