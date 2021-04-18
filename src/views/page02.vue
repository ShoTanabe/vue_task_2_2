<template>
  <div id="app">
    <MyHeader></MyHeader>
    <div id="main_container">
      <div class="main_header">
        <div class="step_icon">STEP2</div>
        <p class="header_text"><font-awesome-icon icon="chalkboard-teacher" /> 以下にお答えください</p>
      </div>
      <div class="main_body">
        <QuestionInsurance></QuestionInsurance>
      </div>
    </div>
    <div class="center_box">
      <router-link to="/"><div class="btn_fl"><font-awesome-icon icon="angle-left" />  前へ戻る</div></router-link>
      <router-link to="/page03"><div class="btn_fr">次へ進む  <font-awesome-icon icon="angle-right" /></div></router-link>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/my_header";
import QuestionInsurance from "@/components/question_insurance";

export default {
  components: {
    MyHeader,
    QuestionInsurance,
  }
}
</script>

<style lang="scss">
  .center_box{
    width: 270px;
    margin: 0 auto;

    &::after{
      content: "";
      display: block;
      clear: both;
    }
  }

  .btn_fl{
    background-color: #04d2b7;
    width: 120px;
    text-align: center;
    padding: 10px 0;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    float: left;

    &:hover{
      opacity: 0.8;
    }
  }

  .btn_fr{
    background-color: #04d2b7;
    width: 120px;
    text-align: center;
    padding: 10px 0;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    float: right;

    &:hover{
      opacity: 0.8;
    }
  }
</style>
