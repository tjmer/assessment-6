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
    upperLeft.click()
    expect(await upperLeft.getText()).toContain('X')
    await driver.sleep(2000)
    

})

test('Upper right corner', async () => {

    let upperRight = await driver.findElement(By.xpath('/html/body/table/tbody/tr[1]/td[3]'))
    await upperRight.click()
    expect(await upperRight.getText()).toContain('X')
    await driver.sleep(2000)
    
})

test('Lower right corner', async () => {
    let lowerRight = await driver.findElement(By.xpath('/html/body/table/tbody/tr[3]/td[3]'))
    await lowerRight.click()
    expect(await lowerRight.getText()).toContain('X')
    await driver.sleep(2000)

})

test('Is the O populating top middle', async () => {

    driver.navigate().refresh()
    await driver.sleep(1000)

    let button = await driver.findElement(By.id("start-game"))
    await button.click()

    let upperRightSq = await driver.findElement(By.xpath('/html/body/table/tbody/tr[1]/td[3]'))
    await upperRightSq.click()
    let upperLeft = await driver.findElement(By.xpath('/html/body/table/tbody/tr[1]/td[1]')).getText()
    await expect(upperLeft).toContain('O')

    // let upperMiddle = await driver.findElement(By.xpath('/html/body/table/tbody/tr[1]/td[2]')).getText()
    // expect(upperMiddle).toContain('O')
    // await driver.sleep(2000)

})