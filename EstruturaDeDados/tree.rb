# Classe NoArvore em Ruby
class NoArvore
    # Atributos da classe
    attr_accessor :chave, :esquerda, :direita
  
    # Construtor da classe
    def initialize(chave = nil, esquerda = nil, direita = nil)
      @chave = chave
      @esquerda = esquerda
      @direita = direita
    end
  
    # Método para representar a classe como uma string
    def to_s
      "#{@esquerda && @esquerda.chave} <- #{@chave} -> #{@direita && @direita.chave}"
    end
  end
  
  # Função para inserir um valor na árvore
  def inserir(raiz, value = nil)
    # value = no/nodo
    if value >= raiz.chave
      if raiz.direita.nil?
        raiz.direita = NoArvore.new(value)
      else
        inserir(raiz.direita, value)
      end
    end
  
    if value <= raiz.chave
      if raiz.esquerda.nil?
        raiz.esquerda = NoArvore.new(value)
      else
        inserir(raiz.esquerda, value)
      end
    end
  end
  
  # Função para percorrer a árvore em ordem
  def emOrdem(raiz)
    return if raiz.nil?
  
    # visita o filho da esquerda
    emOrdem(raiz.esquerda)
  
    # visita o nó corrente
    print "#{raiz.chave} | "
  
    # visita o filho da direita
    emOrdem(raiz.direita)
  end
  
  # Função para percorrer a árvore em pré-ordem
  def preOrdem(raiz)
    return if raiz.nil?
  
    # visita o nó corrente
    print "#{raiz.chave} | "
  
    # visita o filho da esquerda
    preOrdem(raiz.esquerda)
  
    # visita o filho da direita
    preOrdem(raiz.direita)
  end
  
  # Função para percorrer a árvore em pós-ordem
  def posOrdem(raiz)
    return if raiz.nil?
  
    # visita o filho da esquerda
    posOrdem(raiz.esquerda)
  
    # visita o filho da direita
    posOrdem(raiz.direita)
  
    # visita o nó corrente
    print "#{raiz.chave} | "
  end
  
  # Função para buscar um valor na árvore
  def buscar(raiz, value)
    return nil if raiz.nil?
  
    if value == raiz.chave
      return raiz
    elsif value < raiz.chave
      return buscar(raiz.esquerda, value)
    else
      return buscar(raiz.direita, value)
    end
  end
  
  # Código para criar uma árvore com sete nós
  raiz = NoArvore.new(32)
  raiz.esquerda = NoArvore.new(10)
  raiz.direita = NoArvore.new(404)
  raiz.direita.esquerda = NoArvore.new(57)
  raiz.esquerda.esquerda = NoArvore.new(2)
  raiz.esquerda.direita = NoArvore.new(20)
  raiz.esquerda.direita.esquerda = NoArvore.new(17)
  puts "Árvore: #{raiz}, #{raiz.esquerda}\n#{raiz.direita}"
  
  puts "\n\nEm ordem"
  emOrdem(raiz)
  puts "\n"
  preOrdem(raiz)
  puts "\n"
  posOrdem(raiz)
  