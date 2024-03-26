/*
  conectividade          
  .                             critérios           
    conectividade-4
    conectividade-8
    conectividade-m


*/

let V = [1, 2, 3, 4, 5];

let trechoDaImagem = [
    12, 22, 1, 
    9,  3,  1, 
    34, 2,  4 ];

function achaP(trechoDaImagem) {
  let p = (() => {
    for (let i in trechoDaImagem) {
      let pos = Math.floor(trechoDaImagem.length / 2);
      let r = trechoDaImagem[pos];
      return r;
    }
  })();
  return p;
}
//
function conectividade4(trechoDaImagem) {
  /*
    pixel q dentro do conjunto v e q pertence a n4(p) 
*/
  let p = achaP(trechoDaImagem);
  let vizinhos = [];
  let q = trechoDaImagem;
  for (posicao in trechoDaImagem) {
    if (q[posicao] == p) {
      { continue; }
    } else {
      if (q[posicao] in V) {
        if (posicao == 1 || posicao == 3 || posicao == 5 || posicao == 7) {
          vizinhos.push(q[posicao]);
        }
      }
    }
  }
  return vizinhos;
}

function conectividade8(trechoDaImagem) {
  // pixel q dentro do conjunto v e q pertence a n8(p)
  let p = achaP(trechoDaImagem);
  let vizinhos = [];
  let q = trechoDaImagem;
  let position;
  for (posicao in trechoDaImagem) {
    if (q[posicao] == p) {
      { continue; }
    } else {
      if (q[posicao] in V) {
        vizinhos.push(q[posicao]);
      }
    }
  }
  return vizinhos;
}

function conectividadeM(trechoDaImagem) {
  // pixel q dentro do conjunto v e q pertence a n4(p) ou nd(p) e n4(p) intersecção n4(q) = { }
  let p = achaP(trechoDaImagem);
  let vizinhos = [];
  let q = trechoDaImagem;
  for (posicao in trechoDaImagem) {
    if (q[posicao] == p) {
      { continue; }
    } else {
        let cnct4 = conectividade4(trechoDaImagem);
        if(cnct4 in vizinhos){
          { continue; }
        }  
      if(conectividade4.length > 0){
        vizinhos.push(cnct4);
      }
      if(q[posicao]){
        
      }
    }
  }
  return vizinhos;
}
// p = 3
let a = conectividade4(trechoDaImagem);
let b = conectividade8(trechoDaImagem);
let c = conectividadeM(trechoDaImagem);

console.log(c);
