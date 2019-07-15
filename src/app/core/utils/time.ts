function calculateTimeDifference(isoTime: string): string {
  // Subtract Timezone Offset
  const isoDate = new Date(isoTime);
  const timezoneOffset = 1000 * 60 * isoDate.getTimezoneOffset();
  const milliseconds = isoDate.getTime() - timezoneOffset;

  // Start date values
  const startDate = new Date(milliseconds);
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const startDay = startDate.getDate();
  const startHours = startDate.getHours();
  const startMinutes = startDate.getMinutes();
  const startSeconds = startDate.getSeconds();

  // End date values
  const endDate = new Date(new Date().toString());
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();
  const endDay = endDate.getDate();
  const endHours = endDate.getHours();
  const endMinutes = endDate.getMinutes();
  const endSeconds = endDate.getSeconds();

  // Feb days for leap & non-leap years
  const febDays =
    (endYear % 4 === 0 && endYear % 100 !== 0) || endYear % 400 === 0 ? 29 : 28;
  // Days in a year
  const daysOfMonth = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // If month/date has passed today's date
  const startDatePassed =
    endMonth > startMonth || (endMonth === startMonth && endDay > startDay);

  // -> YEARS difference
  const years = endYear - startYear - (startDatePassed ? 1 : 0);
  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }

  // -> MONTHS difference
  const months =
    (12 + endMonth - startMonth - (endDay < startDay ? 1 : 0)) % 12;
  if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }

  // -> DAYS difference
  const days =
    startDay <= endDay
      ? endDay - startDay
      : daysOfMonth[(12 + endMonth - 1) % 12] - startDay + endDay;
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }

  // -> HOURS difference
  const hours = Math.abs(startHours - endHours);
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }

  // -> MINUTES difference
  const minutes = Math.abs(startMinutes - endMinutes);
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }

  // -> SECONDS difference
  const seconds = Math.abs(startSeconds - endSeconds);
  return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
}

export { calculateTimeDifference };
