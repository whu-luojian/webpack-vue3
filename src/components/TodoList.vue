<template>
  <div style="margin-bottom: 24px">
    <input v-model="text" style="margin-right: 16px; width: 200px;" placeholder="请输入" />
    <button @click="addTodo">Add</button>
  </div>
  <div class="todo-list">
    <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo"> </TodoItem>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import TodoItem from './TodoItem.vue'

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem
  },
  setup() {
    const store = useStore()
    const todoList = computed(() => store.state.todoList)
    const text = ref('')

    function addTodo() {
      store.commit('addTodo', {
        id: Date.now(),
        completed: false,
        text: text.value
      })
    }

    watch(
      todoList,
      val => {
        console.log('todoList更新了', val)
      },
      {
        deep: true
      }
    )

    return {
      text,
      todoList,
      addTodo
    }
  }
})
</script>
