import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    await driver.sleep(2000)

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

});

test('Upper left corner', async () => {

    let upperLeft = await driver.findElement(By.xpath('/html/body/table/tbody/tr[1]/td[1]'))
    await upperLeft.click()


})

test('Upper right corner', async () => {

    let upperRight = await driver.findElement(By.xpath('/html/body/table/tbody/tr[1]/td[3]'))

    await upperRight.click()
    
})

test('Lower right corner', async () => {
    let lowerRight = await driver.findElement(By.xpath('/html/body/table/tbody/tr[3]/td[3]'))

    await lowerRight.click()

})

test('Is the O populating top middle', async () => {

    let upperMiddle = await driver.findElement(By.xpath('/html/body/table/tbody/tr[1]/td[2]')).getText()

    expect(upperMiddle).toContain('O')

    await driver.sleep(2000)

})