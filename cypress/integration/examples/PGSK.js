
describe('MyVeryFirstTest', function() {
    
    it('Prihlasenie do tanis', function(){
        cy
            .visit('https://tapgsk.partnersgroup.sk/')
            
            .get('#frmsignInForm-login')
            .click()
        
            
    })

})    
