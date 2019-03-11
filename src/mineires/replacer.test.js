import {
  creatorPhraseReplaces,
  creatorSuffixReplaces,
  creatorWordReplaces,
  executeReplacesInText
} from './replacer';

describe('replacer', () => {
  describe('creatorPhraseReplaces', () => {
    const phraseReplacer = creatorPhraseReplaces({ 'new one': 'old phrase' });

    it('when passing "old phrase" returns "new one"', () => {
      expect(phraseReplacer('old phrase')).toBe('new one');
    });

    it('when passing "bla old phrase" returns "bla new one"', () => {
      expect(phraseReplacer('bla old phrase')).toBe('bla new one');
    });

    it('when passing "bla old phrase." returns "bla new one."', () => {
      expect(phraseReplacer('bla old phrase.')).toBe('bla new one.');
    });

    it('when passing "bla old phrase bla" returns "bla new one bla"', () => {
      expect(phraseReplacer('bla old phrase bla')).toBe('bla new one bla');
    });

    it('when passing "blaold phrase" returns "blaold phrase"', () => {
      expect(phraseReplacer('blaold phrase')).toBe('blaold phrase');
    });

    it('when passing "old phrasebla" returns "old phrasebla"', () => {
      expect(phraseReplacer('old phrasebla')).toBe('old phrasebla');
    });
  });

  describe('creatorSuffixReplaces', () => {
    const sSuffixReplacer = creatorSuffixReplaces({ s: 'os' });

    it('when passing "bla gostos bla" returns "bla gosts bla"', () => {
      expect(sSuffixReplacer('bla gostos bla')).toBe('bla gosts bla');
    });

    it('when passing "gostos bla bla bla" returns "gosts bla bla bla"', () => {
      expect(sSuffixReplacer('gostos bla bla bla')).toBe('gosts bla bla bla');
    });

    it('when passing "bla bla bla gostos." returns "bla bla bla gosts."', () => {
      expect(sSuffixReplacer('bla bla bla gostos.')).toBe('bla bla bla gosts.');
    });

    it('when passing "bla bla bla gostos, bla bla" returns "bla bla bla gosts, bla bla"', () => {
      expect(sSuffixReplacer('bla bla bla gostos, bla bla')).toBe('bla bla bla gosts, bla bla');
    });

    it('when passing "gostos" returns "gosts"', () => {
      expect(sSuffixReplacer('gostos')).toBe('gosts');
    });

    it('when passing "gosto" returns "gosto"', () => {
      expect(sSuffixReplacer('gosto')).toBe('gosto');
    });

    it('when passing "os" returns "os"', () => {
      expect(sSuffixReplacer('os')).toBe('os');
    });
  })

  describe('creatorWordReplaces', () => {
    const wordReplacer = creatorWordReplaces({ 'newWord': 'oldWord' })

    it('when passing "oldWord" returns "newWord"', () => {
      expect(wordReplacer('oldWord')).toBe('newWord');
    });

    it('when passing "bla oldWord" returns "bla newWord"', () => {
      expect(wordReplacer('bla oldWord')).toBe('bla newWord');
    });

    it('when passing "oldWord bla" returns "newWord bla"', () => {
      expect(wordReplacer('oldWord bla')).toBe('newWord bla');
    });

    it('when passing "blaoldWord" returns "blaoldWord"', () => {
      expect(wordReplacer('blaoldWord')).toBe('blaoldWord');
    });

    it('when passing "oldWordbla" returns "oldWordbla"', () => {
      expect(wordReplacer('oldWordbla')).toBe('oldWordbla');
    });

    it('when passing "oldWordoldWorld" returns "oldWordoldWorld"', () => {
      expect(wordReplacer('oldWordoldWorld')).toBe('oldWordoldWorld');
    });

    it('when passing "bla oldWord bla" returns "bla newWord bla"', () => {
      expect(wordReplacer('bla oldWord bla')).toBe('bla newWord bla');
    });

    it('when passing "bla oldWord." returns "bla newWord."', () => {
      expect(wordReplacer('bla oldWord.')).toBe('bla newWord.');
    });
  });

  describe('executeReplacesInText', () => {
    const replacer = executeReplacesInText(
      creatorWordReplaces({ 'newWord1': 'oldWord1' }),
      creatorWordReplaces({ 'newWord2': 'oldWord2' }),
    );

    it('execute all replaces specified', () => {
      expect(replacer('bla oldWord1 oldWord2 bla.')).toBe('bla newWord1 newWord2 bla.');
    });
  });
});
