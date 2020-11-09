package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.TablePage;

import static org.junit.Assert.assertEquals;

public class TablePageSteps {

    TablePage tablePage = new TablePage();


    @When("user click on tableDemoLink")
    public void userClickOnTableDemoLink() {
        tablePage.navigate();
        tablePage.getHomePageFragments().openDropDownSelenium();;
        tablePage.getHomePageFragments().clickTableDemo();
    }

    @Then("title of tablePage is correct")
    public void titleOfTablePageIsCorrect() {
        String title = tablePage.getTitle();
        assertEquals(title, "Table Demo");
    }

    @And("table is present")
    public void tableIsPresent() {
        tablePage.tableIsPresent();
    }
}
