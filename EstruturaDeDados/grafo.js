//lista de arestas
// const vertices = [1,2,3,4]
const arestas1 = 5;

class aresta{
    constructor(vEmergente,vIncidente){
        this.vEmergente = vEmergente;
        this.vIncidente = vIncidente;
    }
};

// const arestas = [
//     [1,2],
//     [1,3],
//     [1,4],
//     [2,4],
//     [3,4]
// ];
let vds = [[]];
function inicializar(vds){

    //Vertice 1
    vds[0][0] = 1; //liga com vertice 1? 
    vds[0][1] = 2; //liga com vertice 2?
    vds[0][2] = 1; //liga com vertice 3?
    vds[0][3] = 2; //liga com vertice 4?

    //Vertice 2
    vds[1][0] = 1; //liga com vertice 1?
    vds[1][1] = 2; //liga com vertice 2?
    vds[1][2] = 1; //liga com vertice 3?
    vds[1][3] = 2; //liga com vertice 4?

    //Vertice 3
    vds[2][0] = 1; //liga com vertice 1?
    vds[2][1] = 2; //liga com vertice 2?
    vds[2][2] = 1; //liga com vertice 3?
    vds[2][3] = 2; //liga com vertice 4?

    //Vertice 4
    vds[3][0] = 1; //liga com vertice 1?
    vds[3][1] = 2; //liga com vertice 2?
    vds[3][2] = 1; //liga com vertice 3?
    vds[3][3] = 2; //liga com vertice 4?
}

function printMatriz(matriz){
    console.log("\nMatriz\n");
    console.log("--------------------------\n");
    
  console.log("===========================\n");
  for(i in matriz){
    for(j in matriz){
        console.log(matriz[i][j])
    }
  }
  console.log("===========================\n");
}

function printListaDeArestas(arestas){
    console.log()
    let cont = 0;
    for(i in arestas){
        // cont++
        // console.log(`Aresta ${i} -> ${arestas[i]}`)
        for(j in arestas[i]){
            cont++
            console.log(`Aresta[${i}][${j}] -> ${arestas[i]}\n`);
        }
    }
    console.log(cont)
}


inicializar(vds);
printMatriz(vds);
// printListaDeArestas(arestas)