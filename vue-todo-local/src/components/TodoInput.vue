<template>
  <div class="inputBox shadow" >
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer"  @click="addTodo">
         <i class="fas fa-plus addBtn" ></i>
    </span>
    <AlertModal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>경고
          <i class="closeModalBtn fa-solid fa-xmark" @click="showModal = false"></i>
        </h3>
      </template>
      <template #body>
        <h3>아무것도 입력하지 않았음</h3>
      </template>
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from "@/components/common/AlertModal.vue";
import {mapMutations} from "vuex";
export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    ...mapMutations(['addOneItem']),
    addTodo() {
      if(this.newTodoItem !== ''){
        // this.$emit('addTodoItem', this.newTodoItem)
        // this.$store.commit('addOneItem', this.newTodoItem);
        this.addOneItem(this.newTodoItem)
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  },
  components: {
    AlertModal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}

</style>