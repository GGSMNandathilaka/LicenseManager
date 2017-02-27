import { LicenseManagerPage } from './app.po';

describe('license-manager App', () => {
  let page: LicenseManagerPage;

  beforeEach(() => {
    page = new LicenseManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
