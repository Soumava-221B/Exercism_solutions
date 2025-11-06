//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, week, weekday) => {
  const jsMonth = month - 1;

  const weekdays = {
    Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3,
    Thursday: 4, Friday: 5, Saturday: 6,
  };

  const targetWeekday = weekdays[weekday];
  const getNextWeekday = (startDay) => {
    const date = new Date(year, jsMonth, startDay);
    const diff = (targetWeekday - date.getDay() + 7) % 7;
    return startDay + diff;
  };

  if (week === 'teenth') {
    return new Date(year, jsMonth, getNextWeekday(13));
  }

  if (week === 'last') {
    const lastDay = new Date(year, jsMonth + 1, 0).getDate();
    const date = new Date(year, jsMonth, lastDay);
    const diff = (date.getDay() - targetWeekday + 7) % 7;
    return new Date(year, jsMonth, lastDay - diff);
  }

  const weekNumbers = { first: 1, second: 2, third: 3, fourth: 4 };
  const offset = (weekNumbers[week] - 1) * 7;
  return new Date(year, jsMonth, getNextWeekday(1 + offset));
};
