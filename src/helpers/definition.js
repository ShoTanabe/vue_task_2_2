const yearOptions = [];
const monthOptions = [];
const dayOptions = [];

let thisYear = new Date();
const firstYear = thisYear.getFullYear() - 60;
for(let i = 0; i <= 40; i++) {
  let westernYear = firstYear + i;
  let japaneseYear = westernYear - 1925;
  if(westernYear <= 1988) {
    yearOptions.push(`${westernYear}（昭和${japaneseYear}）`);
  }
  else if(1989 <= westernYear <= 2018) {
    yearOptions.push(`${westernYear}（平成${japaneseYear - 63}）`);
  }
  else {
    yearOptions.push(`${westernYear}（令和${japaneseYear - 93}）`);
  }
}
for(let m = 1; m <= 12; m++) {
  monthOptions.push(m);
}
for(let n = 1; n <= 31; n++) {
  dayOptions.push(n);
}


export {yearOptions, monthOptions, dayOptions};