export const wordCapitalCase = (wordCapital: any): any => {
  return wordCapital[0]?.toUpperCase() + wordCapital?.substring(1);
};

export const wordToLowerCase = (lowerWord: any): any => {
  return lowerWord?.toLowerCase();
};

export const replaceAllDuplicateLineBreaks = (sentence: string): string => {
  return sentence.replace(/\\n/g, '\n');
};
