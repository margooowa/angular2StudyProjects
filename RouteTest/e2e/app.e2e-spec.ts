import { RouteTestPage } from './app.po';

describe('route-test App', function() {
  let page: RouteTestPage;

  beforeEach(() => {
    page = new RouteTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rt works!');
  });
});
