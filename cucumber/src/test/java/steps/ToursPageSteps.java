package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import pages.HomePage;
import pages.ToursPage;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class ToursPageSteps {

    ToursPage toursPage = new ToursPage();

    @Then("title of newToursPage is {string}")
    public void titleOfNewToursPageIs(String title) {
        assertEquals(title, toursPage.getTitle());
    }

    @And("main fragment is present")
    public void mainFragmentIsPresent() {
        assertTrue(toursPage.isMainFragmentPresent());

    }
}
