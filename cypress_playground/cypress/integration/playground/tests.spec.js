/// <reference types="cypress" />


context('playground tests', () => {
    describe('open jw.org and do stuff', () => {
        it('make api call', () => {
        cy.request('/')
            .should((response) => {
            expect(response.status).to.eq(200)
            }) 
        })
            
        it('click a button', () => {
        cy.visit('/')
        cy.get('.iconLink').contains('ABOUT US').click()
        })

    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            equal([1, 2, 3].indexOf(4), -1)
            .should.equal(0)
            })
        })
    })
})
