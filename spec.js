
//basic hello title test in protractor:

describe('get title', function(){
  it('should have a title', function(){
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('GāME');

  });
});

describe('refresh-btn', function(){
  it('should refresh when clicked', function(){
    var el = element(by.css('.refresh-btn'));
    el.click()
    //expect angular to refresh elements on the page
    // browser.pause();
  });
});

describe('enter city', function(){
  it('should enter a city name', function(){
    // browser.get('http://localhost:8080');
    //this variable holds the selection
    element(by.model('locationData')).sendKeys('Seattle');
    var el = element(by.buttonText('Submit'));
    el.click()
    .then(function(){
      // browser.pause();
    })
  });
});

describe('select sport', function(){
  it('should select the first sport', function(){
    // browser.driver.get('http://localhost:8080');
    browser.sleep(8000);
    element.all(by.css('.dropdown-toggle')).first().click();
   
    element(by.cssContainingText('.sport-item', 'Soccer')).click()
   
    .then(function(){

      browser.driver.sleep(5000);

        var checkbox = element.all(by.css('.checkin-button.checkin.btn')).get(0);
        var site = element.all(by.css('.sitename')).get(0).click()
        .then(function(){
          // browser.waitForAngular();
          // browser.driver.sleep(1000);
          checkbox.click();
          // site.click();
        });


//second checkbox
      // browser.driver.sleep(5000);
      // var checkBox2 = element.all(by.css('.checkin-button.checkin.btn')).get(1);
      // var site2 = element.all(by.css('.sitename')).get(1).click()
      //   .then(function(){
      //     // browser.waitForAngular();
      //     // browser.driver.sleep(1000);
      //     checkBox2.click();
      //     // site.click();
      //   });

      
      // expect(site.getText()).toBe('CenturyLink Field');
     // browser.pause();
    });
   
  });
});

describe('click review link', function(){
  it('should have a clickable review link that opens a modal', function(){
    browser.driver.sleep(5000);

    // var reviewLink = 
    element.all(by.css('.reviews')).get(0).click();
    browser.pause();
  });
});

//look at her code

//first find the new el in the dom and click on adding a review
//add sample text into the box
//save
//retrieve the information 

//next refactor into a page object to keep the test logic separate from the page elements


