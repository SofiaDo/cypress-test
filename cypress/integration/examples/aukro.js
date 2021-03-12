
    
            
beforeEach(() => {
    cy.visit('/')
  })

describe('Aukro', () => {
    it('visit page', () => {
      cy
        .get('#ssr-done > app-header > div:nth-child(3) > div > div.display-inline-block-min-tablet > header-navbar > div > div.nav-section.main-menu > top-level-category:nth-child(1) > div > a')
        .click()
        .wait(40000)
       cy
        .get('#mat-dialog-0 > email-collector-popup > header > a > i')
        .click()

        .get('#mat-checkbox-9 > label:nth-child(1) > span:nth-child(2)')
        .click(true)
        .wait(800)

        cy
        .get('.box-wrapper').each(wrapper => { 
            expect(wrapper).to.contain('Bezpečná Aukro platba')
            
        })

        cy
        .get('.hidden-max-tablet')
        .find('.quantity')
        //.each(quantity => {
         //   expect(quantity).to.contain.text('()')
           
        //})
        cy
          .get('#ssr-done > div > category-offer-loader > search-result-list > div > div > div.filter-sidebar-wrapper.m-r-3 > filter > categories > ul > li:nth-child(1) > a')
          .click()
          .wait(500)
        cy
        .get('.box-wrapper').each(wrapper => { 
            expect(wrapper).to.contain('Bezpečná Aukro platba')
            
        })
        cy
        .get('.product-header').its('length')
        .then(len => Math.floor(Math.floor(len) / 2)) //predpokladam, ze tu este treba doplnit zaokruhlenie, ak by bol neparny pocet zaznamov
        .then((index) => {
            cy.get('.product-header').eq(index).click()
            })
            .wait(100)
    
            .get('#ssr-done > div > product-profile > div.container.description.ng-star-inserted > heading > h1')
            .find('#payment-via-aukro')
            .should('exist')
    
            .get('#ssr-done > div > product-profile > product-details > div.no-padding.container > div > info > div.hidden-max-tablet-flex.justify-between.ng-star-inserted > delivery-info > ul')
            .find('#payment-via-aukro')
            .should('exist')
    
            cy
            .get('#ssr-done > div > product-profile > product-details > div.no-padding.container > div > info > div.box.m-b-2 > div.flex.column-max-tablet.justify-between > div.column-right.m-l-3-min-tablet')
            .then((button) => {
                if (button.text().includes('Přidat do košíku')) {
                  cy.get('#ssr-done > div > product-profile > product-details > div.no-padding.container > div > info > div.box.m-b-2.ng-star-inserted > div.flex.column-max-tablet.justify-between > div.column-right.m-l-3-min-tablet.ng-star-inserted > price-input > div > button')
                  .should('.toggle-on-touch', 'be.visible')
                } else { cy.get('#ssr-done > div > product-profile > product-details > div.no-padding.container > div > info > div.box.m-b-2.ng-star-inserted > div.flex.column-max-tablet.justify-between > div.column-right.m-l-3-min-tablet.ng-star-inserted > price-input > div.button-container.m-t-3.ng-star-inserted > button')
                    .click()
                    .wait(500)
                    .get('h1')
                    .should('have.text', 'Vítejte na Aukru!')
                }
            
              })
             
        })
    
      })
    