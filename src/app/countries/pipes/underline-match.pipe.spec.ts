import { UnderlineMatchPipe } from './underline-match.pipe';

describe('UnderlineMatchPipe', () => {
  let pipe: UnderlineMatchPipe;

  beforeEach(() => {
    pipe = new UnderlineMatchPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('(value: "Myanmar", searchValue: "Mya") should return "<u>Mya</u>nmar"', () => {
    expect(pipe.transform('Myanmar', 'Mya')).toBe('<u>Mya</u>nmar');
  });

  it('(value: "Myanmar", searchValue: "Eng") should return "Myanmar"', () => {
    expect(pipe.transform('Myanmar', 'Eng')).toBe('Myanmar');
  });

  it('(value: "Myanmar", searchValue: "") should return "Myanmar"', () => {
    expect(pipe.transform('Myanmar', 'Eng')).toBe('Myanmar');
  });

  it('(value: "", searchValue: "Mya") should return ""', () => {
    expect(pipe.transform('', 'Eng')).toBe('');
  });
});
