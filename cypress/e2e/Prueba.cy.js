describe('Realizacion de prueba tecnica para credicorp capital', () => {

  
beforeEach(()=>{

  cy.visit('https://www.demoblaze.com/')
  
  })


  it('Realizar Registro de demozable', () => {

    cy.get('#signin2').click()
    cy.get('#sign-username').type('Sebastian2024', {timeout:10000, focus:true, force:true})
    cy.get('#sign-password').type('Colombia2024', {timeout:10000, focus:true, force:true})
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
    cy.wait(4000)    
  })

  it('Login en Demozable', () => {

    cy.get('#login2').click()
    cy.get('#loginusername').type('Sebastian2024', {timeout:10000, focus:true, force:true})
    cy.get('#loginpassword').type('Colombia2024', {timeout:10000, focus:true, force:true})
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
    cy.get('#nameofuser').should('be.visible')
         
  })


  it('Agregar al carrito de compras un celular', () => {

    cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click({force:true})
    cy.get('.col-sm-12 > .btn').click({Force:true})
    cy.get(':nth-child(4) > .nav-link').click({force:true})    
    cy.get('.success > :nth-child(2)').should('contain', 'Nexus 6');
    cy.get('.col-lg-1 > .btn').click({force:true})
    

         
  })




})