import { parse, differenceInHours } from 'date-fns';

/**
 * Calculates the duration between two dates in hours and returns the rounded-up value of hours divided by 24.
 * 
 * @param startDate - The start date as a string in the format 'DD/MM/YYYY HH'
 * @param endDate - The end date as a string in the format 'DD/MM/YYYY HH'
 * @param dateFormat - Optional: The format of the input dates (default is 'dd/MM/yyyy HH:mm:ss')
 * @returns The rounded-up value of (hours / 24)
 */
export function durationCounter(startDate: string, endDate: string, dateFormat: string = 'dd/MM/yyyy HH:mm:ss'): number {
  // Check if startDate or endDate is null
  if (!startDate || !endDate) {
    throw new Error("Start date or end date is null");
  }

  const parsedStartDate = parse(startDate, dateFormat, new Date());
  const parsedEndDate = parse(endDate, dateFormat, new Date());

  // Check if parsedStartDate or parsedEndDate is null after parsing
  if (!parsedStartDate || !parsedEndDate || isNaN(parsedStartDate.getTime()) || isNaN(parsedEndDate.getTime())) {
    throw new Error("Invalid date format");
  }

  const hours = differenceInHours(parsedEndDate, parsedStartDate);

  const roundedUpDays = Math.ceil(hours / 24);

  return roundedUpDays;
}
