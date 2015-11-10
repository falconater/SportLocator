

describe('hello protractor', function(){
  it('should have a title', function(){
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('GāME');
  });

  it('should accept a city name and change location', function(){
    element(by.model('locationData')).sendKeys('Seattle');
    var el = element(by.buttonText('Submit'));
    el.click();
    //expect city to equal seattle
  });
});

describe('test sport dropdown', function(){
  it('should select a sport', function(){
      browser.driver.sleep(2000);
      element.all(by.css('.dropdown-toggle')).first().click();
      element(by.cssContainingText('.sport-item', 'Soccer')).click();
      // browser.pause();
      var selectedSport = element(by.css('.selected-sport'));

      expect(selectedSport.getText()).toBe('Soccer');
  });

  it('should add check to the first site checkbox', function(){
    browser.driver.sleep(2000);
    var checkbox = element.all(by.css('.checkin-button.checkin.btn')).get(0);
    var site = element.all(by.css('.sitename')).get(0).click()
      .then(function(){
        checkbox.click();
        browser.driver.sleep(2000);

        expect(element.all(by.css('.checkin-button.checkout.btn')).get(0).isDisplayed()).toBe(true);
      
      });
  });
});

describe('test review link', function(){
  it('should open a modal box', function(){

    browser.driver.sleep(2000);

    element.all(by.css('.reviews')).get(0).click();
    browser.executeScript('console.log("hello world");');
    var modal = $('.modal-body');

    browser.driver.sleep(1000);

    expect((modal).isDisplayed()).toBeTruthy();

  });
});

describe('input review', function(){
  it('should accept user review and post text', function(){
    browser.driver.sleep(1000);
    var modal = $('.modal-body');
    var modalInput = modal.element(by.model('text'));
    var postBtn = element(by.id('post-btn'));
    modalInput.sendKeys('testing feature with protractor');
    postBtn.click();
    browser.driver.sleep(1000);
    var lastReview = element.all(by.repeater('review in elm.reviews')).last();
   
    expect(lastReview.getText()).toBe(': testing feature with protractor');
    
  });
});

describe('close modal', function(){
  it('should close the modal box', function(){
    browser.driver.sleep(1000);
    var modal = $('.modal-body');
    var modalHeader = $('.modal-header');
    modalHeader.element(by.css('.close')).click();
    browser.driver.sleep(1000);
    expect((modal).isDisplayed()).toBeFalsy();
  });

});

describe('test sport dropdown 2', function(){
  it('should select another sport', function(){
      browser.driver.sleep(1000);
      element.all(by.css('.dropdown-toggle')).first().click();
      element(by.cssContainingText('.sport-item', 'Gym')).click();
      // browser.pause();
      var selectedSport = element(by.css('.selected-sport'));

      expect(selectedSport.getText()).toBe('Gym');
      // browser.pause();
  });
});

describe('check all boxes', function(){
  it('should be able to receive multiple checks', function(){
    browser.driver.sleep(2000);
    var checkbox = element.all(by.css('.checkin-button.checkin.btn'));
    var site = element.all(by.css('.sitename')).click()
      .then(function(){
        checkbox.click();
        // browser.pause();
  
      });
  });
});

// describe('refresh', function(){
//   it('should refresh when refresh btn is clicked', function(){
//     browser.driver.sleep(2000);
//     var el = element(by.css('.refresh-btn'));
//     el.click();
//     //expect page to refresh
//     browser.pause();
//   });
// });
