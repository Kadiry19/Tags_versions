import { Page } from  '@playwright/test';
import { HomePage} from '../pom/home_page';
import { LoginPage} from '../pom/log_in_page';
import { SignUpPage} from '../pom/sign_up_page';
import { MyAccountPage} from '../pom/my_account_page';


export class PageManager {
  readonly home: HomePage;
  readonly login: LoginPage;
  readonly signUp: SignUpPage;
  readonly myAccount: MyAccountPage;

  constructor(page: Page) {
    this.home = new HomePage(page);
    this.login = new LoginPage(page);
    this.signUp = new SignUpPage(page);
    this.myAccount = new MyAccountPage(page);
  }
}