package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pages.UploadPage;

import java.awt.*;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class UploadSteps {

    UploadPage uploadPage = new UploadPage();

    public UploadSteps() throws AWTException {
    }


    @Given("user is on uploadFilePage")
    public void userIsOnUploadFilePage() {
        uploadPage.navigate();
        uploadPage.getHomePageFragments().openDropDownSelenium();
        uploadPage.getHomePageFragments().clickFileUpload();
    }

    @And("title of page is {string}")
    public void titleOfPageIs(String title) {
        assertEquals(title, uploadPage.getTitle());
    }


    @When("user click Choose File button")
    public void userClickChooseFileButton() {
        uploadPage.getUploadPageFragments().clickChooseFileButton();
    }

    @And("add file path")
    public void addFilePath() throws AWTException {
        uploadPage.uploadUserFile();
    }



    @And("click Submit File button")
    public void clickSubmitFileButton() {
        uploadPage.getUploadPageFragments().clickSubmitButton();
    }

    @Then("success message is shown")
    public void successMessageIsShown() {
        assertTrue(uploadPage.getUploadPageFragments().sucessMessage());
    }
}