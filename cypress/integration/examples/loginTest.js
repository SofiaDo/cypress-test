describe ('loginTest', function(){
    it('populacia', function(){
      cy
            .visit('https://www.populacia.sk/')

            .get('#frm-loginForm-form-loginEmail')
            .type("sofi.dorociakova@gmail.com")

            .get('#frm-loginForm-form-loginPassword')
            .type("Zabudnem2016")

            .get('.btn.btn-blue.pull-left.front-page.btn_home_login')
            .click()
        
            .get('#headd > div.row > div:nth-child(2) > a:nth-child(1)')
            .click()

            
            
    })
})