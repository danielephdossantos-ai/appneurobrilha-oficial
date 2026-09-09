# Abrir o NeuroBrilha no Windows

1. Extraia o ZIP inteiro. Não abra arquivos ainda dentro do ZIP.
2. Abra a pasta extraída no Visual Studio Code.
3. Clique duas vezes em `INICIAR_APP_WINDOWS.bat`.
4. Aguarde a instalação. Quando aparecer o endereço, abra `http://localhost:5000`.

O primeiro início demora mais porque instala as dependências. Nos próximos, basta executar `npm.cmd run dev` no terminal da pasta.

## Login Google e redefinição de senha

O aplicativo usa diretamente o projeto Supabase do NeuroBrilha. Para Google e os e-mails de redefinição funcionarem em um endereço publicado, esse endereço também deve estar autorizado em **Supabase > Authentication > URL Configuration**. Em teste local, autorize `http://localhost:5000/**`.

O botão Google depende de o provedor Google continuar ativado no Supabase. Contas criadas somente com Google não recebem uma senha automática utilizável; para usar e-mail e senha, use **Esqueci minha senha** e conclua o link recebido.
