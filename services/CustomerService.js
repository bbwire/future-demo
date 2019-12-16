import Api from './Api'

export default {
  getCustomers () {
    return Api().get('/custmers')
  },
  getPopulationData () {
    return Api().get('http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?date=2018&format=json&per_page=300&mrv=1')
  }
}
