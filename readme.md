#Instruções para Configuração e Execução

> ### Evento: **NLW Pocket: Javascript** - Full-stack Intermediário - NodeJs e ReactJs

## Figma:

[Figma Template](<https://www.figma.com/design/KUjfYNb4n2E16zCGDMt2wK/NLW-Pocket-JS-%E2%80%A2-in.orbit-(Community)?node-id=82-2&node-type=canvas&t=xS2f65V2GN57EB53-0>)

## Docker

### Baixar Imagem e Executar Contêiner

#### Para iniciar o contêiner em segundo plano, use o seguinte comando:

```shell
docker compose up -d
```

### Listar Contêineres

#### Para listar todos os contêineres, use:

```shell
docker ps -a
```

### Verificar Logs de um Contêiner

#### Substitua `CONTAINER_ID` pelo ID do contêiner desejado para verificar os logs:

```shell
docker logs `COINTAINER ID`
```

## Drizzle Kit

### Gerar Scripts do Schema

#### Para gerar os scripts baseados no schema, execute:

```shell
npx drizzle-kit generate
```

### Executar Migrações

#### Para aplicar as migrações ao banco de dados, use:

```shell
npx drizzle-kit migrate
```

### Visualizar Banco de Dados

#### Para abrir o studio e visualizar o banco de dados, execute:

```shell
npx drizzle-kit studio

```

> ### Execução do **Backend**
>
> #### Comandos:
>
> ```shel
>  npm install
> ```
>
> ```shel
>  npm run seed
> ```
>
> ```shel
>  npm run dev
> ```

> ### Execução do **Frontend**
>
> #### Comandos:
>
> ```shel
>  npm install
> ```
>
> ```shel
>  npm run dev
> ```
