import { GautamaPage } from './app.po';

describe('gautama App', function() {
  let page: GautamaPage;

  beforeEach(() => {
    page = new GautamaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
