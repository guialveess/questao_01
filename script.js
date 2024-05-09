let contador = 1;
        document.getElementById('botao').addEventListener('click', () => {
            console.log(`Clique ${contador}`);
            contador++;
        });