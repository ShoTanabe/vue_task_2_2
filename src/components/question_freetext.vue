<template>
  <div id="textarea">
    <div class="questions">
      <p class="question_title"></p>
      <div class="question_answer">
        <textarea name="kanso" rows="15" cols="71"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      firstText: 'ここに感想を記入してください。'
    }
  },
  methods: {
    textClear: function(){

    }
  }
}
</script>

<style>
  textarea{
    border: #999999 solid 1px;
    padding: 8px;
  }
</style>
