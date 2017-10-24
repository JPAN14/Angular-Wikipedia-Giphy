import { AngularWikipediaGiphyPage } from './app.po';

describe('angular-wikipedia-giphy App', () => {
  let page: AngularWikipediaGiphyPage;

  beforeEach(() => {
    page = new AngularWikipediaGiphyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
