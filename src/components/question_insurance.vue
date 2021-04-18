<template>
  <div>
    <div class="questions">
      <p class="question_title">現在、生命保険に加入されていますか？</p>
      <div class="question_answer">
        <div class="input_line">
          <template v-for="(option, index) in options">
            <label :key= "index">
              <input type="radio" name="insurance"
              @input="showQuestion2"
              :value="option">{{ option }}
            </label>
          </template>
        </div>
      </div>
    </div>
    <div class="questions" v-if="show">
      <p class="question_title">現在、入院中ですか。または、最近3か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
      <div class="question_answer">
        <div class="input_line">
          <template v-for="(option, index) in options">
            <label :key= "index">
              <input type="radio" name="hospitalization"
              @input="showQuestion3"
              :value="option">{{ option }}
            </label>
          </template>
        </div>
      </div>
    </div>
    <div class="questions" v-if="show2">
      <p class="question_title">過去５年以内に、病気やけがで、手術を受けたこと、または、継続して７日以上の入院をしたことがありますか？</p>
      <div class="question_answer">
        <div class="input_line">
        <template v-for="(option, index) in options">
          <label :key= "index">
            <input type="radio" name="surgery"
            :value="option">{{ option }}
          </label>
        </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function(){
    return{
      show: false,
      show2: false,
      options: ['はい','いいえ'],
    }
  },
  methods:{
    showQuestion2: function(){
      this.show = true;
    },
    showQuestion3: function(){
      this.show2 = true;
    }
  }
}
</script>

<style>
input{
  width: 4%;
  }

</style>
