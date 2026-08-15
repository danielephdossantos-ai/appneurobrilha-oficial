# Plano de Configuração de Identidade Visual PWA - NeuroBrilha Kids

Este plano detalha a configuração do ícone oficial e das configurações de Progressive Web App (PWA) para garantir uma experiência nativa em dispositivos móveis.

## Alterações Propostas

### 1. Geração de Ativos Visuais
- [x] Processar a imagem fornecida para gerar os ícones nos formatos padrão:
  - `pwa-192x192.png`: Ícone para Android/Chrome.
  - `pwa-512x512.png`: Ícone de alta resolução e maskable.
  - `apple-touch-icon.png`: Ícone específico para iOS (180x180).
  - `favicon.ico` e `favicon-32x32.png`: Para navegadores desktop e abas.

### 2. Configuração do PWA (`vite.config.ts`)
- [x] Atualizar o plugin `VitePWA` com os metadados oficiais:
  - **Nome:** NeuroBrilha Kids
  - **Nome Curto:** NeuroBrilha
  - **Cores:** Definir cor do tema (`#7c3aed`) e fundo (`#ffffff`).
  - **Modo:** `standalone` (abre sem a barra do navegador).
  - **Start URL:** `/`
  - **Atualização:** Mudar para `autoUpdate` para garantir que o service worker se mantenha ativo e atualizado sem intervenção manual.

### 3. Integração no Head (`src/routes/__root.tsx`)
- [x] Atualizar as meta-tags e links para apontar corretamente para os novos ícones e o manifesto gerado pelo Vite.

### 4. Verificação e Build
- [ ] Executar o comando de build para confirmar que o plugin PWA gera corretamente os arquivos `manifest.webmanifest` e os service workers na pasta de distribuição.
- [ ] Verificar logs de console via Playwright para garantir que o Service Worker é registrado com sucesso.

## Detalhes Técnicos
- O sistema utiliza `vite-plugin-pwa`, que gera o manifesto em tempo de build.
- As imagens foram geradas usando `PIL` (Python) para garantir redimensionamento de alta qualidade (Lanczos).
- A configuração `purpose: "any maskable"` foi adicionada ao ícone de 512px para evitar bordas brancas indesejadas no Android.

Não será alterado nada no banco de dados, mascotes ou lógica de aulas.
