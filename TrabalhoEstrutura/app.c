#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

/*
 Crie um algoritmo em linguagem C que
 utilize alocação de memória dinâmica
 e que procure um caminho entre um
 vértice de origem e um vértice de destino
*/

// Método lista de arestas
/*
struct grafo{
    int vIncidente;
    int vEmergente;
}aresta[];
*/

void main()
{
    setlocale(LC_ALL, "pt_BR.UTF-8");
    int qtdVertices;

    printf("Digite a quantidade de vértices: ");
    scanf("%d", &qtdVertices);
    printf("\n %d",qtdVertices);

    if(qtdVertices < 1 ){
        printf("Valor inserido para quantidade de vértices inválido!\n");
        exit(1);
    }

    int linhas = qtdVertices;
    int colunas = qtdVertices;

    // Aloca memória para o array de ponteiros (int**)
    int **matriz = (int **)malloc(qtdVertices * sizeof(int));

    if (matriz == NULL)
    {
        printf("Valor Inválido");
        exit(1);
    }

    // Aloca memória para cada linha da matriz
    for (int i = 0; i < linhas; i++)
    {
        matriz[i] = (int *)malloc(colunas * sizeof(int));
    }

    // Define as ligações da matriz
    printf("Definindo se possui ligação:\n");
    char possuiLigacao;
    int vOrigem, vDestino;
    for (int i = 0; i < linhas; i++)
    {
        for (int j = 0; j < colunas; j++)
        {
            vOrigem = i + 1;
            vDestino = j + 1;
            if (i == j)
            {
                matriz[i][j] = 0;
                continue;
            }
            printf("[%d] -> [%d]? S ou N: ", vOrigem, vDestino);
            scanf("%d");
            scanf("%c", &possuiLigacao);

            if (possuiLigacao == 'S' || possuiLigacao == 's')
            {
                matriz[i][j] = 1;
                printf("PossuiLigacao = Sim\n");
            }
            else
            {
                matriz[i][j] = 0;
                printf("PossuiLigacao = Não\n");
            }

            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }

    // Imprime testes
    printf("Teste n\t\torigem\tdestino\n");
    int n;
    for (int i = 0; i < linhas; i++)
    {
        for (int j = 0; j < colunas; j++)
        {
            n = i + 1;
            vOrigem = i + 1;
            vDestino = j + 1;
            if (matriz[i][j] == 1)
            {
                printf("%d\t\t%d\t%d\n\n", n, vOrigem, vDestino);
            }
        }
    }

    // Imprime a matriz
    printf("Matriz:\n");
    for (int i = 0; i < linhas; i++)
    {
        for (int j = 0; j < colunas; j++)
        {
            printf(" %d ", matriz[i][j]);
        }
        printf("\n");
    }

    // Libera a memória alocada
    for (int i = 0; i < linhas; i++)
    {
        free(matriz[i]);
    }
    free(matriz);
}
