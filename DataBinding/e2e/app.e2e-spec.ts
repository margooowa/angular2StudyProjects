import { StudyProjectPage } from './app.po';

describe('study-project App', function() {
  let page: StudyProjectPage;

  beforeEach(() => {
    page = new StudyProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
