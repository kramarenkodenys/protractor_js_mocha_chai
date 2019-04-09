const dashboard = require("../testSupport/pageObjects/dashboard");
const editProfile = require("../testSupport/pageObjects/userProfile/editProfile");
const assert = require('chai').assert;
const clearAndFillAllFields = require("../testSupport/helper");
const dashboardPage = 'https://demos.creative-tim.com/now-ui-dashboard-angular/dashboard';


const editProfileFields = [
    editProfile.username,
    editProfile.email,
    editProfile.firstName,
    editProfile.lastName,
    editProfile.homeAddress,
    editProfile.city,
    editProfile.country,
    editProfile.description,
    editProfile.zipCode
];

const valueForFillIn = 5;



describe(`Edit profile verification`, () => {

    it(`Change fields value`, async () => {

        await browser.get(dashboardPage);
        await dashboard.userProfileTab.click();
        await clearAndFillAllFields(editProfileFields, valueForFillIn);

        let userNameValue = await editProfile.username.getAttribute('value');
        let firstName = await editProfile.firstName.getAttribute('value');
        let email = await editProfile.email.getAttribute('value');
        let lastNameValue = await editProfile.lastName.getAttribute('value');
        let homeAddressValue = await editProfile.homeAddress.getAttribute('value');
        let cityValue = await editProfile.city.getAttribute('value');
        let countryValue = await editProfile.country.getAttribute('value');
        let zipCodeValue = await editProfile.zipCode.getAttribute('value');
        let descriptionValue = await editProfile.description.getAttribute('value');

        assert.equal(valueForFillIn, userNameValue, 'userNameValue text is not equal');
        assert.equal(valueForFillIn, email, 'email text is not equal');
        assert.equal(valueForFillIn, firstName, 'firstName text is not equal');
        assert.equal(valueForFillIn, lastNameValue, 'lastNameValue text is not equal');
        assert.equal(valueForFillIn, homeAddressValue, 'homeAddressValue text is not equal');
        assert.equal(valueForFillIn, cityValue, 'cityValue text is not equal');
        assert.equal(valueForFillIn, countryValue, 'countryValue text is not equal');
        assert.equal(valueForFillIn, zipCodeValue, 'zipCodeValue is not equal');
        assert.equal(valueForFillIn, descriptionValue, 'descriptionValue text is not equal');

        await browser.sleep(2000);
    });
});
