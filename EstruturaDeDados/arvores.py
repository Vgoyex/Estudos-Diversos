class NoArvore:
    def __init__(self, chave=None, esquerda=None, direita=None):
        self.chave = chave
        self.esquerda = esquerda
        self.direita = direita
    def __repr__(self):
        return '%s <- %s -> %s' % (self.esquerda and self.esquerda.chave,
                                    self.chave,
                                    self.direita and self.direita.chave
                                    )
    
    
def inserir(raiz,value = None):
        #value = no/nodo
        if(value >= raiz):
            if(raiz.direita is None):
                raiz.direita.chave = value

        if(value <= raiz):
            if(raiz.esquerda is None):
                raiz.esquerda.chave = value
    

def emOrdem(raiz):
    if not raiz:
        return
    
    #visita o filho da esqurda
    emOrdem(raiz.esquerda)
    
    #visita o no corrente
    print(raiz.chave," | ",end="")

    #visita o filho da direita
    emOrdem(raiz.direita)

def preOrdem(raiz):
    if not raiz:
        return
    print(raiz.chave," | ", end="")
    preOrdem(raiz.esquerda)
    preOrdem(raiz.direita)

def posOrdem(raiz):
    if not raiz:
        return
    
    posOrdem(raiz.esquerda)
    posOrdem(raiz.direita)
    print(raiz.chave," | ", end="")


def buscar(raiz):
    if raiz is None:
        return

raiz = NoArvore(32)
raiz.esquerda = NoArvore(10)
raiz.direita = NoArvore(404)
raiz.direita.esquerda = NoArvore(57)
raiz.esquerda.esquerda = NoArvore(2)
raiz.esquerda.direita = NoArvore(20)
raiz.esquerda.direita.esquerda = NoArvore(17)
print("Árvore: ", raiz, raiz.esquerda,"\n",raiz.direita)

print("\n\nEm ordem")
emOrdem(raiz)
print('\n')
print("\n\nPRE ordem")
preOrdem(raiz)
print('\n')
print("\n\nPOS ordem")
posOrdem(raiz)
