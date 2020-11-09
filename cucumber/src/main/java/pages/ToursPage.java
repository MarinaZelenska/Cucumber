package pages;

import com.codeborne.selenide.SelenideElement;

import static com.codeborne.selenide.Selenide.$x;
import static com.codeborne.selenide.Selenide.open;

public class ToursPage extends BasePage{

    private SelenideElement mainFragment = $x("//div/table/tbody");


    public ToursPage() {
    }

    public boolean isMainFragmentPresent(){
        return mainFragment.isDisplayed();
    }





}
