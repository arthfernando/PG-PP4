# PG-PP4
Projeto Parcial 4 - Processamento Gráfico
## Membros
- Arthur Fernando Miranda Bitencourt - 726497
- Gabriela Bergamo dos Santos - 760925
- Guilherme Quintal Goncalves - 620386
- Guilherme Vincolletti Cosimato - 726532

## Especificações
### Objetivo
Criar e visualizar uma cena 3D, mapeando os conceitos estudados.

### Pré-Requisitos
#### PP3
- Visualização de pelo menos 1 objeto 3D por membro do grupo, redimensionando e posicionando cada objeto individualmente no ambiente virtual;
- Definição de pelo menos uma câmera;
#### PP4
- Inclua pelo menos três movimentos, sendo pelo menos um deles dependente de outro;
- Definição de pelo menos duas câmeras;
- Altera a projeção de uma das câmeras;
- Definição de interações que alteram câmeras e movimentos;

### Características
- Desenvolvido com [ThreeJS](https://threejs.org/).
- Formas geométricas utilizadas: Cubo, Esfera, Icosaedro e Nó Toral.
- Todas as formas possuem aproximadamente o mesmo tamanho e estão dispostas em diferentes quadrantes do cenário.
- O Icosaedro possui uma animação onde seu tamanho é alterado constantemente.
- Cada forma geométrica possui uma cor e uma rotação específica.
- Todas as formas são originalmente renderizadas com wireframe. 

### Interação
- Botão **Toggle Perspective**: Altera a perspectiva da câmera.
- Botão **Switch Camera**: Muda a visão para a segunda câmera.
- Botão **Toggle Torus Knot/Sphere/Box/D20**: habilita/desabilita o wireframe do obejto em questão.
- **Up Arrow** (&#8593;): Move _Sphere_ em órbita para a direita.
- **Down Arrow** (&#8595;): Move _D20_ em órbita para baixo.
- **Right Arrow** (&#8594;): Move _Box_ em órbita para a esquerda.
- **Left Arrow** (&#8592;): Move _Torus Knot_ em órbita para cima.
