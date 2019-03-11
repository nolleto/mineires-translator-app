import translator from './translator';

describe('translator', () => {
  it('when passing "Quanto está o litro de leite?" from "Quanto tá o lidileite?"', () => {
    expect(translator('Quanto está o litro de leite?')).toBe('Quanto tá o lidileite?');
  });
});
