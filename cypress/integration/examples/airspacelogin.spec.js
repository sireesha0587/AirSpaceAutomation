// Airspace QA Login

describe('Internet herokuapp', function ()
        {
            beforeEach(() =>
            {
            cy.visit('https://the-internet.herokuapp.com/login');
            })
    // Invalid Login User Test    
    it('01:Invalid User Test', function () 
         {
            cy.contains('Login Page').click()
            cy.get('input:first').type('xyz') // clear out username
            cy.get('input:last').type('123') // clear out password
            cy.get('.fa').click()
            cy.get('#flash').should('contain', 'Your username is invalid')
            })

    it('02:Login-Logout',function()
            {
    // Landing Page Test
            cy.contains('Login Page')
    //Enter the username
             cy.get('#username')
             .clear().type('tomsmith')
    // Enter password
            cy.get('#password')
            .clear().type('SuperSecretPassword!')
            cy.get('.fa').click();
    // Home Page Test, clicking log out.
            cy.contains('Secure Area')
            cy.get('.icon-2x').click()
        }
        )
        
                 
    }
    )