import { MwaAppPage } from './app.po';

describe('mwa-app App', function() {
  let page: MwaAppPage;

  beforeEach(() => {
    page = new MwaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
