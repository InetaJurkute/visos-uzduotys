import { GameShopPage } from './app.po';

describe('game-shop App', () => {
  let page: GameShopPage;

  beforeEach(() => {
    page = new GameShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
