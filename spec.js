
describe('e2e tests for status page', () => {
    
    it('should open the status page...', () => {
        browser.get("https://admin:admin1@10.89.7.186/index_device.html");
        browser.driver.manage().window().setSize(1536, 826);

element(by.css('p-panelmenu>div:nth-of-type(1)>div:nth-of-type(1)>div>a>span')).click();// URL: 
element(by.css('div:nth-of-type(3)>div>a>span')).click();
browser.getTitle()
        .then(function(text)  
    {
      console.log(text);
    }); 

        
    });       

});
    

