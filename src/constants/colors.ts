import { getRandomNumber } from '@/utils/random';

/* eslint-disable-next-line */
export const COLORS = ['white', 'red', 'yellow', 'green', 'brown', 'lightblue', 'coral'];
export const getRandomColor = () => COLORS[getRandomNumber(COLORS.length - 1)];
