package fragments;

import com.codeborne.selenide.SelenideElement;

import static com.codeborne.selenide.Selenide.$x;

public class LoginPageFragments {

    private SelenideElement usernameElement = $x("//input[@name='uid']");
    private SelenideElement passwordElement = $x("//input[@name='password']");
    private SelenideElement loginButton = $x("//input[@value='LOGIN']");

    public void userEntersUsernameAndPassword(String username, String password){
        usernameElement.sendKeys(username);
        passwordElement.sendKeys(password);

    }

    public void clickLoginButton(){
        loginButton.click();

    }
}
