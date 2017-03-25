import { MoviecompPage } from './app.po';

describe('moviecomp App', () => {
  let page: MoviecompPage;

  beforeEach(() => {
    page = new MoviecompPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
