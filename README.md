# Introdução ao Repositório Node_pt-BR
Neste repositório em português, eu adicionei tudo que usei para aprender sobre o ambiente de execução Javascript server-side: Node.js. Aproveite o material para estudar também e me avise caso encontre algum erro. Que a força esteja com você!

# Sumário

1. [O que é o NVM?](#content0);
2. [Instalação do NVM](#content1);
3. [Utilização do NVM](#content2);
4. [O que é Node.js?](#content3);

# Conteúdo

### O que é o NVM?<a name="content0"></a>

É um gerenciador de “instâncias” Node.js, ou seja, uma ferramenta que nos permite possuir múltiplas instalações do Node.js em nossa máquina. Isso possibilita que uma mesma máquina consiga trabalhar com várias aplicações com versões de Node.js diferentes, sem a necessidade de instalar e desinstalar. O NVM funciona em qualquer shell compatível com POSIX (sh, dash, ksh, zsh, bash), em particular nestas plataformas: unix, macOS e Windows WSL.

### Instalação do NVM<a name="content1"></a>

##### Linux e MacOS

Todos o processo está documentado neste [link](https://github.com/nvm-sh/nvm#installation-and-update).

Para instalar, execute no shell a instrução abaixo:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | $SHELL
```

A instrução acima irá descarregar um repositório no endereço `~/.nvm` e fazer referência ao mesmo em um dos arquivos de profile do usuário corrente (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, `~/.bashrc`, etc.).

Caso queira conferir se de fato está tudo foi adicionado ao arquivo de profile, basta executar:

```shell
cat ~/.zshrc
```

Para utilizar o NVM basta fechar e abrir o terminal novamente, ou simplesmente recarregar o arquivo de profile:

```shell
source ~/.zshrc
```

Para verificar se está funcionando, execute:

```shell
nvm --version
```

##### Windows

Acesse este [link](https://github.com/coreybutler/nvm-windows/releases). Nele temos todas as versões do software e orientações de instalação. Baixa o arquivo `nvm-setup.zip`, extraia os arquivos e execute como administrador. Para verificar se está funcionando, execute:

```shell
nvm --version
```

### Utilização do NVM<a name="content2"></a>

As instruções abaixo são genéricas para sistemas Windows, Linux e MacOS.

Abra o terminal e digite:

```shell
nvm install 0.0.0
```

Lembre-se de trocar "0.0.0" pela versão que se deseja baixar. Caso queira saber qual versão é a mais atualizada, acesse o [site](https://nodejs.org/en) e veja qual versão já está disponível, sendo LTS a versão mais recomendada.

Agora que já instalamos a versão desejada, precisamos informar ao nvm qual iremos trabalhar. Execute no terminal:

```shell
nvm use 0.0.0
```

Caso você queira saber quais versões estão disponível para uso em seu ambiente local, execute no terminal:

```
nvm ls
```

Caso queira excluir alguma versão que não usa mais, execute:

```
nvm uninstall 0.0.0
```

Caso queira ver a lista de comando disponíveis, execute:

```shell
nvm
```

### O que é Node.js?<a name="content3"></a>

O Node.js pode ser definido como um **ambiente de execução Javascript server-side**. Isso significa que com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação *standalone* em uma máquina, não dependendo de um browser para a execução, como estamos acostumados.

# Referências

1. [**NVM - Gerencie múltiplas instalações do Node.js**](https://fabiojanio.medium.com/nvm-gerencie-m%C3%BAltiplas-instala%C3%A7%C3%B5es-do-node-js-6fcd0f13aaf7)

2. [**NVM Windows**](https://github.com/coreybutler/nvm-windows/releases)

3. [**Node.js documentantion**](https://nodejs.org/en/docs)
4. [**Node.js – O que é, como funciona e quais as vantagens**](https://www.opus-software.com.br/index.html%3Fp=7232.html)



