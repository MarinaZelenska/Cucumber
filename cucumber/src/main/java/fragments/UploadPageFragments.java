package fragments;

import com.codeborne.selenide.SelenideElement;

import static com.codeborne.selenide.Selenide.$x;

public class UploadPageFragments {

    private SelenideElement submitButton = $x("//button[@id='submitbutton']");
    private SelenideElement sucessMessage = $x("//div[@class='formbuttons']//center");
    private SelenideElement chooseFileButton = $x("//div[@id='filelist']");


    public void clickSubmitButton(){
        submitButton.click();
    }

    public boolean sucessMessage(){
        return sucessMessage.isDisplayed();
    }

    public void clickChooseFileButton(){
        chooseFileButton.isDisplayed();
        chooseFileButton.click();

    }
}
