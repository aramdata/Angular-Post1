import { PostPage } from './app.po';

describe('post App', function() {
  let page: PostPage;

  beforeEach(() => {
    page = new PostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
