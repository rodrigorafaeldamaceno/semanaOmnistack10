const routes = require('express').Router()
const devController = require('../controllers/DevController')
const searchController = require('../controllers/SearchController')


routes.get('/', (req, res) => {
  return res.json({ status: 'online' })
})


routes.post('/devs', devController.store)
routes.get('/devs', devController.index)


routes.get('/search', searchController.index)
module.exports = routes