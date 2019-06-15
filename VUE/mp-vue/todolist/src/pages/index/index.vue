<template>
  <div>
    <swiper
      :indicator-dots="false"
      :autoplay="true"
      :interval="5000"
      :duration="1000"
    >
      <block v-for="(img, i) in imgUrls" :key="i">
        <swiper-item>
          <img :src="img" class="slide-image" width="355" height="150">
        </swiper-item>
      </block>
    </swiper>

    <input type="text" v-model="mytodo" placeholder="please input">
    <button @click="addTodo">添加一条</button>
    <button @click="clearTodo">清除</button>
    <ul class="todos">
      <li
        v-for="(todo, i) in todos"
        :key="i"
        :class="{'done': todo.done}"
        @click="toggle(i)"
      >{{todo.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { text: "吃饭", done: false },
        { text: "睡觉", done: false },
        { text: "吃鸡", done: false }
      ],
      mytodo: "",
      imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ]
    };
  },
  methods: {
    toggle(i) {
      // this.todos[i].done = !this.todos[i].done
      let todos = this.todos.slice(0);
      todos[i].done = !todos[i].done;
      this.todos = todos;
    },
    addTodo() {
      if (!this.mytodo) return;
      this.todos.push({
        text: this.mytodo,
        done: false
      });
    },
    clearTodo() {
      this.todos = this.todos.filter(todo => !todo.done);
    }
  },
  watch: {
    todos: function(todos) {
      wx.setStorageSync("todos", todos);
    }
  },
  created() {
    this.todos = wx.getStorageSync("todos") || [];
  }
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
