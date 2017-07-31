import { NAppPage } from './app.po';

describe('n-app App', function() {
  let page: NAppPage;

  beforeEach(() => {
    page = new NAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
