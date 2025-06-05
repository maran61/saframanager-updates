# Etapa 1: Build da aplicação com Node.js
FROM node:18-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia package.json e package-lock.json para instalar dependências
COPY package.json package-lock.json ./

# Instala as dependências necessárias
RUN npm install

# Copia todo o restante do código
COPY . .

# Executa o build da aplicação (sem rodar o script de atualização de datas)
# Usamos ‘npx vite build’ diretamente para pular o prebuild que atualizaria as datas.
RUN npx vite build

# Etapa 2: Servir os arquivos estáticos com NGINX
FROM nginx:alpine

# Remove a configuração padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia o build gerado na etapa anterior para a pasta padrão de conteúdo estático do nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponha a porta 80 para servir a aplicação
EXPOSE 5173

# Comando padrão ao iniciar o container
CMD ["nginx", "-g", "daemon off;"]
