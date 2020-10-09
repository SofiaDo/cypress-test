describe('vikendovyTest', function(){
    it('otvorenie stranky malicek', function (){
        cy 
            . visit('https://www.malicek.sk/')
            . title()
            . should('contain', 'Malíček')
    })
    
    it('narodny panel - prihlasenie', function(){
        cy
            . visit('https://www.narodnypanel.sk/')
            . get('input[name=login]')
            . get('input[name=password]')
            
    })
    it('narodny panel - hlavicka', function(){
        cy
        
            . get('#header')
            . should('exist')
            . get('.header-menu')
            . should('exist')
            
    })
    it('narodny panel - registracia', function(){
        cy
        . get('[data-url="#sidebar-register"]')
        . click({force: true})
        
        . get('#register-form')
                
    })
})
