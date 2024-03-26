#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <malloc.h>
#define numAresta 5


#define V 5

int mAdj[V][V];

//Método por linha de arestas
struct grafo
{
  int vIncidente;
  int vEmergente;
}aresta[numAresta];

//Método por matriz
void inicializar(){
	//inicializando/criando o grafo
	setlocale(LC_ALL,"Portuguese");
	
	//vertice 1
	mAdj[0][0] = 0;
	mAdj[0][1] = 1; 
	mAdj[0][2] = 1; 
	mAdj[0][3] = 0; 
	
	//vertice 2
	mAdj[1][0] = 1;
	mAdj[1][1] = 0; 
	mAdj[1][2] = 0; 
	mAdj[1][3] = 1; 
	
	//vertice 3
	mAdj[2][0] = 1;
	mAdj[2][1] = 0; 
	mAdj[2][2] = 0; 
	mAdj[2][3] = 1; 
	
	//vertice 4
	mAdj[3][0] = 0;
	mAdj[3][1] = 1; 
	mAdj[3][2] = 1; 
	mAdj[3][3] = 0; 
}

void imprimirMatriz(){
	int i,j;
	for(i=0;i<30;i++) printf("=");
	printf("\n           Matriz          \n");
	for(i=0;i<30;i++) printf("-");
	printf("\n");
	for(i=0;i < V;i++){
		for(j=0;j< V;j++){
			printf("%d\t",mAdj[i][j]);
		}
		printf("\n");
	}
	for(i=0;i<30;i++) printf("=");
	printf("\n");
}
void main(void){
 inicializar();
 imprimirMatriz();


}