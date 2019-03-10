import {
  creatorPhraseReplaces,
  creatorSuffixReplaces,
  creatorWordReplaces,
  executeReplacesInText
} from './replacer';

import PHRASES from './constants/phrases.json';
import SUFFIXS from './constants/suffixs.json';
import WORDS from './constants/words.json';

const phraseReplaces = creatorPhraseReplaces(PHRASES);
const wordReplaces = creatorWordReplaces(WORDS);
const suffixWords = creatorSuffixReplaces(SUFFIXS);

export default executeReplacesInText(
  phraseReplaces,
  wordReplaces,
  suffixWords,
);
