<template>
  <div class="questions">
    <p class="question_title">-性別-</p>
    <div class="question_answer">
      <template v-for="(option, index) in options">
        <label :key= "index">
          <input type="radio" name="gender"
          :value="option">{{ option }}
        </label>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  data: function(){
    return{
      options: ['男性','女性'],
    }
  }
}
</script>

<style>
input{
  width: 4%;
  }

</style>
