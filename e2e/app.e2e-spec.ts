import { LoanAppPage } from './app.po';

describe('loan-app App', () => {
  let page: LoanAppPage;

  beforeEach(() => {
    page = new LoanAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
