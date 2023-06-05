import { userAuthenticate, userRemoveAuthentication } from 'redux/userSlice'
import { store } from '../store'
import { addTask, removeTask } from 'redux/tasksSlice'

describe('User redux state tests', () => {
  it('IsAuthenticated initial value should be false', () => {
    const state = store.getState().userSlice

    expect(state.isAuthenticated).toBe(false)
  })
  it('Should be able to authenticate the user', () => {
    store.dispatch(userAuthenticate())

    const state = store.getState().userSlice

    expect(state.isAuthenticated).toBe(true)
  })
  it('Should be able to remove authentication of the user', () => {
    store.dispatch(userAuthenticate())

    let state = store.getState().userSlice

    expect(state.isAuthenticated).toBe(true)

    store.dispatch(userRemoveAuthentication())
    state = store.getState().userSlice
    expect(state.isAuthenticated).toBe(false)
  })
})

describe('Tasks redux state tests', () => {
  // In a real life application, the initial value would be 0.
  it('Initially there should be three tasks', () => {
    const state = store.getState().taskSlice

    expect(state.length).toBe(3)
  })
  it('Should be able to add task', () => {
    store.dispatch(addTask({ name: 'mocked name', id: 'mockId' }))

    const state = store.getState().taskSlice

    expect(state.length).toBe(4)
    expect(state[3].id).toBe('mockId')
  })
  it('Should be able to remove task', () => {
    store.dispatch(removeTask('abc'))

    const state = store.getState().taskSlice
    expect(state.length).toBe(3)
    expect(state[0].id).toBe('abcd')
  })
})
