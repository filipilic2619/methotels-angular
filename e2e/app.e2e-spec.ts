import { It255Dz09Page } from './app.po';

describe('it255-dz09 App', function() {
  let page: It255Dz09Page;

  beforeEach(() => {
    page = new It255Dz09Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
