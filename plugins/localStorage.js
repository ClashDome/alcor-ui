import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'presist_v0.1',
      paths: ['chain.payForUser', 'chain.anchorSession', 'swap.slippage']
    })(store)
  })
}
