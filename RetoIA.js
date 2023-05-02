// MIO

function eveNT(title, date) {
  let count = 0;
  for (let i = 0; i < date.length; i++) {
    const dates = new Date(`${date[i]}`);
    if (dates.getDay() !== 0 && dates.getDay() !== 6) {
      count++;
    }
  }
  return count * 2;
}

// IA


function countExtraHours(year, events) {
    let count = 0;
    for (let i = 0; i < events.length; i++) {
      const eventDate = new Date(events[i].date);
      if (eventDate.getDay() !== 0 && eventDate.getDay() !== 6) {
        count += events[i].duration;
      }
    }
    return count;
  }
  
  const year = 2023;
  const events = [
    { title: "Evento 1", date: "2023/05/25", duration: 2 },
    { title: "Evento 2", date: "2023/05/26", duration: 1 },
    { title: "Evento 3", date: "2023/05/27", duration: 3 },
    { title: "Evento 4", date: "2023/05/28", duration: 4 },
  ];
  
  console.log(countExtraHours(year, events)); // output: 3
  