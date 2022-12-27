import 'react-native';
import {
  replaceAllDuplicateLineBreaks,
  wordCapitalCase,
  wordToLowerCase,
} from '.';

it('wordCapitalCase works well', () => {
  expect(wordCapitalCase('loremipsum')).toEqual('Loremipsum');
});

it('replaceAll works well', () => {
  expect(replaceAllDuplicateLineBreaks('Test \\nUtil')).toStrictEqual(
    'Test \nUtil',
  );

  expect(replaceAllDuplicateLineBreaks('Test \\n\\nUtil')).toStrictEqual(
    'Test \n\nUtil',
  );
});

it('lowerCaseFirstChar works well', () => {
  expect(wordToLowerCase('LoremIpsumDolorSitAmet')).toEqual(
    'loremipsumdolorsitamet',
  );
});
