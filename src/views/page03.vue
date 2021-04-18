<template>
  <div id="app">
    <MyHeader></MyHeader>
    <div id="main_container">
      <div class="main_header">
        <div class="step_icon">STEP3</div>
        <p class="header_text"><font-awesome-icon icon="file-alt" /> ご相談内容をご記入ください</p>
      </div>
      <div class="main_body">
        <QuestionFreetext></QuestionFreetext>
      </div>
    </div>
    <div class="center_box">
      <router-link to="/page02"><div class="btn_fl"><font-awesome-icon icon="angle-left" />  前へ戻る</div></router-link>
      <router-link to="/"><div class="btn_fr">次へ進む  <font-awesome-icon icon="angle-right" /></div></router-link>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/my_header";
import QuestionFreetext from "@/components/question_freetext";

export default {
  components: {
    MyHeader,
    QuestionFreetext,
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
