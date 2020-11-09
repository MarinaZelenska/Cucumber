package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class NavigationSteps {

    HomePage homePage = new HomePage();


    @When("user navigate to homePage")
    public void userNavigateToHomePage() {
        homePage.navigate();

    }

    @Then("title of homePage is {string}")
    public void titleOfHomePageIs(String title) {
        assertEquals(title, homePage.getTitle());
    }


    @And("login form is present")
    public void loginFormIsPresent() {
        assertTrue(homePage.isLoginFormPresent());
    }

    @Given("user is on homePage")
    public void userIsOnHomePage() {
        homePage.navigate();
    }

    @When("user click on newToursButton")
    public void userClickOnNewToursButton() {
        homePage.getHomePageFragments().clickNewToursButton();
    }
}
