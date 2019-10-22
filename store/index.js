export const state = () => ({
    token: null,
    notes: []
   })
   
   export const mutations = {
     setToken(state, token) {
       state.token = token
     },
     setNotes(state, notes){
        state.notes = notes
     }
   }
   export const actions = {
     setToken({ commit }, token) {
       commit('setToken', token)
     },
     deleteToken({ commit }) {
       commit('setToken', null)
     },
     async fetchNotes({commit}){
        const notes = await this.$axios.$get('/v1/note')
        commit('setNotes', {notes})
     }
   }