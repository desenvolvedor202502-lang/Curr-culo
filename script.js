  // Botão imprimir / salvar em PDF
    window.onkeydown = function(e) {
      if (e.ctrlKey && e.key === 'p') {
        window.print();
      }
    }