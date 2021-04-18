<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style lang="scss">
#header{
  width: 100%;
  background-color: #f3eff1;
  border-bottom: solid 1px #5b585a;

  &::after{
    content: "";
    display: block;
    clear: both;
  }
}

#header div.header_left{
  height: 80px;
  float: left;
}

#header div.header_left h1{
  margin-top: 22px;
  font-size: 36px;
  line-height: 36px;
  margin-left: 20px;
  color: #5b585a;
}

#header div.header_right{
  float: right;
}

#header div.header_right ul li{
  font-size: 14px;
  line-height: 14px;
  margin-top: 33px;
  float: left;

  &:last-child{
    border-left: solid 1px #5b585a;
    padding-left: 10px;
    margin-left: 10px;
    margin-right: 20px;
  }
}

#main_container{
  width: 700px;
  margin: 100px auto 30px auto;
  border: solid 1px #23a2a4;
  border-radius: 5px;
}

#main_container .main_header{
  height: 40px;
  background-color: #d2f0f1;
  border-bottom: solid 1px #23a2a4;
}

#main_container .main_header .step_icon{
  float:left;
  border-radius: 2px;
  background-color: #2c8dd8;
  color: #fff;
  font-size: 12px;
  padding: 4px 6px;
}

#main_container .main_header p.header_text{
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  padding-top: 12px;
  color: #444043;
  }

  #main_container .main_body{
    padding: 20px;
  }

  #main_container .questions{
    margin-bottom: 40px;
  }

  #main_container .questions:last-child{
    margin-bottom: 0;
  }

  #main_container .question_title{
    margin-left: 15px;
    margin-bottom: 20px;
    color: #1e547c;
    font-size: 16px;
  }

  #main_container .question_answer select{
    padding: 8px 20px;
    border: solid #d7d6d7 1px;
    border-radius: 3px;
    box-sizing: border-box;

    &:focus{
      border: solid #4ed6f5 1px;
    }
  }

  #main_container .question_answer input{
    text-indent: 3em;
  }

.input_line{
  padding-left: 2em;;
}  

.btn{
  background-color: #04d2b7;
  width: 120px;
  text-align: center;
  padding: 10px 0;
  margin: 0 auto;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    opacity: 0.8;
  }
}
</style>
