<template>
  <div id="app">
    <MyHeader></MyHeader>
    <div id="main_container">
      <div class="main_header">
        <div class="step_icon">STEP1</div>
        <p class="header_text"><font-awesome-icon icon="address-card" /> お客様の情報を入力してください</p>
      </div>
      <div class="main_body">
        <QuestionGender></QuestionGender>
        <QuestionBirthday></QuestionBirthday>
      </div>
    </div>
    <router-link to="/page02"><div class="btn">次へ進む  <font-awesome-icon icon="angle-right" /></div></router-link>
  </div>
</template>

<script>
import MyHeader from "@/components/my_header";
import QuestionGender from "@/components/question_gender";
import QuestionBirthday from "@/components/question_birthday";

export default {
  components: {
    MyHeader,
    QuestionGender,
    QuestionBirthday,
  }
}
</script>

<style lang="scss">

</style>
