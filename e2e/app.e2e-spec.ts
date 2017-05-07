import { AngPortfolioPage } from './app.po';

describe('ang-portfolio App', () => {
  let page: AngPortfolioPage;

  beforeEach(() => {
    page = new AngPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
