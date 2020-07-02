<template>
  <div class="todo-item">
    <input type="checkbox" :checked="todo.completed" @change="editTodo" />
    <div class="todo-item-title">{{ todo.text }}</div>
    <button class="todo-item-button__remove" @click="removeTodo(todo.id)">x</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { TodoItem } from '@/types/index'

type Props = {
  todo: TodoItem
}

export default defineComponent({
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      require: true
    }
  },
  setup(props) {
    const store = useStore()
    const removeTodo = (id: number) => {
      store.commit('removeTodo', id)
    }
    const editTodo = () => {
      store.commit(
        'editTodo',
        Object.assign({}, props.todo, {
          completed: !props.todo.completed
        })
      )
    }
    return {
      removeTodo,
      editTodo
    }
  }
})
</script>

<style>
.todo-item {
  max-width: 300px;
  margin: 8px auto;
  display: flex;
  align-items: center;
}
.todo-item-title {
  flex: 1;
  text-align: left;
  padding: 0 8px;
}

.todo-item-button__remove {
  font-size: 12px;
  padding: 0 4px;
}
</style>
