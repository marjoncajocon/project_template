<script setup>
import { ref } from 'vue';

  const test = ref("marjoncajo");

  const testfn = () => {
    test.value = "marjon cajocon";
  };
</script>

<template>
  here is the template of the loginfdsfa

  <div class="w3-card" style="padding: 20px;">
    <i class="fa fa-plus"></i>
    <input type="text" v-model="test" class="form-control" />

    <button class="btn btn-success" @click="testfn">
      <i class="fa fa-sign-in"></i> {{ test }}
    </button>
  </div>
</template>

<style scoped>
</style>