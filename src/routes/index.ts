import { Router } from 'express'

import Instagram from './instagram.routes';
import Translate from './translate.routes'

const routes = Router();

routes.use('/instagram', Instagram)
routes.use('/translate', Translate)

export default routes