const list = require('../country/state/city/index.js')
const firstNames = require('../utilities/utils/index.js')
function getPeopleInCity(list) {
  return firstNames(list)
}
module.exports = getPeopleInCity(list);