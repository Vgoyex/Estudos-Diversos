use std::io::{self, Write};

fn main() {
    let mut buffer = String::new();

    print!("Digite a quantidade de vértices: ");
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut buffer).expect("Falha ao ler a entrada");
    let qtd_vertices: usize = buffer.trim().parse().expect("Valor inválido");

    let linhas = qtd_vertices;
    let colunas = qtd_vertices;

    // Aloca memória para o array de ponteiros
    let mut matriz: Vec<Vec<i32>> = Vec::with_capacity(linhas);
    for _ in 0..linhas {
        matriz.push(Vec::with_capacity(colunas));
    }

    // Define as ligações da matriz
    println!("Definindo se possui ligação:");
    for i in 0..linhas {
        for j in 0..colunas {
            let v_origem = i + 1;
            let v_destino = j + 1;
            if i == j {
                matriz[i].push(0);
                continue;
            }
            print!("[{}] -> [{}]? S ou N: ", v_origem, v_destino);
            io::stdout().flush().unwrap();
            buffer.clear();
            io::stdin().read_line(&mut buffer).expect("Falha ao ler a entrada");
            let possui_ligacao: char = buffer.trim().chars().next().unwrap();

            if possui_ligacao == 'S' || possui_ligacao == 's' {
                matriz[i].push(1);
                println!("PossuiLigacao = Sim");
            } else {
                matriz[i].push(0);
                println!("PossuiLigacao = Não");
            }

            println!("{}", matriz[i][j]);
        }
        println!();
    }

    // Imprime a matriz
    println!("Matriz:");
    for i in 0..linhas {
        for j in 0..colunas {
            print!(" {} ", matriz[i][j]);
        }
        println!();
    }

    // Imprime testes
    println!("Teste n\torigem\tdestino");
    for i in 0..linhas {
        let n = i + 1;
        let v_origem = i + 1;
        for j in 0..colunas {
            let v_destino = j + 1;
            if matriz[i][j] == 1 {
                println!("{}\t{}\t{}", n, v_origem, v_destino);
            }
        }
        println!();
    }
}
