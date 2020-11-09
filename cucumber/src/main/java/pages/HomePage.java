package pages;

import com.codeborne.selenide.SelenideElement;
import fragments.HomePageFragments;

import static com.codeborne.selenide.Selenide.$x;
import static com.codeborne.selenide.Selenide.open;

public class HomePage extends BasePage{

    private SelenideElement loginForm  = $x("//td/input[@name='emailid']");
    HomePageFragments homePageFragments = new HomePageFragments();


    public HomePage() {
    }

    public boolean isLoginFormPresent(){
        return loginForm.isDisplayed();
    }

    public void navigate(){
        open("");
    }


    public HomePageFragments getHomePageFragments() {
        return homePageFragments;
    }
}
