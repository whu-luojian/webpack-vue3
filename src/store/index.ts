import { createStore, MutationTree } from 'vuex'
import { TodoItem } from '@/types/index'

interface GlobalState {
  todoList: TodoItem[]
}

const state: GlobalState = {
  todoList: [
    {
      id: 1,
      text: 'vite学习',
      completed: false
    },
    {
      id: 2,
      text: 'vue3学习',
      completed: true
    }
  ]
}

const mutations: MutationTree<GlobalState> = {
  addTodo(state, todo: TodoItem) {
    state.todoList.push({ ...todo })
  },
  removeTodo(state, id: number) {
    state.todoList = state.todoList.filter(t => t.id !== id)
  },
  editTodo(state, todo: TodoItem) {
    const index = state.todoList.findIndex(t => t.id === todo.id)
    state.todoList[index] = todo
  }
}

export default createStore({
  state,
  mutations,
  actions: {},
  modules: {}
})
