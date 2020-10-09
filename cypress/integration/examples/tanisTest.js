describe('pouzivatelia - preklik', function(){
    it ('prihlasenie', function(){
        cy 
            .visit('https://tapgsk.partnersgroup.sk/')

            .get('#frmsignInForm-username')
            .click()
            .type("sofia.dorociakova")

            .get('#frmsignInForm-password')
            .click()
            .type("Zabudnem2016")

            .get('#frmsignInForm-login')
            .click()
            .should('exist')

    })
    it('tanis pouzivatelia', function(){
        cy
            .visit('https://tanis.partnersgroup.sk/')

            .get('#frmsignInForm-username')
            .click()
            .type("nis.test@partnersgroup.sk")

            .get('#frmsignInForm-password')
            .click()
            .type("0Dsx4MpeBB2b6hcVYsIu1H")

            .get('#frmsignInForm-login')
            .click()
            .should('exist')

    })
})