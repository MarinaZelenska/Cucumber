package pages;

import com.codeborne.selenide.SelenideElement;
import fragments.HomePageFragments;
import fragments.LoginPageFragments;

import static com.codeborne.selenide.Selenide.$x;
import static org.junit.Assert.assertFalse;

public class AgilePage extends BasePage {


    private SelenideElement logOut = $x("//a[contains(text(), 'Log out')]");

    HomePageFragments homePageFragments = new HomePageFragments();
    LoginPageFragments loginPageFragments = new LoginPageFragments();

    public boolean welcomeMessageIsCorrect(){
        return logOut.isDisplayed();

    }



    public HomePageFragments getHomePageFragments() {
        return homePageFragments;
    }


    public LoginPageFragments getLoginPageFragments() {
        return loginPageFragments;
    }


}
