package pages;

import com.codeborne.selenide.SelenideElement;
import fragments.HomePageFragments;
import io.cucumber.datatable.dependency.com.fasterxml.jackson.databind.ser.Serializers;

import static com.codeborne.selenide.Selenide.$x;
import static com.codeborne.selenide.Selenide.open;

public class TablePage extends BasePage {

    HomePageFragments homePageFragments = new HomePageFragments();

    private SelenideElement dropdownSelenium = $x("//ul[@class='nav navbar-nav']/li/a[contains(text(), 'Selenium')]");
    private SelenideElement tableDemo = $x("//li/a[contains(text(), 'Table Demo')]");
    private SelenideElement table = $x("//table");


    public void navigate(){
        open("");
    }

    public void openDropDownSelenium(){
        dropdownSelenium.click();
    }

    public void clickTableDemo(){
        tableDemo.click();
    }


    public boolean tableIsPresent(){
       return table.isDisplayed();
    }


    public HomePageFragments getHomePageFragments() {
        return homePageFragments;
    }
}
