describe('Verificar tabela de Air Speed', () => {
    it('Encontra o personagem com maior e menor Air Speed', () => {
      let valorMaior = -Infinity;
      let valorMenor = Infinity;
      let personagemMaior;
      let personagemMenor;
  
      cy.visit('https://ultimateframedata.com/stats.php');
  
      cy.get('#airspeed tbody tr').each(($row) => {
        const valorTexto = $row.find('td').eq(2).text();
        const valor = parseFloat(valorTexto.replace(',', '.'));
  
        if (!isNaN(valor)) {
          if (valor > valorMaior) {
            valorMaior = valor;
            personagemMaior = $row.find('td').eq(1).text();
          }
  
          if (valor < valorMenor) {
            valorMenor = valor;
            personagemMenor = $row.find('td').eq(1).text();
          }
        }
      }).then(() => {
        if (valorMaior !== -Infinity && valorMenor !== Infinity) {
          cy.log('Personagem com maior Air Speed:', personagemMaior, 'Air Speed:', valorMaior);
          cy.log('Personagem com menor Air Speed:', personagemMenor, 'Air Speed:', valorMenor);
        } else {
          cy.log('Nenhum valor numérico válido encontrado na tabela de Air Speed.');
        }
      });
    });
  });
  