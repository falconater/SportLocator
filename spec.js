
// //basic hello title test in protractor:

// describe('get title', function(){
//   it('should have a title', function(){
//     browser.get('http://localhost:8080');
//     expect(browser.getTitle()).toEqual('GāME');

//   });
// });

// describe('refresh-btn', function(){
//   it('should refresh when clicked', function(){
//     var el = element(by.css('.refresh-btn'));
//     el.click()
//     //expect angular to refresh elements on the page
//     // browser.pause();
//   });
// });

// describe('enter city', function(){
//   it('should enter a city name', function(){
//     // browser.get('http://localhost:8080');
//     //this variable holds the selection
//     element(by.model('locationData')).sendKeys('Seattle');
//     var el = element(by.buttonText('Submit'));
//     el.click()
//     .then(function(){
//       // browser.pause();
//     })
//   });
// });

// describe('select sport', function(){
//   it('should select the first sport', function(){
//     // browser.driver.get('http://localhost:8080');
//     browser.sleep(3000);
//     element.all(by.css('.dropdown-toggle')).first().click();
   
//     element(by.cssContainingText('.sport-item', 'Gym')).click()
   
//     .then(function(){

//       browser.driver.sleep(2000);

//         var checkbox = element.all(by.css('.checkin-button.checkin.btn')).get(0);
//         var site = element.all(by.css('.sitename')).get(0).click()
//         .then(function(){
//           // browser.waitForAngular();
//           // browser.driver.sleep(1000);
//           checkbox.click();
//           // site.click();
//         });


// //second checkbox
//       // browser.driver.sleep(5000);
//       // var checkBox2 = element.all(by.css('.checkin-button.checkin.btn')).get(1);
//       // var site2 = element.all(by.css('.sitename')).get(1).click()
//       //   .then(function(){
//       //     // browser.waitForAngular();
//       //     // browser.driver.sleep(1000);
//       //     checkBox2.click();
//       //     // site.click();
//       //   });

//       // expect(site.getText()).toBe('CenturyLink Field');
//      // browser.pause();
//     });
   
//   });
// });

// describe('click review link', function(){
//   it('should have a clickable review link that opens a modal', function(){
//     browser.driver.sleep(2000);

//     // var reviewLink = 
//     element.all(by.css('.reviews')).get(0).click();
//     // browser.pause();
//   });
// });

// describe('input review', function(){
//   it('should accept user data in popup form', function(){
//     browser.driver.sleep(2000);
//     var modal = $('.modal-body')
//     var modalInput = modal.element(by.model('text'));
//     var postBtn = element(by.id('post-btn'));
// // browser.wait(EC.visibilityOf(modalInput), 5000);
//     modalInput.sendKeys('This is a brand new review feature.  Hey, it works!! --Protractor');
//     postBtn.click();
//    browser.pause();

//   });

// });

// // describe('post data', function(){
// //   it('should post data when the button is clicked', function(){

// //   });
// // });

// //next we write some expect clauses. 

// //retrieve the information from the database

// //next refactor into a page object to keep the test logic separate from the page elements

describe('feature test', function(){
  it('should have a title', function(){
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('GāME');
  });
//could put this at the end? use browser sleep
  it('should refresh when refresh btn is clicked', function(){
    var el = element(by.css('.refresh-btn'));
    el.click();
    //expect page to refresh
    // browser.pause();
  });
//can break this into checking the form data then navigating to seattle map
  it('should enter a city name', function(){
    element(by.model('locationData')).sendKeys('Seattle');
    var el = element(by.buttonText('Submit'));
    el.click();

    //expect city to equal seattle
  });

});

describe('choose sport', function(){
  it('should select the first sport', function(){
      browser.driver.sleep(1000);
      element.all(by.css('.dropdown-toggle')).first().click();
      element(by.cssContainingText('.sport-item', 'Soccer')).click()
  });

  it('should check the first site', function(){
    browser.driver.sleep(2000);
    var checkbox = element.all(by.css('.checkin-button.checkin.btn')).get(0);
    var site = element.all(by.css('.sitename')).get(0).click()
      .then(function(){
        checkbox.click();
        // browser.pause();
      });
  });
});

describe('click review link', function(){
  it('should have a clickable review link that opens a modal', function(){
    browser.driver.sleep(2000);
    element.all(by.css('.reviews')).get(0).click();
    // browser.pause();
  });
});

describe('input review', function(){
  it('should accept user data in popup form', function(){
    browser.driver.sleep(2000);
    var modal = $('.modal-body')
    var modalInput = modal.element(by.model('text'));
    var postBtn = element(by.id('post-btn'));
    modalInput.sendKeys('This is a brand new review feature.  Hey, it works!! --Protractor');
    postBtn.click();
    browser.pause();
  });
});


//how to query mongo db and check response obj for the data?

