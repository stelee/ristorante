import { RistorantePage } from './app.po';

describe('ristorante App', () => {
  let page: RistorantePage;

  beforeEach(() => {
    page = new RistorantePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
