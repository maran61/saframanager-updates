# Etapa 1: Build da aplicação com Node.js + Git LFS
FROM node:18-alpine AS builder

# 1. Instala git e git-lfs no Alpine
RUN apk add --no-cache git git-lfs

# 2. Define o diretório de trabalho
WORKDIR /app

# 3. Copia TODO o repositório (incluindo .git, public/files, src, etc.)
#    Atenção: certifique-se de que .dockerignore NÃO esteja excluindo a pasta .git
COPY . .

# 4. Inicializa o LFS e baixa de fato os arquivos grandes (APKs, BINs)
RUN git lfs install \
 && git lfs pull --include="public/files/**"

# 5. Instala as dependências e executa o build do Vite
RUN npm install \
 && npx vite build

# Etapa 2: Servir os arquivos estáticos com NGINX
FROM nginx:alpine

# 6. Limpa a pasta padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# 7. Copia a pasta dist gerada pelo builder
COPY --from=builder /app/dist /usr/share/nginx/html

# 8. Expõe a porta 80 e inicia o nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
