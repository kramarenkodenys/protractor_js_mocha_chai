const $ = require("protractor").$;

const editProfile = {

        username: $("input[placeholder*='Username']"),
        email : $("input[placeholder*='Email']"),
        firstName : $("div.col-md-6.pr-1 > div > input"),
        lastName : $("input[placeholder*='Last Name']"),
        homeAddress : $("input[placeholder*='Home Address']"),
        city : $("input[placeholder*='City']"),
        country : $("input[placeholder*='Country']"),
        zipCode : $("input[placeholder*='ZIP Code']"),
        description : $("textarea[placeholder*='Here can be your description']")

};

module.exports = editProfile;
