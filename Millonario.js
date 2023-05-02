function countHours(year, holidays) {
    let count = 0;
    for (let i = 0; i < holidays.length; i++) {
      const holiday = new Date(`${year}/${holidays[i]}`);
      if (holiday.getDay() !== 0 && holiday.getDay() !== 6) {
        count++;
      }
    }
    return count * 2;
  }
  
  
  const year = 2022;
  const holidays = ['01/06', '04/01', '12/25'];
  console.log(countHours(year, holidays))


  