import * as types from './mutation-types'

const mutations = {
  updateName (state, payload) {
    state.name = payload
  },
  populationData (state, payload) {
    state.population = payload
  }
}

export default mutations;