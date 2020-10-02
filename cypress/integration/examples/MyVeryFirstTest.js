
describe('MyVeryFirstTest', function() {
    
    it('Ci toto funguje', function(){
        cy
            .visit('http://alexazoja.sk/')
            
            .title()
            .should('eq','Úvodná stránka - alexazoja.sk')
    })
    
    it('kontakty', function(){
        cy
            .get('#primary-menu > ul > li.page_item.page-item-10 > a')
            .click()
            
            .get('#post-10 > div > p:nth-child(1)')
            .contains('0904 538 590')
            .should('exist')

            .get('#post-10 > div > p:nth-child(2)')
            .should('have.text', 'e-mail: alexazoja@gmail.com')
    })

    it ('O Bublinkach', function(){
        cy
            .get ('.page-item-9 > a')
            .click()

            .get('.page-item-9 > a')
            .contains('O Bublinkách')
            .should('exist')


    })
            
   
});