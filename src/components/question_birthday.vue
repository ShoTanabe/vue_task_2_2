<template>
    <div class="questions">
      <p class="question_title">-生年月日-</p>
      <div class="question_answer">
        <select name="year" id="select_year">
          <option hidden>-</option>
          <option
          v-for="(yearOption, index) in yearOptions"
          :value="yearOption"
          :key="index">{{ yearOption }}</option>
        </select> 年
        <select name="month" id="select_month">
          <option hidden>-</option>
          <option
          v-for="(monthOption, index) in monthOptions"
          :value="monthOption"
          :key="index">{{ monthOption }}</option>
        </select> 月
        <select name="day" id="select_day">
          <option hidden>-</option>
          <option
          v-for="(dayOption, index) in dayOptions"
          :value="dayOption"
          :key="index">{{ dayOption }}</option>
        </select> 日
      </div>
    </div>
</template>

<script>

export default {
  data: function(){
    return{
      yearOptions: [],
      monthOptions: [],
      dayOptions: [],
    }
  },
  created(){
    let thisYear = new Date();
    const firstYear = thisYear.getFullYear() - 60;
    for(let i = 0; i <= 40; i++){
      let westernYear = firstYear + i;
      let japaneseYear = westernYear - 1925;
      if(westernYear <= 1988){
      this.yearOptions.push(`${westernYear} （昭和${japaneseYear}）`);
      }
      else{
      this.yearOptions.push(`${firstYear + i} （平成${japaneseYear - 63}）`);
      }
    }
    for(let m = 1; m <= 12; m++){
      this.monthOptions.push(m);
    }
    for(let n = 1; n <= 31; n++){
      this.dayOptions.push(n);
    }
  }
}
</script>
