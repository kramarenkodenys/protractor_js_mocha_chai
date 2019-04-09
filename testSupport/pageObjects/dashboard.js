const protractor = require("protractor");

class DashBoard {

    get userProfileTab() {
        return protractor.browser.element(protractor.by.xpath('//p[contains(text(), "User Profile")]'));
    }
}

module.exports = new DashBoard();
