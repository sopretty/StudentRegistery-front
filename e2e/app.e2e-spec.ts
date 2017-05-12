import { AppPokPage } from './app.po';

describe('app-pok App', () => {
  let page: AppPokPage;

  beforeEach(() => {
    page = new AppPokPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
