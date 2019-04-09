
async function clearAndFill (field, keys ) {
    await field.clear().sendKeys(keys);
}

async function clearAndFillAllFields (fields, text){

    for (const item of fields) {
        await clearAndFill(item, text);
    }

}

module.exports = clearAndFill;
module.exports = clearAndFillAllFields;