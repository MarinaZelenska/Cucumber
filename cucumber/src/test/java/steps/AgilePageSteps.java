package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.AgilePage;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class AgilePageSteps {

    AgilePage agilePage = new AgilePage();


    @When("user navigates to agile page")
    public void userNavigatesToAgilePage() {
        agilePage.getHomePageFragments().clickAgilePageButton();
    }


    @And("user enters username {string} and password {string}")
    public void userEntersUsernameAndPassword(String username, String password) {
        agilePage.getLoginPageFragments().userEntersUsernameAndPassword(username, password);
    }

    @And("click login button")
    public void clickLoginButton() {
        agilePage.getLoginPageFragments().clickLoginButton();
    }

    @Then("welcome message is correct")
    public void welcomeMessageIsCorrect() {
        assertTrue(agilePage.welcomeMessageIsCorrect());

    }

    @Then("unvalid credentials message is shown")
    public void unvalidCredentialsMessageIsShown() {
        assertFalse(agilePage.welcomeMessageIsCorrect());

    }
}
