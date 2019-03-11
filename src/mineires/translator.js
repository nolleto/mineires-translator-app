import {
  creatorPhraseReplaces,
  creatorSuffixReplaces,
  creatorWordReplaces,
  executeReplacesInText
} from './replacer';

import PHRASES from './constants/phrases.json';
import SUFFIXS from './constants/suffixs.json';
import WORDS from './constants/words.json';

export default executeReplacesInText(
  creatorPhraseReplaces(PHRASES),
  creatorWordReplaces(WORDS),
  creatorSuffixReplaces(SUFFIXS),
);
