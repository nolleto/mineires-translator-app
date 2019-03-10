import ACCENTS from './constants/accents.json';

const addParentheses = str => `(${str})`;
const stringToRegex = str => new RegExp(str, 'ig');
const createPhraseRegex = phrase => stringToRegex(addParentheses(replaceAccentsInString(phrase)));
const createWordRegex = word => stringToRegex(replaceAccentsInString(`(^| )(${word})( |.|,|$)`));
const createSuffixRegex = word => stringToRegex(`([a-z]+)(${replaceAccentsInString(word)})`);

const replaceAccentsInString = str => {
  return Object.keys(ACCENTS).reduce((acc, letter) => {
    return acc.replace(new RegExp(letter, 'ig'), ACCENTS[letter]);
  }, str);
};

const getTargetPhrases = phrases => {
  if (Array.isArray(phrases)) return phrases;
  return [phrases];
};

export const creatorPhraseReplaces = json => text => {
  return Object.keys(json).reduce((textToReplace, newPhrase) => {
    const targetPhrases = getTargetPhrases(json[newPhrase]);

    return targetPhrases.reduce((acc, targetPhrase) => {
      const regex = createPhraseRegex(targetPhrase);

      return acc.replace(regex, newPhrase);
    }, textToReplace);
  }, text);
};

export const creatorWordReplaces = json => text => {
  return Object.keys(json).reduce((textToReplace, newWord) => {
    const targetWords = getTargetPhrases(json[newWord]);

    return targetWords.reduce((acc, targetWord) => {
      const regex = createWordRegex(targetWord);

      return acc.split(' ').map(
        word => word.replace(regex, `$1${newWord}$3`)
      ).join(' ');
    }, textToReplace);
  }, text);
};

export const creatorSuffixReplaces = json => text => {
  return Object.keys(json).reduce((textToReplace, newWord) => {
    const targetWords = getTargetPhrases(json[newWord]);

    return targetWords.reduce((acc, targetWord) => {
      const regex = createSuffixRegex(targetWord);

      return acc.replace(regex, `$1${newWord}`);
    }, textToReplace);
  }, text);
};

export const executeReplacesInText = (...replaces) => text => {
  return replaces.reduce((acc, replace) => replace(acc), text);
};
