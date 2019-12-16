import CustomerService from '@/services/CustomerService.js';

const actions = {
  async getPopulationData ({commit}) {
    try {
      const response = await CustomerService.getPopulationData()

      commit('populationData', response.data[1])

    } catch (e) {
      console.log(e)
    }
  }
}

export default actions