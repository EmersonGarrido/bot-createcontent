import { Router } from 'express'
import axios from 'axios'
import instagramUser from 'instagram-user'
const instagramRoute = Router();

instagramRoute.post('/search', async (request, response) => {
  const { user } = request.body

  const result = await instagramUser(`${user}`);
  
  return response.send(result)
  
})

export default instagramRoute