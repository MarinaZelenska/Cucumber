package pages;

import fragments.HomePageFragments;
import fragments.UploadPageFragments;

import java.awt.*;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import static com.codeborne.selenide.Selenide.open;

public class UploadPage extends BasePage {


    UploadPageFragments uploadPageFragments = new UploadPageFragments();
    HomePageFragments homePageFragments = new HomePageFragments();
    String file = "test.txt";
    Robot robot = new Robot();

    public UploadPage() throws AWTException {
    }


    public void navigate() {
        open("");
    }


    public void uploadUserFile() throws AWTException {
        robot.setAutoDelay(1000);
        StringSelection ss = new StringSelection(file);
        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(ss, null);
        robot.setAutoDelay(1000);
        robot.keyPress(KeyEvent.VK_CONTROL);
        robot.keyPress(KeyEvent.VK_V);
        robot.keyRelease(KeyEvent.VK_V);
        robot.keyRelease(KeyEvent.VK_CONTROL);
        robot.keyPress(KeyEvent.VK_ENTER);
        robot.keyRelease(KeyEvent.VK_ENTER);

    }

    public HomePageFragments getHomePageFragments() {
        return homePageFragments;
    }


    public UploadPageFragments getUploadPageFragments() {
        return uploadPageFragments;
    }
}



