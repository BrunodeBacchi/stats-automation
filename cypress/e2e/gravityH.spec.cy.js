describe('Verificar tabela de Gravity', () => {
  it('Encontra o personagem com maior e menor gravidade', () => {
    let valorMaior = -Infinity;
    let valorMenor = Infinity;
    let personagemMaior;
    let personagemMenor;

    cy.visit('https://ultimateframedata.com/stats.php');

    cy.get('#gravity tbody tr').each(($row) => {
      const valorTexto = $row.find('td').eq(1).text();
      const valor = parseFloat(valorTexto.replace(',', '.'));

      if (!isNaN(valor)) {
        if (valor > valorMaior) {
          valorMaior = valor;
          personagemMaior = $row.find('td').eq(0).text();
        }

        if (valor < valorMenor) {
          valorMenor = valor;
          personagemMenor = $row.find('td').eq(0).text();
        }
      }
    }).then(() => {
      if (valorMaior !== -Infinity && valorMenor !== Infinity) {
        cy.log('Personagem com maior gravidade:', personagemMaior, 'gravidade:', valorMaior);
        cy.log('Personagem com menor gravidade:', personagemMenor, 'gravidade:', valorMenor);
      } else {
        cy.log('Nenhum valor numérico válido encontrado na tabela de Gravity.');
      }
    }).then(() => {
      cy.get('.cd-nav-trigger > span').click();
        cy.get('.choosechar').click();
        cy.get('#searchbox').type(personagemMaior);
        cy.get('.fox > a').click();
        cy.get('.plain > :nth-child(7)');
    });
  });
});
