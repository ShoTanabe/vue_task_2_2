const yearOptions = [];
const monthOptions = [];
const dayOptions = [];

let thisYear = new Date();
const firstYear = thisYear.getFullYear() - 60;
for(let i = 0; i <= 40; i++) {
  let westernYear = firstYear + i;
  let japaneseYear = westernYear - 1925;
  if(westernYear <= 1988) {
  this.yearOptions.push(`${westernYear} （昭和${japaneseYear}）`);
  }
  else if(1989 <= westernYear <= 2018) {
    if(westernYear = 1989) {
      this.yearOptions.push(`${westernYear} （昭和64/平成元）`);
      }
    else {
      this.yearOptions.push(`${westernYear} （平成${japaneseYear - 63}）`);
      }
  }
  else {
    if(westernYear = 2019) {
      this.yearOptions.push(`${westernYear} （平成31/令和元）`);
      }
    else {
      this.yearOptions.push(`${westernYear} （令和${japaneseYear - 93}）`);
      }
  }
}
for(let m = 1; m <= 12; m++) {
  this.monthOptions.push(m);
}
for(let n = 1; n <= 31; n++) {
  this.dayOptions.push(n);
}

export {yearOptions, monthOptions, dayOptions}
