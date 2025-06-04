# SafraMax Download Portal

Portal web para download de arquivos de atualização para produtos SafraMax.

## Características

- Interface moderna com tema escuro
- Listagem de arquivos para download
- Design responsivo para diferentes dispositivos
- Compatível com arquivos APK e BIN

## Tecnologias utilizadas

- React
- TypeScript
- Tailwind CSS
- Vite

## Instruções para execução

### Desenvolvimento local

1. Clone o repositório
   ```bash
   git clone <seu-repositorio>
   cd saframax-download-portal
   ```

2. Instale as dependências
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento
   ```bash
   npm run dev
   ```

### Produção

1. Construa o projeto
   ```bash
   npm run build
   ```

2. Os arquivos otimizados estarão disponíveis na pasta `dist/`

## Estrutura de dados

Para adicionar ou modificar arquivos disponíveis para download, edite o arquivo `src/data/filesData.ts`.

Cada arquivo deve seguir esta estrutura:

```typescript
{
  id: number;
  productName: string;
  version: string;
  description: string;
  fileName: string;
  downloadUrl: string;
  imageUrl: string;
  additionalInfo?: string;
}
```

## Deployment

Para fazer o deploy em um contêiner:

1. Clone o repositório no seu contêiner
2. Instale as dependências com `npm install`
3. Construa o projeto com `npm run build`
4. Sirva os arquivos estáticos da pasta `dist/` usando um servidor web como Nginx

## Customização

- As cores principais podem ser ajustadas no arquivo `tailwind.config.js`
- Os estilos globais estão em `src/index.css`
- Os componentes individuais estão na pasta `src/components/`