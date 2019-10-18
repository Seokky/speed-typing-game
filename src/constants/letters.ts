import { TLanguage } from '@/types/Language';
import { getRandomNumber } from '@/utils/random';

const RU_LETTERS = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
const EN_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const getLocaleLetters = (locale: TLanguage) => (locale === 'en' ? EN_LETTERS : RU_LETTERS);

const getRandomLetter = (locale: TLanguage) => {
  const max = (locale === 'en') ? EN_LETTERS.length : RU_LETTERS.length;

  return getLocaleLetters(locale)[getRandomNumber(max)];
};

export {
  RU_LETTERS,
  EN_LETTERS,
  getLocaleLetters,
  getRandomLetter,
};
