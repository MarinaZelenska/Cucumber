package fragments;

import com.codeborne.selenide.SelenideElement;

import static com.codeborne.selenide.Selenide.$x;

public class HomePageFragments {

    private SelenideElement dropdownSelenium = $x("//ul[@class='nav navbar-nav']/li/a[contains(text(), 'Selenium')]");
    private SelenideElement tableDemo = $x("//li/a[contains(text(), 'Table Demo')]");
    private SelenideElement fileUpload = $x("//li/a[contains(text(), 'File Upload')]");
    private SelenideElement newToursButton = $x("//a[contains(text(), 'New Tours')]");
    private SelenideElement dragAndDropAction = $x("//a[contains(text(), 'Drag and Drop Action')]");
    private SelenideElement agileProject = $x("//ul[@class = 'nav navbar-nav']//a[contains(text(), 'Agile Project')]");


    public void openDropDownSelenium(){
        dropdownSelenium.click();
    }

    public void clickTableDemo(){
        tableDemo.click();
    }

    public void clickFileUpload(){
        fileUpload.click();
    }

    public void uploadUserFile(){
        fileUpload.sendKeys((CharSequence) fileUpload);
    }

    public void clickNewToursButton(){
        newToursButton.click();
    }

    public void clickDragAndDropAction(){
        dragAndDropAction.click();
    }

    public void clickAgilePageButton(){
        agileProject.click();

    }
}
