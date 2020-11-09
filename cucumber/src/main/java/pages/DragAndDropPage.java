package pages;

import com.codeborne.selenide.Condition;
import com.codeborne.selenide.SelenideElement;
import fragments.HomePageFragments;

import static com.codeborne.selenide.Selenide.$x;
import static com.codeborne.selenide.Selenide.open;

public class DragAndDropPage extends BasePage{

    HomePageFragments homePageFragments = new HomePageFragments();
    private SelenideElement successMessage = $x("//a[contains(text(),'Perfect')");
    private SelenideElement bank = $x("//*[@id='credit2']/a");
    private SelenideElement debitAccount = $x("//*[@id='bank']/li");
    private SelenideElement amountDebitInt = $x("//*[@id='fourth']/a");
    private SelenideElement amountDebitColumn = $x("//*[@id='amt7']/li");
    private SelenideElement sales = $x("//*[@id='credit1']/a");
    private  SelenideElement creditAccount = $x("//*[@id='loan']/li");
    private  SelenideElement creditAmount = $x("//*[@id='amt8']/li");
    private SelenideElement amountCreditInt = $x("//*[@id='fourth']/a");

    public void navigate() {
        open("");
    }

    public HomePageFragments getHomePageFragments() {
        return homePageFragments;
    }

    public void successMessageIsNotShow(){
        successMessage.shouldNotBe(Condition.visible);
    }

    public void userDropDebitAccountBANK(){
        bank.dragAndDropTo(debitAccount);
    }

    public void userDropDebitAmount(){
        amountDebitInt.dragAndDropTo(amountDebitColumn);

    }

    public void userDropCreditAccount(){
        sales.dragAndDropTo(creditAccount);

    }

    public void userDropCreditAmount(){
        amountCreditInt.dragAndDropTo(creditAmount);

    }

    public boolean successMessageIsShow(){
       return successMessage.isDisplayed();
    }
}
