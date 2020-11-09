$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/agileProject.feature");
formatter.feature({
  "name": "Agile project sign in",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "Login as a authenticated user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user is on homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigationSteps.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to agile page",
  "keyword": "When "
});
formatter.match({
  "location": "AgilePageSteps.userNavigatesToAgilePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \"1303\" and password \"Guru99\"",
  "keyword": "And "
});
formatter.match({
  "location": "AgilePageSteps.userEntersUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "AgilePageSteps.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "welcome message is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "AgilePageSteps.welcomeMessageIsCorrect()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Unhappy login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user is on homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigationSteps.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to agile page",
  "keyword": "When "
});
formatter.match({
  "location": "AgilePageSteps.userNavigatesToAgilePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \"111\" and password \"xyz\"",
  "keyword": "And "
});
formatter.match({
  "location": "AgilePageSteps.userEntersUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "AgilePageSteps.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "unvalid credentials message is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "AgilePageSteps.unvalidCredentialsMessageIsShown()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/dragAndDrop.feature");
formatter.feature({
  "name": "Drag and drop is working",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "Put bank details into drag and drop form",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user is on dragAndDrop page",
  "keyword": "Given "
});
formatter.match({
  "location": "DragAndDropSteps.userIsOnDragAndDropPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "success message is not shown",
  "keyword": "And "
});
formatter.match({
  "location": "DragAndDropSteps.successMessageIsNotShown()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //a[contains(text(),\u0027Perfect\u0027) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//a[contains(text(),\u0027Perfect\u0027)\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d86.0.4240.183)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WIN-HERDD10HRA9\u0027, ip: \u002710.1.1.115\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.183, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63858}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 943296628de1ea744496045e3e68c036\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Perfect\u0027)}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:74)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:50)\r\n\tat com.codeborne.selenide.commands.ShouldNot.shouldNot(ShouldNot.java:36)\r\n\tat com.codeborne.selenide.commands.ShouldNot.execute(ShouldNot.java:29)\r\n\tat com.codeborne.selenide.commands.ShouldNot.execute(ShouldNot.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:144)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:99)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:65)\r\n\tat com.sun.proxy.$Proxy13.shouldNotBe(Unknown Source)\r\n\tat pages.DragAndDropPage.successMessageIsNotShow(DragAndDropPage.java:32)\r\n\tat steps.DragAndDropSteps.successMessageIsNotShown(DragAndDropSteps.java:26)\r\n\tat ✽.success message is not shown(src/test/resources/dragAndDrop.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user drop debit account BANK",
  "keyword": "When "
});
formatter.match({
  "location": "DragAndDropSteps.userDropDebitAccountBANK()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user drop debit amount \"5000\"",
  "keyword": "And "
});
formatter.match({
  "location": "DragAndDropSteps.userDropDebitAmount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user drop credit account \"SALES\"",
  "keyword": "And "
});
formatter.match({
  "location": "DragAndDropSteps.userDropCreditAccount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user drop credit amount \"5000\"",
  "keyword": "And "
});
formatter.match({
  "location": "DragAndDropSteps.userDropCreditAmount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "success message shown",
  "keyword": "Then "
});
formatter.match({
  "location": "DragAndDropSteps.successMessageShown()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/fileUpload.feature");
formatter.feature({
  "name": "File upload is working",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "User can upload file on uploadFilePage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user is on uploadFilePage",
  "keyword": "Given "
});
formatter.match({
  "location": "UploadSteps.userIsOnUploadFilePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of page is \"File Upload Demo\"",
  "keyword": "And "
});
formatter.match({
  "location": "UploadSteps.titleOfPageIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Choose File button",
  "keyword": "When "
});
formatter.match({
  "location": "UploadSteps.userClickChooseFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "add file path",
  "keyword": "And "
});
formatter.match({
  "location": "UploadSteps.addFilePath()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Submit File button",
  "keyword": "And "
});
formatter.match({
  "location": "UploadSteps.clickSubmitFileButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "success message is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "UploadSteps.successMessageIsShown()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat steps.UploadSteps.successMessageIsShown(UploadSteps.java:55)\r\n\tat ✽.success message is shown(src/test/resources/fileUpload.feature:10)\r\n",
  "status": "failed"
});
formatter.uri("src/test/resources/smokeNavigation.feature");
formatter.feature({
  "name": "Navigation to few pages is working",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "User can navigate to homePage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@HomePage"
    }
  ]
});
formatter.step({
  "name": "user navigate to homePage",
  "keyword": "When "
});
formatter.match({
  "location": "NavigationSteps.userNavigateToHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of homePage is \"Guru99 Bank Home Page\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NavigationSteps.titleOfHomePageIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login form is present",
  "keyword": "And "
});
formatter.match({
  "location": "NavigationSteps.loginFormIsPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can navigate to newToursPage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user is on homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigationSteps.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on newToursButton",
  "keyword": "When "
});
formatter.match({
  "location": "NavigationSteps.userClickOnNewToursButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of newToursPage is \"Welcome: Mercury Tours\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ToursPageSteps.titleOfNewToursPageIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "main fragment is present",
  "keyword": "And "
});
formatter.match({
  "location": "ToursPageSteps.mainFragmentIsPresent()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can navigate to tablePage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user is on homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigationSteps.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on tableDemoLink",
  "keyword": "When "
});
formatter.match({
  "location": "TablePageSteps.userClickOnTableDemoLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of tablePage is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "TablePageSteps.titleOfTablePageIsCorrect()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "table is present",
  "keyword": "And "
});
formatter.match({
  "location": "TablePageSteps.tableIsPresent()"
});
formatter.result({
  "status": "passed"
});
});