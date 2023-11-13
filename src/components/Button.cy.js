import Button from './Button.vue';

describe('<Button />', () => {
  it('renders', () => {
    cy.mount(Button);
  });

  it('button should contain text "Test button"', () => {
    cy.mount(Button);
    cy.get('button').contains('Test button');
  });
  
  it('clicks the button', () => {
    cy.mount(Button);
    cy.get('button').contains('Test button').click();
  });
  
 
});
