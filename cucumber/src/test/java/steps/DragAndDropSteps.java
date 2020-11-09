package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.DragAndDropPage;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class DragAndDropSteps {

    DragAndDropPage dragAndDropPage = new DragAndDropPage();


    @Given("user is on dragAndDrop page")
    public void userIsOnDragAndDropPage() {
        dragAndDropPage.navigate();
        dragAndDropPage.getHomePageFragments().openDropDownSelenium();
        dragAndDropPage.getHomePageFragments().clickDragAndDropAction();
    }

    @And("success message is not shown")
    public void successMessageIsNotShown() {
        dragAndDropPage.successMessageIsNotShow();
    }

    @When("user drop debit account {string}")
    public void userDropDebitAccount(String title) {

    }

    @When("user drop debit account BANK")
    public void userDropDebitAccountBANK() {
        dragAndDropPage.userDropDebitAccountBANK();

    }


    @And("user drop debit amount {string}")
    public void userDropDebitAmount(String arg0) {
        dragAndDropPage.userDropDebitAmount();
    }

    @And("user drop credit account {string}")
    public void userDropCreditAccount(String arg0) {
        dragAndDropPage.userDropCreditAccount();
    }

    @And("user drop credit amount {string}")
    public void userDropCreditAmount(String arg0) {
        dragAndDropPage.userDropCreditAmount();
    }

    @Then("success message shown")
    public void successMessageShown() {
        assertTrue(dragAndDropPage.successMessageIsShow());
    }
}
