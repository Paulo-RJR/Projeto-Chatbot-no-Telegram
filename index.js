//Importando a biblioteca do Telegram.
const TelegramBot = require('node-telegram-bot-api');
//Inserindo o token do meu bot criado no Telegram.
const token = '1154842448:AAEgEpkWi4Oy5VHtfA5HTexV9DuUJljRWyo';
//Crie um bot que use 'polling' para buscar novas atualizações.
const bot = new TelegramBot(token, {polling: true});
//Corresponde "/ echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    /*O 'msg' é a mensagem recebida do telegrama, 'match' é o resultado da execução da regexp acima no conteúdo do texto da mensagem.*/
    const chatId = msg.chat.id;
    const resp = match[1];  //Pega o "[whatever]".
    // Envia de volta o "tanto faz" correspondente ao chat.
    bot.sendMessage(chatId, resp);    
});
/*Escute qualquer tipo de mensagem. Existem diferentes tipos de
mensagens.*/
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    //Mostra os dados de quem enviou a mensagem do Telegram no terminal (Git Bash).
    //console.log(msg.chat); 
    //Mostra a mensagem do Telegram no terminal (Git Bash).
    console.log(msg.text);  
    //Envia uma mensagem para o chat confirmando o recebimento da mensagem.    
    //bot.sendMessage(chatId, 'Mensssagem recebida!');
    if(msg.text == 'oi'|| msg.text == 'olá' || msg.text == 'e ai' || msg.text == 'bom dia' || msg.text == 'boa tarde' || msg.text == 'boa noite'){
        bot.sendMessage(chatId, 'Olá, seja bem vindo(a) ao chat de pesquisa de produtos e preços Carrefour, o que procura?\n\nDica:\nPara fazer a sua pesquisa de uma forma mais simples, basta seguir o exemplo abaixo:\n\nPara buscar um Smartphone de uma marca específica é só digitar o nome desta (em letras minúsculas), mas caso deseje buscar todos os modelos e preços digite celular e você receberá um link que vai mostrar todos os modelos e preços existentes aqui no Carrefour.');
    }
    else if(msg.text == 'tchau' || msg.text == 'ok' || msg.text == 'até' || msg.text       == 'obrigado' || msg.text == 'valeu'){
        bot.sendMessage(chatId, 'Até mais, volte sempre!');
    }
    else if(msg.text == 'celular'){
        bot.sendMessage(chatId, 'https://www.carrefour.com.br/cf-promo-smartphones-0620?crfimt=hm-tlink|carrefour|menu|campanha|celular|1|270720');
    }
    else if(msg.text == 'samsung'){
        bot.sendMessage(chatId, 'https://www.carrefour.com.br/cf-promo-smartphones-0620?termo=%3Arelevance-nozipzone%3AMarca_ClassMaster%3ASamsung&text=&isGrid=true&sort=relevance#');
    }
    else if(msg.text == 'apple'){
        bot.sendMessage(chatId, 'https://www.carrefour.com.br/cf-promo-smartphones-0620?termo=%3Arelevance-nozipzone%3AMarca_ClassMaster%3AApple&text=&isGrid=true&sort=relevance#');
    }
    else if(msg.text == 'motorola'){
        bot.sendMessage(chatId, 'https://www.carrefour.com.br/cf-promo-smartphones-0620?termo=%3Arelevance-nozipzone%3AMarca_ClassMaster%3AMotorola&text=&isGrid=true&sort=relevance#');
    }
    else if(msg.text == 'asus'){
        bot.sendMessage(chatId, 'https://www.carrefour.com.br/cf-promo-smartphones-0620?termo=%3Arelevance-nozipzone%3AMarca_ClassMaster%3AAsus&text=&isGrid=true&sort=relevance#');
    }
    else if(msg.text == 'xiaomi'){
        bot.sendMessage(chatId, 'https://www.carrefour.com.br/loja-oficial-xiaomi?termo=%3Arelevance-nozipzone%3Anavegacao%3Acelular-e-smartphone');
    }
    else if(msg.text == 'mercado'){
        bot.sendMessage(chatId, 'https://www.carrefour.com.br/dicas/mercado?crfint=hm|header-menu|mercado|9');
    }    
    else if(msg.text != '/start' || msg.text != 'oi'|| msg.text != 'olá' || msg.text != 'e ai' || msg.text != 'bom dia' || msg.text != 'boa tarde' || msg.text != 'boa noite' || msg.text != 'tchau' || msg.text != 'ok' || msg.text != 'até' || msg.text != 'obrigado' || msg.text != 'valeu' || msg.text != 'celular' || msg.text != 'samsung' || msg.text != 'apple' ||    msg.text != 'motorola' || msg.text != 'asus' || msg.text != 'xiaomi' || msg.text != 'mercado'){
        bot.sendMessage(chatId, 'Desculpe, não entendi, digite novamente!\n');
    }    
});