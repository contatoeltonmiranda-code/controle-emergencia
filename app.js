(function () {
  'use strict';

  var DADOS = {"versao":2,"atualizado":"2026-11-12","aviso":"Conteúdo educativo para preparação pessoal. Não substitui curso presencial certificado nem atendimento profissional. Sem dosagem de medicamentos.","abas":[{"id":"mochila","tipo":"checklist","nav":"Checklists","curto":"Mochila","nome":"Mochila de Emergência","intro":"Itens para sair de casa em poucos minutos e aguentar cerca de 72 horas. Referência: reel DfiP9injTdT (apps para usar sem internet, veja a aba Comunicação Offline). Guarde tudo em sacolas separadas dentro de um saco de lixo que impermeabiliza a mochila.","aviso":null,"grupos":[{"nome":"Documentos e orientação","nota":null,"itens":[{"id":"mochila-n01","nome":"Mapa atualizado offline","nota":"Impresso e também baixado no celular (veja o Organic Maps). Marque os pontos de encontro combinados.","legado":["mochila-15"]},{"id":"mochila-n02","nome":"Caderno com capa","nota":"Para anotar informações sem depender de celular ou rede."},{"id":"mochila-n03","nome":"Bloco de anotações e caneta"},{"id":"mochila-n04","nome":"Lista de telefones de emergência e contatos importantes","nota":"Impressa. SAMU 192, Bombeiros 193, Polícia 190, Defesa Civil 199.","legado":["mochila-14"]},{"id":"mochila-n05","nome":"Documentos","nota":"Cópias de RG, CPF, certidões e apólices em saco impermeável.","legado":["mochila-11"]},{"id":"mochila-12","nome":"Cópia digital dos documentos em pen drive"},{"id":"mochila-n06","nome":"Dinheiro em espécie","nota":"Em notas pequenas e moedas.","legado":["mochila-13"]}]},{"nome":"Água e comida","nota":null,"itens":[{"id":"mochila-n07","nome":"Garrafas de água","nota":"Ao menos 1 litro por pessoa por dia, para 3 dias. O estoque de casa fica na aba Alimentos e Água.","legado":["mochila-01"]},{"id":"mochila-n08","nome":"Enlatados","nota":"Escolha o que você já come e confira a validade."},{"id":"mochila-n09","nome":"Abridor de latas manual"},{"id":"mochila-03","nome":"Alimentos prontos para comer (barras de cereal, castanhas, frutas secas)"},{"id":"mochila-n10","nome":"Filtro portátil para água","nota":"Siga as instruções do fabricante. Para água de origem duvidosa, o Ministério da Saúde indica filtrar e desinfetar: 2 gotas de hipoclorito de sódio 2,5% por litro e 30 minutos de espera, ou ferver por 5 minutos.","legado":["mochila-02"]},{"id":"mochila-n11","nome":"Hidrosteril (pastilhas de purificação de água)","nota":"Siga a dose e o tempo de espera da embalagem.","legado":["mochila-02"]},{"id":"mochila-04","nome":"Copo, prato e talheres leves"}]},{"nome":"Luz, energia e comunicação","nota":null,"itens":[{"id":"mochila-n12","nome":"Lanterna","nota":"Com pilhas reserva. A de manivela também serve.","legado":["mochila-05"]},{"id":"mochila-n13","nome":"Lanterna de cabeça","nota":"Deixa as duas mãos livres.","via":["DLNI3HZsk5D"]},{"id":"mochila-n14","nome":"Pilhas reserva","legado":["mochila-10"]},{"id":"mochila-n15","nome":"Velas","nota":"Use base firme, longe de cortinas e de crianças. Nunca durma com vela acesa."},{"id":"mochila-n16","nome":"Carregador do celular (cabo e fonte)","legado":["mochila-08"]},{"id":"mochila-n17","nome":"Power bank","nota":"Mantenha carregado.","legado":["mochila-07"]},{"id":"mochila-n18","nome":"Rádio comunicador (walkie-talkie)","nota":"É o mesmo aparelho da aba Comunicação Offline; marque nas duas."},{"id":"mochila-n19","nome":"Rádio portátil (pilha ou manivela)","nota":"Para ouvir notícias e alertas.","legado":["mochila-06"]}]},{"nome":"Fogo, ferramentas e sinalização","nota":null,"itens":[{"id":"mochila-n20","nome":"Fósforos","nota":"Em saco impermeável.","legado":["mochila-23"]},{"id":"mochila-n21","nome":"Isqueiro","legado":["mochila-23"]},{"id":"mochila-n22","nome":"Apito","nota":"Para sinalização.","legado":["mochila-09"]},{"id":"mochila-n23","nome":"Bússola"},{"id":"mochila-n24","nome":"Canivete","legado":["mochila-22"]},{"id":"mochila-n25","nome":"Canivete multiuso","nota":"Com várias ferramentas (tipo suíço ou multiferramenta).","legado":["mochila-22"]},{"id":"mochila-n26","nome":"Machado"},{"id":"mochila-n27","nome":"Abraçadeiras de nylon (enforca-gato)","nota":"Servem para prender, amarrar e improvisar reparos."},{"id":"mochila-24","nome":"Fita adesiva reforçada"},{"id":"mochila-n28","nome":"Sacos de lixo","nota":"Para impermeabilizar a mochila e para improvisos.","legado":["mochila-25"]},{"id":"mochila-n29","nome":"Sacolas para organizar os itens","nota":"Uma sacola por tipo de item, dentro da mochila."}]},{"nome":"Roupas e abrigo","nota":null,"itens":[{"id":"mochila-n30","nome":"Luvas","nota":"De trabalho ou de proteção.","legado":["mochila-21"]},{"id":"mochila-n31","nome":"Boné"},{"id":"mochila-n32","nome":"Muda de roupa","nota":"Agasalho, meias e roupa íntima.","legado":["mochila-18"]},{"id":"mochila-n33","nome":"Corta-vento"},{"id":"mochila-n34","nome":"Manta aluminizada de emergência","legado":["mochila-16"]},{"id":"mochila-17","nome":"Capa de chuva"},{"id":"mochila-19","nome":"Calçado fechado e resistente"},{"id":"mochila-20","nome":"Saco de dormir ou cobertor leve"}]},{"nome":"Higiene e saúde","nota":null,"itens":[{"id":"mochila-n35","nome":"Kit de primeiros socorros","nota":"O conteúdo completo está na aba Kit de Primeiros Socorros.","legado":["mochila-31"]},{"id":"mochila-n36","nome":"Máscaras","legado":["mochila-28"]},{"id":"mochila-n37","nome":"Repelente"},{"id":"mochila-n38","nome":"Protetor solar"},{"id":"mochila-n39","nome":"Pasta de dente","legado":["mochila-26"]},{"id":"mochila-n40","nome":"Escova de dente","legado":["mochila-26"]},{"id":"mochila-n41","nome":"Sabonete","legado":["mochila-26"]},{"id":"mochila-n42","nome":"Desodorante"},{"id":"mochila-n43","nome":"Pente"},{"id":"mochila-n44","nome":"Toalha"},{"id":"mochila-n45","nome":"Lenços umedecidos","legado":["mochila-27"]},{"id":"mochila-n46","nome":"Álcool em gel","legado":["mochila-27"]},{"id":"mochila-n47","nome":"Papel higiênico","legado":["mochila-26"]},{"id":"mochila-n48","nome":"Absorventes"},{"id":"mochila-n49","nome":"Utilidades para bebês","nota":"Fraldas, lenços, mamadeira e o que o bebê usa.","legado":["mochila-32"]},{"id":"mochila-n50","nome":"Utilidades para pets","nota":"Ração, vasilha, coleira e o que o animal usa.","legado":["mochila-32"]},{"id":"mochila-29","nome":"Medicamentos de uso contínuo e cópia da receita"},{"id":"mochila-30","nome":"Óculos reserva ou lentes de contato"}]}],"extras":[]},{"id":"edc","tipo":"checklist","nav":"Checklists","curto":"EDC","nome":"EDC: kit do dia a dia","intro":"EDC (everyday carry) é o que você leva sempre consigo: pequenos itens que resolvem imprevistos do dia a dia e emergências. Baseado no infográfico do Refúgio BR.","aviso":null,"grupos":[{"nome":"Lâmina","nota":"Útil para cortes, pequenos reparos e diversas situações. Escolha um modelo seguro e legalizado.","itens":[{"id":"edc-01","nome":"Canivete"},{"id":"edc-02","nome":"Faca fixa com bainha"},{"id":"edc-03","nome":"Multiferramenta"},{"id":"edc-04","nome":"Estilete"}]},{"nome":"Corda","nota":"Serve para amarras, reparos e improvisos. Leve, resistente e versátil.","itens":[{"id":"edc-05","nome":"Paracord 550 (3 a 5 metros)"},{"id":"edc-06","nome":"Cordim fino"},{"id":"edc-07","nome":"Mosquetão mini"}]},{"nome":"Fogo","nota":"Podem ser úteis para acender fogo, fogão de camping ou velas.","itens":[{"id":"edc-08","nome":"Isqueiro"},{"id":"edc-09","nome":"Fósforos impermeáveis"},{"id":"edc-10","nome":"Pederneira (opcional)"},{"id":"edc-11","nome":"Acendedor natural (opcional)"}]},{"nome":"Iluminação","nota":"Prefira modelos resistentes e de boa autonomia.","itens":[{"id":"edc-12","nome":"Lanterna de bolso"},{"id":"edc-13","nome":"Lanterna de chaveiro"},{"id":"edc-14","nome":"Mini lanterna de cabeça (opcional)"}]},{"nome":"Primeiros socorros","nota":"Itens básicos para pequenos ferimentos. Ocupam pouco espaço e podem evitar problemas maiores.","itens":[{"id":"edc-15","nome":"Mini kit de primeiros socorros"},{"id":"edc-16","nome":"Curativos"},{"id":"edc-17","nome":"Lenço antisséptico"},{"id":"edc-18","nome":"Analgésico básico","nota":"Use conforme orientação médica ou a bula."}]},{"nome":"Outros","nota":"Adaptáveis à sua realidade. Ajudam em imprevistos do dia a dia. Mantenha tudo leve e organizado.","itens":[{"id":"edc-19","nome":"Bloco e caneta impermeável"},{"id":"edc-20","nome":"Fita duct tape (pequeno rolo)"},{"id":"edc-21","nome":"Apito"},{"id":"edc-22","nome":"Chaveiro multifunção"},{"id":"edc-23","nome":"Manta térmica compacta"}]}],"extras":[{"tipo":"lista","titulo":"Dicas importantes","itens":["Leve apenas o que você realmente usa.","Mantenha tudo organizado e acessível.","Verifique os itens regularmente.","Adapte o seu EDC ao seu dia a dia."]}]},{"id":"socorros","tipo":"checklist","nav":"Checklists","curto":"Primeiros socorros","nome":"Kit de Primeiros Socorros","intro":"Conteúdo do kit de casa e do carro. Medicamentos aparecem sem dosagem: use conforme orientação médica ou a bula.","aviso":null,"grupos":[{"nome":"Curativos e feridas","nota":null,"itens":[{"id":"socorros-01","nome":"Gaze estéril em pacotes"},{"id":"socorros-02","nome":"Compressas de gaze estéril"},{"id":"socorros-03","nome":"Esparadrapo"},{"id":"socorros-04","nome":"Fita microporosa (micropore)"},{"id":"socorros-05","nome":"Atadura de crepom (tamanhos variados)"},{"id":"socorros-06","nome":"Curativos adesivos de vários tamanhos"},{"id":"socorros-07","nome":"Soro fisiológico 0,9% em frascos"},{"id":"socorros-08","nome":"Antisséptico para a pele (clorexidina ou iodopovidona)"},{"id":"socorros-09","nome":"Álcool 70% para higienizar instrumentos"},{"id":"socorros-10","nome":"Pomada para queimaduras"}]},{"nome":"Instrumentos e proteção","nota":null,"itens":[{"id":"socorros-11","nome":"Luvas descartáveis de procedimento"},{"id":"socorros-12","nome":"Tesoura de ponta arredondada"},{"id":"socorros-13","nome":"Pinça"},{"id":"socorros-14","nome":"Termômetro digital"},{"id":"socorros-15","nome":"Máscaras descartáveis"},{"id":"socorros-16","nome":"Lanterna pequena com pilhas"},{"id":"socorros-17","nome":"Alfinetes de segurança"},{"id":"socorros-18","nome":"Saco plástico para descarte de material usado"}]},{"nome":"Imobilização e conforto","nota":null,"itens":[{"id":"socorros-19","nome":"Bandagem triangular (tipoia)"},{"id":"socorros-20","nome":"Talas ou imobilizadores moldáveis"},{"id":"socorros-21","nome":"Bolsa de gelo instantânea"},{"id":"socorros-22","nome":"Manta térmica"},{"id":"socorros-23","nome":"Protetor solar e repelente"}]},{"nome":"Medicamentos (usar conforme orientação médica ou bula)","nota":null,"itens":[{"id":"socorros-24","nome":"Analgésico e antitérmico (conforme orientação médica)"},{"id":"socorros-25","nome":"Antialérgico (conforme orientação médica)"},{"id":"socorros-26","nome":"Sais de reidratação oral"},{"id":"socorros-27","nome":"Medicamentos de uso contínuo de cada pessoa e cópia das receitas"}]},{"nome":"Informações","nota":null,"itens":[{"id":"socorros-28","nome":"Telefones úteis: SAMU 192, Bombeiros 193, Polícia 190, Defesa Civil 199"},{"id":"socorros-29","nome":"Guia de primeiros socorros impresso"},{"id":"socorros-30","nome":"Ficha com tipo sanguíneo, alergias e condições de saúde de cada pessoa"},{"id":"socorros-31","nome":"Bolsa ou caixa resistente, identificada e de fácil acesso"}]}],"extras":[]},{"id":"comunicacao","tipo":"checklist","nav":"Checklists","curto":"Comunicação","nome":"Comunicação Offline","intro":"Formas de se comunicar e se orientar sem internet. Todo app precisa ser baixado e configurado antes da emergência, com internet: na hora da crise a loja de aplicativos pode não abrir.","aviso":null,"grupos":[{"nome":"Aparelho e aplicativos","nota":null,"itens":[{"id":"comunicacao-01","nome":"Walkie-talkie offline","nota":"Rádio de curto alcance que funciona sem internet e sem sinal de celular. Em área urbana o alcance real costuma ser bem menor que o da embalagem. É o mesmo aparelho do item Rádio comunicador da mochila."},{"id":"comunicacao-02","nome":"Organic Maps offline","nota":"Mapas e navegação com GPS sem internet. Baixe o mapa da sua região antes, com internet.","link":{"texto":"organicmaps.app","url":"https://organicmaps.app"}},{"id":"comunicacao-03","nome":"Bridgefy (mensagens offline)","nota":"Mensagens por Bluetooth, sem internet e sem sinal. O alcance é curto, mas os aparelhos retransmitem as mensagens entre si.","link":{"texto":"bridgefy.me","url":"https://bridgefy.me"}},{"id":"comunicacao-04","nome":"Kiwix (internet offline)","nota":"Leitor que guarda a Wikipédia e outros conteúdos no aparelho para ler sem internet, inclusive a versão de medicina e primeiros socorros. Ocupa espaço: baixe só o que couber.","link":{"texto":"kiwix.org","url":"https://kiwix.org"}}]}],"extras":[{"tipo":"reel","titulo":"Resumo do reel de referência","reel":{"id":"DfiP9injTdT","url":"https://www.instagram.com/reel/DfiP9injTdT/","grupo":"D","pendente":false,"autor":"Bruno Belissimo · IA + Mente","titulo":"Apps de celular para emergência sem internet (mochila de emergência)","resumo":"Completa a lista de kit de emergência do governo (água, comida, lanterna, rádio de pilha) com o celular: 5 recursos para baixar antes da crise e usar sem internet. A legenda reforça: baixe hoje, pois a loja de apps não abre no apagão. Menciona também carregador solar e a conta de água por pessoa.","pontos":["Baixar com internet antes: no dia da crise a loja de apps não abre","Wikipédia offline (a fala diz 'Qwix', provavelmente Kiwix) com versão de medicina e primeiros socorros","AI Edge Gallery (Google): IA que roda em modo avião, sem conta Google, modelo de cerca de 1,5 GB; reconhece plantas pela câmera","Organic Maps: baixar o mapa da cidade antes; o GPS funciona sem dados, mas o mapa não aparece sozinho","BitChat: mensagens por Bluetooth, sem número e sem conta, alcance de cerca de 100 m por aparelho, retransmitindo de um celular a outro","Alerta da Defesa Civil chega sem internet, mas precisa de sinal 4G/5G; para receber também por SMS, enviar o CEP para 40199","Combinar os apps com carregador solar","Água: 2 litros por pessoa por dia; 72 horas = 6 litros por pessoa","Combinar com a família quais apps usar (grupo da família)"],"itens":["celular","carregador solar","Kiwix (provável)","AI Edge Gallery","Organic Maps","BitChat","alerta da Defesa Civil","água (2 L/pessoa/dia)","comida","lanterna","rádio de pilha"],"alertas":["Todo app precisa ser baixado e configurado antes da emergência, com internet","Alerta da Defesa Civil depende de sinal 4G/5G","Nome 'Qwix' veio do áudio; conferir o app correto antes de instalar"]}}]},{"id":"energia","tipo":"checklist","nav":"Checklists","curto":"Energia","nome":"Energia Autônoma","intro":"Itens para ter luz e carregar aparelhos sem depender da rede. Dimensionamento real de um sistema solar exige um instalador: use esta lista para saber o que existe e o que pesquisar.","aviso":null,"grupos":[{"nome":"Geração solar","nota":null,"itens":[{"id":"energia-01","nome":"Placa solar (painel fotovoltaico)","nota":"Gera corrente contínua. Precisa de controlador de carga e, para tomadas comuns, de inversor."},{"id":"energia-02","nome":"Painel solar portátil pequeno (USB)","nota":"Carrega o celular ao sol direto, mais devagar que na tomada. Teste antes de uma emergência.","via":["DJFW6IxNmXs","DfiP9injTdT"]},{"id":"energia-03","nome":"Power bank solar","nota":"A carga solar própria é lenta. Mantenha também carregado pela tomada."}]},{"nome":"Armazenamento e conversão","nota":null,"itens":[{"id":"energia-04","nome":"Bateria (estacionária ou de lítio)","nota":"É a parte mais cara do sistema. Dimensione pelo consumo e pelos dias sem sol."},{"id":"energia-05","nome":"Controlador de carga","nota":"Fica entre a placa e a bateria e evita que ela estrague rápido."},{"id":"energia-06","nome":"Inversor","nota":"Converte corrente contínua em alternada. Dimensione pela soma das cargas ligadas ao mesmo tempo."},{"id":"energia-07","nome":"Inversor híbrido (opcional)","nota":"Reúne controlador e inversor e conversa com placa, bateria e rede elétrica."},{"id":"energia-08","nome":"Fusível ou disjuntor para a bateria","nota":"Proteção contra curto-circuito; instale perto da bateria."},{"id":"energia-09","nome":"Estação de energia portátil (opcional)","nota":"Bateria, controlador e inversor numa só caixa. Solução pronta para cargas pequenas."}]},{"nome":"Plano B de energia e luz","nota":null,"itens":[{"id":"energia-10","nome":"Gerador a combustão","nota":"Use só ao ar livre, longe de portas e janelas: gera monóxido de carbono. Nunca ligue na instalação da casa sem chave reversora instalada por eletricista.","via":["DIhYCuAOm6o"]},{"id":"energia-11","nome":"Lampiões","nota":"Lampião a combustão só em ambiente ventilado, nunca em lugar fechado.","via":["DIhYCuAOm6o"]},{"id":"energia-12","nome":"Fogão de emergência","nota":"Use ao ar livre ou em local bem ventilado.","via":["DIhYCuAOm6o"]},{"id":"energia-13","nome":"Lanterna de água e sal (opcional)","nota":"Produto divulgado no reel, sem dados técnicos. Teste antes de contar com ele.","via":["DEXeoCTxAAr"]}]},{"nome":"Tarefas de pesquisa","nota":null,"itens":[{"id":"energia-14","nome":"Pesquisar placa solar barata e boa","nota":"Compare preço por watt, potência, garantia e etiqueta do Inmetro. Peça 2 ou 3 orçamentos.","tarefa":true},{"id":"energia-15","nome":"Calcular o consumo diário (Wh) dos itens essenciais","nota":"Celular, luz, rádio e o que mais não pode faltar. É a base para dimensionar placa e bateria.","tarefa":true}]}],"extras":[{"tipo":"reel","titulo":"Resumo do reel de referência","reel":{"id":"DfafmQfpaVU","url":"https://www.instagram.com/reel/DfafmQfpaVU/","grupo":"D","pendente":false,"autor":"E4 Energias Renováveis · Energia Solar · Azume","titulo":"Energia solar em casa: por que apaga com a bateria cheia","resumo":"Animação que conta como se monta um sistema solar residencial passo a passo e cada problema que surge: placa em corrente contínua, inversor, bateria, controlador de carga, limite de potência do inversor, dias de chuva e, por fim, inversor híbrido ligado à rede. A legenda promete um detalhe sobre bateria que quase ninguém conta antes de comprar, mas o vídeo só diz que bateria é a parte mais cara.","pontos":["Placa gera corrente contínua; a tomada usa alternada, por isso é preciso inversor","Sem bateria, a casa apaga à noite e pisca com nuvem","Bateria precisa de controlador de carga para não estragar rápido","Inversor pequeno desliga tudo se várias cargas ligam juntas (ex.: secador e micro-ondas), mesmo com a bateria cheia; dimensionar o inversor pela soma das cargas","Semana de chuva esvazia a bateria; aguentar uma semana sem sol exigiria muita bateria, a parte mais cara","Inversor híbrido junta controlador e inversor, conversa com placa, bateria e rede; a rede completa quando faltam sol e bateria","O que sobra vira crédito na conta de luz"],"itens":["placas solares","inversor","bateria","controlador de carga","inversor híbrido","rede elétrica"],"alertas":["Dimensionar a potência do inversor pela soma das cargas ligadas ao mesmo tempo","[não dito no vídeo] Vídeo educativo de cenário residencial, sem valores; consultar instalador para dimensionamento real"]}}]},{"id":"alimentos","tipo":"checklist","nav":"Checklists","curto":"Alimentos e água","nome":"Alimentos e Água","intro":"Estoque de casa. Toque em Como guardar nos itens que têm a dica de armazenamento. Água sanitária para tratar água: use a orientação do Ministério da Saúde (2 gotas de hipoclorito de sódio 2,5% por litro, 30 minutos de espera).","aviso":null,"grupos":[{"nome":"Água","nota":null,"itens":[{"id":"alimentos-01","nome":"Água potável armazenada (3 a 4 litros por pessoa por dia, para 3 dias no mínimo)","dica":[{"r":"Quantidade","t":"Reserve ao menos 4 litros por pessoa por dia (beber e higiene mínima), por no mínimo 3 dias e, se possível, 2 semanas. Some água para pets. Crianças, gestantes, idosos e clima quente exigem mais."},{"r":"Recipiente","t":"Use garrafas de água mineral lacradas ou bombonas e galões de grau alimentício (PEAD, geralmente azuis ou brancos, com símbolo de reciclagem 2 e indicação de uso alimentício). Nunca reutilize recipiente que já teve produto químico, combustível, leite ou suco (resíduos de leite e açúcar favorecem bactérias). Tampa com boa vedação."},{"r":"Limpeza do recipiente","l":["Lave por dentro com água e detergente neutro e enxágue bem.","Desinfete com solução de 1 colher de sopa (10 ml) de água sanitária sem perfume para 1 litro de água: espalhe por todas as superfícies internas e deixe agir por cerca de 10 minutos.","Descarte a solução e enxágue com água potável.","Deixe escorrer tampado ou encha imediatamente."]},{"r":"Enchimento","t":"Encha com água da rede pública (já clorada) ou água tratada. Se a água não for tratada, filtre e desinfete antes: 2 gotas de hipoclorito de sódio 2,5% por litro e 30 minutos de repouso (orientação do Ministério da Saúde), ou ferva por 5 minutos."},{"r":"Local","t":"Lugar fresco, escuro e longe do sol direto, de produtos químicos e combustível (o plástico pode absorver vapores). Bombonas cheias são pesadas: apoie em base firme, em altura baixa."},{"r":"Troca","t":"Troque a água armazenada por conta própria a cada 6 meses (orientação Ready.gov/FEMA). Água mineral comprada lacrada: respeite a validade do rótulo. Água tratada com gotas de hipoclorito em emergência deve ser consumida em até 24 horas (Ministério da Saúde)."}]},{"id":"alimentos-02","nome":"Reserva ampliada de água para 14 dias (meta ideal)","dica":[{"r":"Quantidade","t":"Reserve ao menos 4 litros por pessoa por dia (beber e higiene mínima), por no mínimo 3 dias e, se possível, 2 semanas. Some água para pets. Crianças, gestantes, idosos e clima quente exigem mais."},{"r":"Recipiente","t":"Use garrafas de água mineral lacradas ou bombonas e galões de grau alimentício (PEAD, geralmente azuis ou brancos, com símbolo de reciclagem 2 e indicação de uso alimentício). Nunca reutilize recipiente que já teve produto químico, combustível, leite ou suco (resíduos de leite e açúcar favorecem bactérias). Tampa com boa vedação."},{"r":"Limpeza do recipiente","l":["Lave por dentro com água e detergente neutro e enxágue bem.","Desinfete com solução de 1 colher de sopa (10 ml) de água sanitária sem perfume para 1 litro de água: espalhe por todas as superfícies internas e deixe agir por cerca de 10 minutos.","Descarte a solução e enxágue com água potável.","Deixe escorrer tampado ou encha imediatamente."]},{"r":"Enchimento","t":"Encha com água da rede pública (já clorada) ou água tratada. Se a água não for tratada, filtre e desinfete antes: 2 gotas de hipoclorito de sódio 2,5% por litro e 30 minutos de repouso (orientação do Ministério da Saúde), ou ferva por 5 minutos."},{"r":"Local","t":"Lugar fresco, escuro e longe do sol direto, de produtos químicos e combustível (o plástico pode absorver vapores). Bombonas cheias são pesadas: apoie em base firme, em altura baixa."},{"r":"Troca","t":"Troque a água armazenada por conta própria a cada 6 meses (orientação Ready.gov/FEMA). Água mineral comprada lacrada: respeite a validade do rótulo. Água tratada com gotas de hipoclorito em emergência deve ser consumida em até 24 horas (Ministério da Saúde)."}]},{"id":"alimentos-03","nome":"Recipientes limpos e com tampa para armazenar água","dica":[{"r":"Quantidade","t":"Reserve ao menos 4 litros por pessoa por dia (beber e higiene mínima), por no mínimo 3 dias e, se possível, 2 semanas. Some água para pets. Crianças, gestantes, idosos e clima quente exigem mais."},{"r":"Recipiente","t":"Use garrafas de água mineral lacradas ou bombonas e galões de grau alimentício (PEAD, geralmente azuis ou brancos, com símbolo de reciclagem 2 e indicação de uso alimentício). Nunca reutilize recipiente que já teve produto químico, combustível, leite ou suco (resíduos de leite e açúcar favorecem bactérias). Tampa com boa vedação."},{"r":"Limpeza do recipiente","l":["Lave por dentro com água e detergente neutro e enxágue bem.","Desinfete com solução de 1 colher de sopa (10 ml) de água sanitária sem perfume para 1 litro de água: espalhe por todas as superfícies internas e deixe agir por cerca de 10 minutos.","Descarte a solução e enxágue com água potável.","Deixe escorrer tampado ou encha imediatamente."]},{"r":"Enchimento","t":"Encha com água da rede pública (já clorada) ou água tratada. Se a água não for tratada, filtre e desinfete antes: 2 gotas de hipoclorito de sódio 2,5% por litro e 30 minutos de repouso (orientação do Ministério da Saúde), ou ferva por 5 minutos."},{"r":"Local","t":"Lugar fresco, escuro e longe do sol direto, de produtos químicos e combustível (o plástico pode absorver vapores). Bombonas cheias são pesadas: apoie em base firme, em altura baixa."},{"r":"Troca","t":"Troque a água armazenada por conta própria a cada 6 meses (orientação Ready.gov/FEMA). Água mineral comprada lacrada: respeite a validade do rótulo. Água tratada com gotas de hipoclorito em emergência deve ser consumida em até 24 horas (Ministério da Saúde)."}]},{"id":"alimentos-n01","nome":"Tambor de água","nota":"Bombona de grau alimentício, com tampa de rosca e vedação.","dica":[{"r":"Tipo","t":"Bombona ou tambor de PEAD de grau alimentício, com tampa de rosca e vedação; modelos de 20 a 50 L são mais fáceis de manusear. Tambores de 200 L exigem bomba manual ou torneira e base firme."},{"r":"Cuidados","l":["Identifique com etiqueta: data do enchimento e próxima troca","Mantenha sempre tampado","Retire água com bomba, torneira ou concha limpa, nunca com a mão ou copo sujo","Inspecione cor, cheiro e presença de algas na troca"]},{"r":"Água de origem duvidosa","t":"Para tornar segura água de origem duvidosa: 2 gotas de hipoclorito de sódio 2,5% por litro, repouso de 30 minutos, consumo em até 24 horas. Se usar água sanitária, ela deve conter apenas hipoclorito de sódio e água, sem perfume ou alvejante extra. Na falta, filtre e ferva por 5 minutos."}]},{"id":"alimentos-04","nome":"Água sanitária sem perfume ou aditivos, para tratar água","nota":"Orientação do Ministério da Saúde: 2 gotas de hipoclorito de sódio 2,5% por litro, 30 minutos de espera. Só hipoclorito de sódio e água, sem perfume.","dica":[{"r":"Tipo","t":"Bombona ou tambor de PEAD de grau alimentício, com tampa de rosca e vedação; modelos de 20 a 50 L são mais fáceis de manusear. Tambores de 200 L exigem bomba manual ou torneira e base firme."},{"r":"Cuidados","l":["Identifique com etiqueta: data do enchimento e próxima troca","Mantenha sempre tampado","Retire água com bomba, torneira ou concha limpa, nunca com a mão ou copo sujo","Inspecione cor, cheiro e presença de algas na troca"]},{"r":"Água de origem duvidosa","t":"Para tornar segura água de origem duvidosa: 2 gotas de hipoclorito de sódio 2,5% por litro, repouso de 30 minutos, consumo em até 24 horas. Se usar água sanitária, ela deve conter apenas hipoclorito de sódio e água, sem perfume ou alvejante extra. Na falta, filtre e ferva por 5 minutos."}]},{"id":"alimentos-n07","nome":"Conta-gotas para dosar o hipoclorito","via":["DKIG6PMMhn1"]},{"id":"alimentos-n09","nome":"Baldes e panelas grandes, para encher de água se a torneira ainda funcionar","nota":"Use recipientes limpos e tampe depois de encher.","via":["DIhYCuAOm6o"]}]},{"nome":"Grãos e massas","nota":null,"itens":[{"id":"alimentos-05","nome":"Arroz","dica":[{"r":"Validade aproximada","t":"1 a 2 anos em recipiente hermético; siga o rótulo"},{"r":"Recipiente","t":"Pote hermético ou balde alimentício com tampa vedada. Para longo prazo, embalagem a vácuo ou saco aluminizado com absorvedor de oxigênio."},{"r":"Local","t":"Fresco, seco e escuro"},{"r":"Dicas","t":"Arroz integral dura menos (cerca de 6 meses), pois o óleo do farelo rança. Uma folha de louro no pote ajuda a afastar carunchos, mas não substitui a vedação."},{"r":"Sinais de descarte","l":["Insetos ou carunchos","Mofo ou umidade","Cheiro de ranço ou mofo"]}]},{"id":"alimentos-06","nome":"Feijão seco","dica":[{"r":"Validade aproximada","t":"1 ano com boa qualidade; depois continua seguro se seco, mas endurece e demora mais a cozinhar"},{"r":"Recipiente","t":"Pote hermético ou balde alimentício"},{"r":"Local","t":"Fresco, seco e escuro"},{"r":"Dicas","t":"Feijão muito velho pode não amolecer. Deixe de molho antes de cozinhar e descarte a água do molho. Gire o estoque."},{"r":"Sinais de descarte","l":["Carunchos ou furos nos grãos","Mofo","Cheiro estranho"]}]},{"id":"alimentos-07","nome":"Macarrão","dica":[{"r":"Validade aproximada","t":"1 a 2 anos; siga o rótulo"},{"r":"Recipiente","t":"Embalagem original fechada dentro de caixa ou pote hermético"},{"r":"Local","t":"Fresco e seco"},{"r":"Dicas","t":"Massa com ovos ou integral dura menos que a de sêmola simples. Ótimo custo-benefício para o estoque."},{"r":"Sinais de descarte","l":["Insetos","Umidade ou mofo","Cheiro estranho"]}]},{"id":"alimentos-08","nome":"Aveia em flocos","dica":[{"r":"Validade aproximada","t":"6 meses a 1 ano em recipiente hermético"},{"r":"Recipiente","t":"Pote hermético ou embalagem a vácuo"},{"r":"Local","t":"Fresco, seco e escuro"},{"r":"Dicas","t":"A aveia contém gordura e pode rançar. Flocos rendem mais que farelo no armazenamento."},{"r":"Sinais de descarte","l":["Cheiro de ranço","Insetos","Mofo"]}]},{"id":"alimentos-09","nome":"Farinha (mandioca ou trigo)","dica":[{"r":"Validade aproximada","t":"6 meses a 1 ano (integral: menos, cerca de 3 meses)"},{"r":"Recipiente","t":"Pote hermético; fora da embalagem de papel original"},{"r":"Local","t":"Fresco e seco; congelar por alguns dias antes de guardar ajuda a eliminar ovos de insetos"},{"r":"Dicas","t":"A farinha integral tem óleo e rança mais rápido. Farinha de mandioca também deve ficar em pote fechado, longe de umidade."},{"r":"Sinais de descarte","l":["Cheiro azedo ou de ranço","Insetos ou teias","Grumos com umidade ou mofo"]}]},{"id":"alimentos-10","nome":"Biscoito água e sal ou cream cracker"}]},{"nome":"Enlatados e conservas","nota":null,"itens":[{"id":"alimentos-n02","nome":"Sardinha em lata","legado":["alimentos-11"],"dica":[{"r":"Validade aproximada","t":"Siga o rótulo. Referência USDA: alimentos ácidos (tomate, frutas) 12 a 18 meses; baixa acidez (carnes, peixes, legumes) 2 a 5 anos"},{"r":"Recipiente","t":"A própria lata, íntegra"},{"r":"Local","t":"Fresco e seco; umidade enferruja a lata"},{"r":"Dicas","t":"Depois de aberto, transfira o que sobrar para pote de vidro ou plástico e leve à geladeira. Tenha abridor de latas manual no estoque."},{"r":"Sinais de descarte","l":["Lata estufada ou com tampa abaulada: DESCARTAR sem abrir (risco de botulismo)","Vazamento ou lata úmida","Amassado na costura ou na borda","Ferrugem profunda","Jato de líquido ou espuma ao abrir","Cheiro ruim ou aparência alterada","Nunca prove para conferir"]}]},{"id":"alimentos-n03","nome":"Atum em lata","legado":["alimentos-11"],"dica":[{"r":"Validade aproximada","t":"Siga o rótulo. Referência USDA: alimentos ácidos (tomate, frutas) 12 a 18 meses; baixa acidez (carnes, peixes, legumes) 2 a 5 anos"},{"r":"Recipiente","t":"A própria lata, íntegra"},{"r":"Local","t":"Fresco e seco; umidade enferruja a lata"},{"r":"Dicas","t":"Depois de aberto, transfira o que sobrar para pote de vidro ou plástico e leve à geladeira. Tenha abridor de latas manual no estoque."},{"r":"Sinais de descarte","l":["Lata estufada ou com tampa abaulada: DESCARTAR sem abrir (risco de botulismo)","Vazamento ou lata úmida","Amassado na costura ou na borda","Ferrugem profunda","Jato de líquido ou espuma ao abrir","Cheiro ruim ou aparência alterada","Nunca prove para conferir"]}]},{"id":"alimentos-12","nome":"Milho e ervilha em lata","dica":[{"r":"Validade aproximada","t":"Siga o rótulo. Referência USDA: alimentos ácidos (tomate, frutas) 12 a 18 meses; baixa acidez (carnes, peixes, legumes) 2 a 5 anos"},{"r":"Recipiente","t":"A própria lata, íntegra"},{"r":"Local","t":"Fresco e seco; umidade enferruja a lata"},{"r":"Dicas","t":"Depois de aberto, transfira o que sobrar para pote de vidro ou plástico e leve à geladeira. Tenha abridor de latas manual no estoque."},{"r":"Sinais de descarte","l":["Lata estufada ou com tampa abaulada: DESCARTAR sem abrir (risco de botulismo)","Vazamento ou lata úmida","Amassado na costura ou na borda","Ferrugem profunda","Jato de líquido ou espuma ao abrir","Cheiro ruim ou aparência alterada","Nunca prove para conferir"]}]},{"id":"alimentos-13","nome":"Feijão enlatado (ou legumes prontos em lata)","dica":[{"r":"Validade aproximada","t":"Siga o rótulo. Referência USDA: alimentos ácidos (tomate, frutas) 12 a 18 meses; baixa acidez (carnes, peixes, legumes) 2 a 5 anos"},{"r":"Recipiente","t":"A própria lata, íntegra"},{"r":"Local","t":"Fresco e seco; umidade enferruja a lata"},{"r":"Dicas","t":"Depois de aberto, transfira o que sobrar para pote de vidro ou plástico e leve à geladeira. Tenha abridor de latas manual no estoque."},{"r":"Sinais de descarte","l":["Lata estufada ou com tampa abaulada: DESCARTAR sem abrir (risco de botulismo)","Vazamento ou lata úmida","Amassado na costura ou na borda","Ferrugem profunda","Jato de líquido ou espuma ao abrir","Cheiro ruim ou aparência alterada","Nunca prove para conferir"]}]},{"id":"alimentos-14","nome":"Molho de tomate (lata ou sachê)","dica":[{"r":"Validade aproximada","t":"Siga o rótulo. Referência USDA: alimentos ácidos (tomate, frutas) 12 a 18 meses; baixa acidez (carnes, peixes, legumes) 2 a 5 anos"},{"r":"Recipiente","t":"A própria lata, íntegra"},{"r":"Local","t":"Fresco e seco; umidade enferruja a lata"},{"r":"Dicas","t":"Depois de aberto, transfira o que sobrar para pote de vidro ou plástico e leve à geladeira. Tenha abridor de latas manual no estoque."},{"r":"Sinais de descarte","l":["Lata estufada ou com tampa abaulada: DESCARTAR sem abrir (risco de botulismo)","Vazamento ou lata úmida","Amassado na costura ou na borda","Ferrugem profunda","Jato de líquido ou espuma ao abrir","Cheiro ruim ou aparência alterada","Nunca prove para conferir"]}]},{"id":"alimentos-15","nome":"Sopas ou refeições prontas de longa duração"}]},{"nome":"Despensa básica","nota":null,"itens":[{"id":"alimentos-16","nome":"Sal","dica":[{"r":"Validade aproximada","t":"Não estraga se seco; o sal iodado tem validade no rótulo por causa do iodo"},{"r":"Recipiente","t":"Pote hermético (absorve umidade e empedra)"},{"r":"Local","t":"Seco"},{"r":"Dicas","t":"Útil também para conservar alimentos (salga). Grãos de arroz cru no saleiro ajudam a absorver umidade."},{"r":"Sinais de descarte","l":["Contaminação por sujeira ou insetos"]}]},{"id":"alimentos-17","nome":"Açúcar","dica":[{"r":"Validade aproximada","t":"Indeterminada se mantido seco; siga o rótulo"},{"r":"Recipiente","t":"Pote hermético"},{"r":"Local","t":"Seco, longe de formigas"},{"r":"Dicas","t":"Se empedrar, ainda serve; quebre os torrões. Mel puro também dura muito tempo."},{"r":"Sinais de descarte","l":["Formigas ou insetos","Mofo por umidade"]}]},{"id":"alimentos-18","nome":"Óleo","dica":[{"r":"Validade aproximada","t":"Siga o rótulo; fechado costuma durar cerca de 1 ano ou mais"},{"r":"Recipiente","t":"Embalagem original fechada"},{"r":"Local","t":"Escuro e fresco (luz acelera a rancidez)"},{"r":"Dicas","t":"Depois de aberto, use em poucos meses. Prefira embalagens menores para não abrir muito de uma vez."},{"r":"Sinais de descarte","l":["Cheiro de ranço","Gosto amargo","Turvação ou mofo"]}]},{"id":"alimentos-19","nome":"Leite em pó ou longa vida"},{"id":"alimentos-20","nome":"Café ou chá"},{"id":"alimentos-21","nome":"Mel"},{"id":"alimentos-22","nome":"Pasta de amendoim"},{"id":"alimentos-23","nome":"Frutas secas e castanhas","dica":[{"r":"Validade aproximada","t":"6 meses a 1 ano em recipiente hermético"},{"r":"Recipiente","t":"Pote hermético ou embalagem a vácuo"},{"r":"Local","t":"Fresco e escuro; a geladeira prolonga a vida útil das castanhas"},{"r":"Dicas","t":"Castanhas rançam pela gordura. Frutas secas podem cristalizar açúcar na superfície, o que não é estrago."},{"r":"Sinais de descarte","l":["Ranço","Mofo","Insetos"]}]},{"id":"alimentos-24","nome":"Barras de cereal"},{"id":"alimentos-n04","nome":"Proteína de soja texturizada","via":["DKz68kdRF3F"]}]},{"nome":"Utensílios e preparo","nota":null,"itens":[{"id":"alimentos-25","nome":"Abridor de lata manual"},{"id":"alimentos-26","nome":"Fogareiro portátil com gás reserva"},{"id":"alimentos-27","nome":"Panela"},{"id":"alimentos-28","nome":"Fósforos ou isqueiro"},{"id":"alimentos-29","nome":"Pratos, copos e talheres descartáveis"},{"id":"alimentos-30","nome":"Papel-alumínio e papel-toalha"},{"id":"alimentos-31","nome":"Potes herméticos e sacos com fecho"},{"id":"alimentos-32","nome":"Caixa térmica"},{"id":"alimentos-n05","nome":"Garrafas PET limpas e secas, para guardar grãos e sal","nota":"Os reels vedam com chama dentro da garrafa, o que tem risco de queimadura e incêndio. Tampa bem fechada e garrafa 100% seca já ajudam a proteger o alimento.","via":["DHmXhcCy--q","DMVt7LhxFNm","DKz68kdRF3F"]},{"id":"alimentos-n06","nome":"Funil para encher as garrafas","via":["DHmXhcCy--q","DMVt7LhxFNm"]},{"id":"alimentos-n08","nome":"Fita isolante ou fita crepe, para vedar e datar","via":["DHmXhcCy--q"]}]},{"nome":"Organização e necessidades especiais","nota":null,"itens":[{"id":"alimentos-33","nome":"Etiquetas com data de validade"},{"id":"alimentos-34","nome":"Revisão das validades a cada 6 meses"},{"id":"alimentos-35","nome":"Alimentos para bebês, idosos ou dieta especial (se houver)"},{"id":"alimentos-36","nome":"Ração e água para animais de estimação (se houver)"}]}],"extras":[{"tipo":"armazenamento","titulo":"Regras gerais de armazenamento","aviso":"Prazos são referências aproximadas para produto fechado em boas condições. Siga sempre a validade do rótulo e descarte qualquer alimento com cheiro, cor, textura, mofo ou insetos.","principios":[{"regra":"PEPS (primeiro que entra, primeiro que sai)","como":"Coloque o que acabou de comprar atrás e use primeiro o que está na frente. Escreva a data de compra com caneta permanente. Estoque o que a família já come, para girar naturalmente."},{"regra":"Local fresco, seco e escuro","como":"Calor, umidade e luz aceleram rancidez e perda de nutrientes. Evite cozinha quente, perto do fogão, geladeira ou paredes que pegam sol. Ideal abaixo de cerca de 25 graus."},{"regra":"Fora do chão e da parede","como":"Use prateleiras ou paletes, deixando espaço para circular ar e inspecionar. Isso evita umidade e facilita achar pragas."},{"regra":"Recipientes herméticos","como":"Potes de vidro ou plástico alimentício com tampa vedada, ou baldes de grau alimentício com tampa de vedação. Protegem de umidade, insetos e roedores."},{"regra":"Inspeção mensal","como":"Confira validade, vedação, insetos, mofo e latas danificadas. Registre no sistema de checklist o que precisa repor."},{"regra":"Produtos de limpeza separados","como":"Nunca guarde alimentos junto com produtos químicos, combustível ou veneno."}],"pragas":["Inspecione os pacotes ao comprar e não leve para casa embalagens furadas.","Congelar grãos e farinhas por 3 a 4 dias antes de guardar ajuda a eliminar ovos de insetos.","Mantenha o local limpo, sem farelos, e vede frestas contra roedores.","Se achar carunchos em um pote, isole, descarte o conteúdo infestado e confira os potes vizinhos."],"fontes":[{"nome":"Ministério da Saúde: orientações à população em situação de enchentes","url":"https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/enchentes/publicacoes/orientacoes-a-populacao-em-situacao-de-enchentes.pdf"},{"nome":"Ready.gov (FEMA, EUA): Water","url":"https://www.ready.gov/water"},{"nome":"USDA FSIS: Shelf-Stable Food Safety","url":"https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/shelf-stable-food"},{"nome":"USDA FoodKeeper (prazos de armazenamento)","url":"https://www.foodsafety.gov/keep-food-safe/foodkeeper-app"}]}]},{"id":"seguranca","tipo":"checklist","nav":"Checklists","curto":"Segurança","nome":"Segurança e Defesa","intro":"Itens de segurança da casa e da família.","aviso":"A posse de arma de fogo exige registro na Polícia Federal ou no Exército, conforme o Estatuto do Desarmamento (Lei 10.826/2003). Este app não traz nenhuma outra orientação sobre armas.","grupos":[{"nome":"Defesa","nota":null,"itens":[{"id":"seguranca-01","nome":"Armas de fogo"},{"id":"seguranca-02","nome":"Armas brancas"}]},{"nome":"Proteção da casa","nota":null,"itens":[{"id":"seguranca-n01","nome":"Alarme","via":["DIhYCuAOm6o"]},{"id":"seguranca-n02","nome":"Câmera de segurança","via":["DIhYCuAOm6o"]}]}],"extras":[]},{"id":"habilidades","tipo":"conhecimento","nav":"Conhecimento","curto":"Habilidades","nome":"Habilidades a aprender","intro":"As sete habilidades anotadas, com passos, erros comuns, alertas e onde aprender. Conteúdo educativo: não substitui curso presencial certificado. Marque Aprendi quando dominar a prática.","aviso":null,"extras":[]},{"id":"tutoriais","tipo":"conhecimento","nav":"Conhecimento","curto":"Tutoriais","nome":"Tutoriais (reels)","intro":"Resumos dos reels salvos, com os pontos-chave e alertas. Os reels removidos do Instagram aparecem marcados como removidos, com o link. Marque Lido quando terminar.","aviso":null,"extras":[]},{"id":"livros","tipo":"conhecimento","nav":"Conhecimento","curto":"Livros","nome":"Livros de sobrevivência","intro":"Quatorze livros com tópicos e resumos. Marque Tenho o livro e Li.","aviso":null,"extras":[{"tipo":"pendentes","titulo":"Reels sobre livros removidos do Instagram","reels":[{"id":"DJpnXfOAYug","url":"https://www.instagram.com/reel/DJpnXfOAYug/","pendente":true},{"id":"DJlfE1wgfsu","url":"https://www.instagram.com/reel/DJlfE1wgfsu/","pendente":true}]}]},{"id":"conhecimentos","tipo":"conhecimento","nav":"Conhecimento","curto":"Conhecimentos","nome":"Conhecimentos para obter","intro":"Temas anotados por você e sugestões adicionais, com por que importam, como começar, fontes e marcos para acompanhar.","aviso":null,"extras":[]}],"reels":{"DHmXhcCy--q":"https://www.instagram.com/reel/DHmXhcCy--q/","DEXeoCTxAAr":"https://www.instagram.com/reel/DEXeoCTxAAr/","DJFW6IxNmXs":"https://www.instagram.com/reel/DJFW6IxNmXs/","DJKktpCxz_-":"https://www.instagram.com/reel/DJKktpCxz_-/","DJINyTBPyJg":"https://www.instagram.com/reel/DJINyTBPyJg/","DKIG6PMMhn1":"https://www.instagram.com/reel/DKIG6PMMhn1/","DLNI3HZsk5D":"https://www.instagram.com/reel/DLNI3HZsk5D/","DMVt7LhxFNm":"https://www.instagram.com/reel/DMVt7LhxFNm/","DMTb6N7OYcM":"https://www.instagram.com/reel/DMTb6N7OYcM/","DMba78NsuGZ":"https://www.instagram.com/reel/DMba78NsuGZ/","DKz68kdRF3F":"https://www.instagram.com/reel/DKz68kdRF3F/","DIsP2YpMtO9":"https://www.instagram.com/reel/DIsP2YpMtO9/","DIhYCuAOm6o":"https://www.instagram.com/reel/DIhYCuAOm6o/","DGqEVYrOD7o":"https://www.instagram.com/reel/DGqEVYrOD7o/","DF3OqSpyFaB":"https://www.instagram.com/reel/DF3OqSpyFaB/","DJpnXfOAYug":"https://www.instagram.com/reel/DJpnXfOAYug/","DJlfE1wgfsu":"https://www.instagram.com/reel/DJlfE1wgfsu/","DfiP9injTdT":"https://www.instagram.com/reel/DfiP9injTdT/","DfafmQfpaVU":"https://www.instagram.com/reel/DfafmQfpaVU/"},"habilidades":[{"id":"criar-fogo","titulo":"Como fazer fogo","original":"Como criar fogo?","resumo":"Fogo aquece, cozinha, ferve água e sinaliza. O segredo é preparar o material antes de acender e ter mais de uma forma de ignição.","passos":["Escolha local protegido do vento, longe de vegetação seca, raízes e barracas; limpe um círculo de cerca de 1 m até a terra.","Separe três montes: isca (algodão com vaselina, casca seca, capim seco, palha de aço fina), gravetos finos (espessura de palito a lápis) e lenha maior (polegar a pulso).","Monte uma pequena cabana ou pirâmide de gravetos com espaço para a isca no centro e entrada voltada para o vento.","Acenda a isca com isqueiro, fósforo ou faísca de pederneira (raspando a haste com o dorso da faca ou o raspador).","Sopre de leve na base e acrescente gravetos aos poucos, do mais fino ao mais grosso, sem abafar.","Só coloque lenha grossa quando houver brasa firme; mantenha o fogo pequeno e controlado.","Para apagar: espalhe as brasas, jogue água, mexa e jogue água de novo até tudo ficar frio ao toque."],"erros":["Colocar lenha grossa cedo demais e abafar o fogo","Usar lenha verde ou molhada do chão","Não preparar material suficiente antes de acender","Fazer fogo grande demais","Depender de uma só forma de ignição"],"alerta":"Nunca use gasolina ou álcool líquido para acender ou reavivar fogo. Não acenda dentro de barraca, carro ou ambiente fechado: risco de monóxido de carbono. Respeite proibições de queimada e períodos de seca. Tenha água ou terra à mão.","onde":[{"nome":"Livro: Bushcraft 101 (Dave Canterbury, 2014)","url":"https://www.amazon.com.br/s?k=bushcraft+101"},{"nome":"Manual FM 21-76 (domínio público, capítulo de fogo)","url":"https://archive.org/search?query=FM+21-76"}]},{"id":"torniquete","titulo":"Como aplicar um torniquete","original":"Como fazer tornuqueite?","resumo":"O torniquete interrompe sangramento grave em braço ou perna quando a pressão direta não resolve. Conteúdo educativo: o treinamento prático em curso presencial certificado (APH ou Cruz Vermelha) é indispensável.","passos":["Garanta sua segurança, use luvas se possível e ligue 192 (SAMU) ou 193 (Bombeiros).","Tente primeiro pressão direta firme sobre o ferimento com pano limpo.","Se o sangramento em braço ou perna continuar forte ou jorrar, aplique o torniquete de 5 a 8 cm acima do ferimento, entre o ferimento e o coração, nunca sobre a articulação.","Prefira torniquete comercial (tipo CAT). Improvisado: faixa larga (mínimo 4 cm, como gravata ou tira de pano) dando a volta no membro, com um bastão firme amarrado por cima para girar (molinete).","Aperte até o sangramento parar; vai doer, isso é esperado.","Prenda o bastão para não desenrolar e anote o horário da aplicação (na pele ou na testa da vítima).","Não afrouxe nem retire o torniquete; isso cabe à equipe médica. Mantenha a vítima aquecida e monitorada até o socorro chegar."],"erros":["Usar fio, arame ou corda fina, que cortam a pele e não comprimem bem","Aplicar frouxo, o que piora o sangramento","Afrouxar de tempos em tempos","Esquecer de anotar o horário","Aplicar sobre o joelho ou o cotovelo"],"alerta":"Uso indicado apenas para hemorragia grave de membros. Faça curso presencial certificado de APH ou primeiros socorros (Cruz Vermelha, SENAC, Corpo de Bombeiros) e treine com torniquete real. Sempre acione o socorro profissional.","onde":[{"nome":"Cruz Vermelha Brasileira (cursos de primeiros socorros por filial)","url":"https://www.cruzvermelha.org.br"},{"nome":"Manual de Primeiros Socorros (Fiocruz, 2003, PDF gratuito)","url":"https://www.google.com/search?q=Manual+de+Primeiros+Socorros+Fiocruz+2003+pdf"}]},{"id":"desossar-carcaca","titulo":"Como desossar uma carcaça","original":"Como desoçar carcaça","resumo":"Desossar e porcionar carne de animal abatido aproveita melhor o alimento e facilita a conservação. Higiene e resfriamento rápido são tão importantes quanto a técnica de corte.","passos":["Trabalhe com animal abatido de forma legal e inspecionada; caça é regulada por lei no Brasil.","Higienize facas, mãos e superfícies; use faca de desossa afiada, chaira e luvas de proteção contra corte.","Após o abate e a sangria, retire vísceras com cuidado para não perfurar intestino e estômago, o que contamina a carne.","Resfrie a carcaça o mais rápido possível (local fresco, sombra, ventilação ou gelo).","Separe as peças grandes seguindo as articulações: dianteiro, traseiro e lombo. Corte nas juntas, não através do osso.","Para desossar, mantenha a ponta da faca sempre encostada no osso, raspando a carne em cortes curtos.","Porcione, embale, identifique e conserve (refrigeração, salga ou secagem) imediatamente."],"erros":["Perfurar vísceras e contaminar a carne","Deixar a carcaça no calor por horas","Faca cega, que exige força e causa acidentes","Cortar em direção ao corpo ou à mão de apoio","Misturar superfícies de carne crua com alimentos prontos"],"alerta":"Use luva anticorte na mão de apoio e corte sempre para longe do corpo. Carne com cheiro, cor ou textura alterada deve ser descartada. Animais silvestres podem transmitir doenças. Aprenda acompanhando um açougueiro ou produtor rural experiente.","onde":[{"nome":"SENAR EaD (cursos do meio rural, incluindo processamento de carnes conforme oferta)","url":"https://ead.senar.org.br"},{"nome":"Livro: The Encyclopedia of Country Living (Carla Emery)","url":"https://www.amazon.com.br/s?k=encyclopedia+of+country+living"}]},{"id":"improvisar-gerador","titulo":"Como improvisar geração de energia","original":"Como improvisar um gerador?","resumo":"Opções realistas de energia de emergência em ordem de segurança: power bank e painel solar portátil, inversor ligado à bateria do carro, gerador a combustão e, para pequenas cargas, gerador a pedal ou manivela.","passos":["Liste o essencial e o consumo: celular (cerca de 10 a 20 Wh por carga), lâmpada LED, roteador, rádio. Some os watts-hora do dia.","Solar portátil: painel de 50 a 100 W com controlador de carga e bateria (ou estação de energia portátil). É silencioso e sem combustível.","Carro como gerador: inversor de 12 V para 127/220 V ligado à bateria; para mais de cerca de 150 W, ligue direto na bateria e deixe o motor ligado ao ar livre.","Gerador a combustão: só ao ar livre, a vários metros de portas e janelas, ligando aparelhos por extensão adequada.","Pequenas cargas: bicicleta ou manivela acionando alternador ou dínamo com regulador gera pouco, apenas para carregar baterias pequenas.","Use sempre controlador ou regulador de carga entre a fonte e a bateria e fusível perto da bateria."],"erros":["Ligar gerador na tomada da casa (retroalimentação)","Usar gerador em garagem ou varanda fechada","Ligar bateria sem fusível","Subestimar o consumo de geladeira e chuveiro","Descarregar a bateria do carro até não dar partida"],"alerta":"Nunca conecte gerador direto na instalação da casa sem chave reversora instalada por eletricista: a energia pode voltar para a rede e matar trabalhadores da distribuidora. Gerador a combustão gera monóxido de carbono, gás inodoro e letal. Baterias podem explodir ou pegar fogo em curto-circuito.","onde":[{"nome":"SENAI (cursos de eletricidade básica e energia solar)","url":"https://www.mundosenai.com.br"},{"nome":"Livro: When Technology Fails (Matthew Stein)","url":"https://www.amazon.com.br/s?k=when+technology+fails"}]},{"id":"fechar-ferimentos","titulo":"Fechar ferimentos: ponto e sutura","original":"Como dar ponto e saturar?","resumo":"Sutura é procedimento médico. Para leigos, o recomendado é limpar bem, aproximar as bordas com fita ou curativo (tipo Steri-Strip ou borboleta) e buscar atendimento. Suturar ferida suja em casa pode prender bactérias e causar infecção grave.","passos":["Controle o sangramento com pressão direta por vários minutos.","Lave a ferida com bastante água limpa corrente (potável ou fervida e fria) e sabão em volta; retire sujeira visível.","Seque a pele ao redor e aproxime as bordas com fitas de aproximação ou curativos em borboleta, colocadas na transversal.","Cubra com curativo limpo e troque quando molhar ou sujar.","Procure atendimento o quanto antes, idealmente nas primeiras horas, sobretudo se a ferida for profunda, larga, no rosto, mão ou articulação.","Verifique se a vacina antitetânica está em dia."],"erros":["Fechar ferida suja ou por mordida","Usar linha comum de costura","Aplicar produtos caseiros (pó de café, pasta, açúcar)","Ignorar sinais de infecção","Demorar a buscar atendimento"],"alerta":"Não tente suturar sem formação. Procure atendimento imediato se houver sangramento que não para, ferida profunda, corpo estranho, mordida de animal, perda de movimento ou sensibilidade, ou sinais de infecção (vermelhidão que se espalha, calor, pus, febre). Faça curso presencial certificado de primeiros socorros.","onde":[{"nome":"Cruz Vermelha Brasileira (cursos de primeiros socorros por filial)","url":"https://www.cruzvermelha.org.br"},{"nome":"Hesperian: Where There Is No Doctor (capítulo de feridas, gratuito online)","url":"https://hesperian.org"}]},{"id":"primeiros-socorros-bebes","titulo":"Primeiros socorros para bebês","original":"Aprender primeiros socorros também para bebês","resumo":"Bebês (até 1 ano) exigem técnicas próprias para engasgo e parada respiratória. Conteúdo educativo: treine em curso presencial certificado com manequim infantil.","passos":["Engasgo com bebê consciente que não chora, não tosse ou não respira: ligue 192 e posicione o bebê de bruços sobre seu antebraço, cabeça mais baixa que o corpo, apoiando a mandíbula.","Dê até 5 tapas firmes nas costas, entre as escápulas, com a base da mão.","Vire o bebê de barriga para cima apoiado no outro antebraço e faça até 5 compressões no centro do peito, logo abaixo da linha dos mamilos, com a técnica ensinada no curso (dois dedos ou dois polegares).","Alterne 5 tapas e 5 compressões até o objeto sair ou o bebê ficar inconsciente. Não tente retirar com o dedo o que não estiver visível.","Bebê inconsciente que não respira: inicie RCP no centro do peito (cerca de 4 cm de profundidade, 100 a 120 por minuto) com a técnica do seu treinamento, as diretrizes são atualizadas periodicamente, e mantenha até o socorro chegar.","Febre alta, convulsão, desidratação ou queda com pancada na cabeça: procure atendimento sem demora."],"erros":["Sacudir o bebê","Fazer manobra de Heimlich de adulto em bebê","Colocar o dedo às cegas na boca","Virar de cabeça para baixo segurando pelos pés","Esperar para ver se melhora em caso de sinal de perigo"],"alerta":"Informação educativa, não substitui curso. Faça curso presencial certificado de primeiros socorros pediátricos (Cruz Vermelha, SENAC, Corpo de Bombeiros, hospitais infantis). Não dê medicamento a bebê sem orientação do pediatra. Sempre acione o 192.","onde":[{"nome":"Cruz Vermelha Brasileira (cursos de primeiros socorros por filial)","url":"https://www.cruzvermelha.org.br"},{"nome":"Manual de Primeiros Socorros (Fiocruz, 2003)","url":"https://www.google.com/search?q=Manual+de+Primeiros+Socorros+Fiocruz+2003+pdf"}]},{"id":"filtro-agua-caseiro","titulo":"Como fazer um filtro de água caseiro","original":"Fazer filtro de água caseiro","resumo":"Filtro de camadas (pano, areia, carvão e cascalho) remove sujeira e turbidez, mas NÃO desinfeta: vírus e bactérias passam. Depois de filtrar, é obrigatório ferver ou clorar a água.","passos":["Corte o fundo de uma garrafa PET de 2 L e coloque-a de cabeça para baixo; tampe o bico com algodão ou pano limpo.","Camadas de baixo para cima: pano ou algodão, carvão vegetal triturado (sem aditivos), areia fina lavada, areia grossa, cascalho fino.","Lave bem cada material antes e descarte a primeira água filtrada.","Passe a água devagar e colete em recipiente limpo.","Desinfete: ferva por 5 minutos (orientação do Ministério da Saúde na falta de hipoclorito) ou adicione 2 gotas de hipoclorito de sódio 2,5% por litro e espere 30 minutos antes de beber.","Água tratada com hipoclorito deve ser consumida em até 24 horas. Troque areia e carvão com frequência."],"erros":["Achar que água filtrada já é potável","Usar carvão de churrasco com aditivos","Usar água sanitária com perfume, alvejante ou outros produtos (precisa conter apenas hipoclorito de sódio e água)","Não esperar os 30 minutos","Guardar água tratada em recipiente sujo ou aberto"],"alerta":"Filtro de areia e carvão NÃO desinfeta. Sempre ferva ou clore depois de filtrar. O hipoclorito 2,5% é distribuído em postos de saúde. Água com contaminação química (enchente com esgoto industrial, combustível) não se torna segura com esses métodos.","onde":[{"nome":"Ministério da Saúde: orientações à população em situação de enchentes","url":"https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/enchentes/publicacoes/orientacoes-a-populacao-em-situacao-de-enchentes.pdf"},{"nome":"Nota técnica de tratamento intradomiciliar de água (SES-MG)","url":"https://www.saude.mg.gov.br/wp-content/uploads/2025/03/ANEXO-F-Nota-tcnica-39-2023_Orientaes-tratamento-intradomiciliar.pdf"}]}],"tutoriais":[{"id":"DHmXhcCy--q","url":"https://www.instagram.com/reel/DHmXhcCy--q/","grupo":"A","pendente":false,"autor":"Denis Survival","titulo":"Sal em garrafa PET lacrada com fogo e fita","resumo":"Passo a passo para armazenar sal (alimento seco) em garrafa PET lavada e seca, expulsando o ar com papel alumínio e algodão aceso antes de tampar. O autor afirma que dura 5 anos ou mais. Termina etiquetando a data de produção.","pontos":["Lavar a garrafa PET com detergente, enxaguar bem e secar 100% em local arejado","Usar funil para encher: encher o fundo e completar até o topo, batendo a garrafa para tirar o ar do fundo","Colocar papel alumínio na boca da garrafa, pôr algodão e acender","Com o algodão em chamas, fechar a tampa e vedar com fita isolante ou fita crepe","Escrever a data de produção na garrafa","Guardar as garrafas deitadas em prateleira (visto na tela; data escrita à mão no exemplo)"],"itens":["garrafa PET","detergente","funil","sal","fita isolante ou fita crepe","isqueiro","algodão","papel alumínio","caneta para datar","arroz e feijão em garrafas (vistos na tela)"],"alertas":["Chama na boca de garrafa plástica: risco de queimadura e incêndio; fazer longe de materiais inflamáveis","[não dito no vídeo] A duração de 5 anos é afirmação do autor, sem fonte; conferir validade real do alimento e checar as garrafas periodicamente","Garrafa precisa estar 100% seca antes de encher (dito no vídeo)"],"secao":"Armazenamento e dicas gerais"},{"id":"DEXeoCTxAAr","url":"https://www.instagram.com/reel/DEXeoCTxAAr/","grupo":"A","pendente":false,"autor":"Giorgio Barone","titulo":"Teste de lanterna movida a água e sal","resumo":"Teste de uma lanterna/lâmpada de sobrevivência acionada por água e sal, comparada com outra lâmpada que prometia 5 dias de autonomia. Mostra a luz ficando mais forte, o celular ligado à lanterna e a lâmpada ainda acesa após 48 horas. É conteúdo promocional (link do produto na bio).","pontos":["Adicionar água e sal no compartimento da lanterna e agitar para ativar","A luz tem boa intensidade e pode ser ligada a um celular por cabo (o vídeo mostra a conexão; o resultado da carga não é dito de forma explícita)","Após 48 horas continuava ligada; o limite de duração não foi descoberto","A outra lâmpada testada prometia 5 dias e cumpriu"],"itens":["lanterna/lâmpada de sal e água","água","sal","colher","recipiente plástico","cabo de carregamento","celular"],"alertas":["[não dito no vídeo] Conteúdo de divulgação de produto específico; sem especificação técnica, capacidade ou preço no vídeo; testar antes de contar com ele no kit","[não dito no vídeo] Resultado de carga do celular não é mostrado com clareza"],"secao":"Armazenamento e dicas gerais"},{"id":"DJFW6IxNmXs","url":"https://www.instagram.com/reel/DJFW6IxNmXs/","grupo":"A","pendente":false,"autor":"Layane Torres","titulo":"Mini painel solar para carregar celular no apagão","resumo":"Dica de incluir no kit de emergência um painel solar pequeno com saída para carregador. Ela diz que no apagão todos ficaram sem bateria e que usou o painel ao sol para carregar os celulares. Texto na tela: 'Não pode faltar no seu Kit emergencial'.","pontos":["Colocar o painel solar ao sol e ligar o carregador/cabo nele","Guardar o painel no kit de emergência para falta de energia"],"itens":["painel solar portátil pequeno (USB)","carregador/cabo do celular","celular"],"alertas":["[não dito no vídeo] A carga depende de sol direto; painéis pequenos costumam carregar devagar. Testar com o celular antes de uma emergência e levar também um power bank"],"secao":"Armazenamento e dicas gerais"},{"id":"DJKktpCxz_-","url":"https://www.instagram.com/reel/DJKktpCxz_-/","grupo":"A","pendente":false,"autor":"Gabi e Guto - Dicas","titulo":"Luminária improvisada com garrafão de água e lanterna","resumo":"Dica de apagão: um garrafão de 5 litros cheio de água com uma lanterna encaixada na boca, presa com fita (crepe, segundo a legenda), espalha a luz pelo ambiente. Vídeo repostado com créditos a @1_minutodeideas.","pontos":["Pegar garrafão de 5 litros cheio de água","Encaixar a lanterna na boca do garrafão e prender com fita adesiva/crepe","A água espalha a luz e ilumina o ambiente por bastante tempo (afirmação do vídeo)"],"itens":["garrafão de 5 litros com água","lanterna","fita adesiva/crepe"],"alertas":["[não dito no vídeo] Lanterna com pilhas descarrega; manter pilhas reserva. Não deixar a lanterna molhar"],"secao":"Armazenamento e dicas gerais"},{"id":"DJINyTBPyJg","url":"https://www.instagram.com/reel/DJINyTBPyJg/","grupo":"A","pendente":false,"autor":"André Luiz - Ninja Flow","titulo":"Bunker de estoque para 3 anos, comparado ao dele em construção","resumo":"Mostra o bunker de um estrangeiro que viralizou, com comida para cerca de 3 anos, duas geladeiras, munições e armamento, e compara com o abrigo subterrâneo que o autor constrói há 2 anos, ainda sem piso, paredes pintadas e teto. Planeja prateleiras, camas e uma sala-cofre para suprimentos. Mais tour do que tutorial.","pontos":["Estoque grande de comida enlatada e seca em prateleiras (visto na tela: latas, tanque de água com torneira, garrafas de água)","Geladeiras para alimentos refrigerados no bunker do exemplo","O abrigo do autor ainda precisa de piso, pintura e teto antes de receber o estoque","Planos: prateleiras, camas e cofre para suprimentos"],"itens":["comida para 3 anos","duas geladeiras","munições","armamento","prateleiras","camas","cofre/sala secreta","tanque/reservatório de água (visto na tela)","garrafas de água (vistas na tela)"],"alertas":["[não dito no vídeo] Armas e munição exigem registro e posse legal no Brasil","Vídeo não detalha quantidades, ventilação, água ou saneamento; não serve como lista de checklist por si só"],"secao":"Armazenamento e dicas gerais"},{"id":"DKIG6PMMhn1","url":"https://www.instagram.com/reel/DKIG6PMMhn1/","grupo":"A","pendente":false,"autor":"Bibiana Mutran","titulo":"Tratar água da torneira com água sanitária para estoque","resumo":"Mostra como armazenar água potável de emergência em garrafas/garrafões de 5 a 6 litros com água da torneira e gotas de hipoclorito (lixívia/água sanitária). A regra do vídeo é 2 gotas por litro. A água deve ficar bem tampada em local fresco e escuro.","pontos":["Usar água sanitária com hipoclorito de sódio a 2,5% a 3% de cloro ativo (conferir o rótulo)","Dose do vídeo: 2 gotas por litro (5 L = 10 gotas, 6 L = 12 gotas, 20 L = 40 gotas)","Agitar bem para misturar e esperar 30 minutos a 1 hora antes de consumir","Para estocar: tampar bem e guardar em local fresco, de preferência escuro","Identificar a garrafa com marcador (visto na tela)"],"itens":["garrafas/garrafões PET de 5 e 6 litros","água da torneira","água sanitária/lixívia (hipoclorito de sódio 2,5-3%)","conta-gotas","caneta marcador (vista na tela)"],"alertas":["Rótulo mostrado no vídeo alerta para irritação de pele/olhos e liberação de gases perigosos (cloro) com outros produtos (leitura parcial do rótulo)","Orientação oficial do Ministério da Saúde: 2 gotas de hipoclorito de sódio 2,5% por litro de água, com 30 minutos de espera antes de beber. Use só água sanitária com hipoclorito de sódio e água, sem perfume ou aditivos.","[não dito no vídeo] Renovar a água estocada periodicamente e identificar com a data"],"secao":"Armazenamento e dicas gerais"},{"id":"DLNI3HZsk5D","url":"https://www.instagram.com/reel/DLNI3HZsk5D/","grupo":"A","pendente":false,"autor":"Denis Survival","titulo":"Colapso: o que fazer nas primeiras 24 horas","resumo":"Roteiro de 24 horas após um colapso do sistema: isolar-se em casa, usar rádio à pilha, fazer inventário por escrito de comida, água, medicamentos e ferramentas, fortificar entradas e organizar o espaço. O autor promete 24, 48 e 72 horas, mas o vídeo cobre só as primeiras 24 h. Foco: preparo, estratégia e disciplina.","pontos":["Não achar que é falha temporária; água e comida ainda parecem normais no primeiro dia","Isolar-se: trancar portas e janelas, apagar luzes, evitar som alto para não chamar atenção","Usar rádio à pilha ou bateria para informação em vez de celular e TV","Pegar papel e caneta e inventariar: comida (quantos dias), água (estocada, purificação, coleta segura), medicamentos, ferramentas","Fortificar portas e janelas com móveis que travem as entradas","Organizar o espaço: onde dormir e onde guardar recursos; economizar energia","Manter a calma e a sanidade; ter um plano"],"itens":["papel e caneta","rádio à pilha ou bateria","comida","água estocada","meio de purificar água","analgésicos","antibióticos","curativos","faca","lanterna","fósforos","pilhas","móveis para travar entradas","rádio comunicador, lanterna de cabeça e barraca (vistos na tela)"],"alertas":["Cenário extremo de colapso total; adaptar para apagão ou emergência comum","[não dito no vídeo] Antibióticos exigem receita e orientação médica; manter só medicamentos de uso regular e kit de primeiros socorros"],"secao":"Armazenamento e dicas gerais"},{"id":"DMVt7LhxFNm","url":"https://www.instagram.com/reel/DMVt7LhxFNm/","grupo":"A","pendente":false,"autor":"Kira Wood - Fé, Fatos \u0026 Futuro","titulo":"Arroz e feijão em garrafa PET com alho e algodão aceso","resumo":"Tutorial para guardar feijão e arroz em garrafas PET: dente de alho em camadas com o grão, papel alumínio na boca, algodão com álcool aceso, tampa, fita e data de validade. Afirma alimento fresco por 5 anos. A legenda também fala de desligamento de GPS, dinheiro em espécie e promove um 'Guia essencial de sobrevivência 2025' (link na bio).","pontos":["Colocar 1 dente de alho na garrafa vazia e encher com feijão (medida de 4 dedos), alternando com outro dente de alho até completar","Repetir o processo com o arroz","Colocar uma bolinha de papel alumínio na boca da garrafa","Umedecer algodão com álcool, pôr dentro de cada garrafa e acender","Tampar e fechar bem, finalizar com fita","Escrever a data de feito e a nova data de validade na garrafa","Legenda: manter dinheiro em espécie para emergência e estocar arroz e feijão"],"itens":["garrafas PET","feijão","arroz","dente de alho","papel alumínio","algodão","álcool","fita","caneta","funil e medidor (vistos na tela)"],"alertas":["Álcool e chama dentro de garrafa plástica: risco de queimadura e incêndio; manter longe de inflamáveis","[não dito no vídeo] 5 anos de validade é afirmação sem fonte; checar periodicamente os grãos e a umidade","Legenda tem apelo de medo e promove produto pago; tratar como opinião do autor"],"secao":"Armazenamento e dicas gerais"},{"id":"DMTb6N7OYcM","url":"https://www.instagram.com/reel/DMTb6N7OYcM/","grupo":"A","pendente":true,"secao":"Armazenamento e dicas gerais"},{"id":"DMba78NsuGZ","url":"https://www.instagram.com/reel/DMba78NsuGZ/","grupo":"A","pendente":true,"secao":"Armazenamento e dicas gerais"},{"id":"DKz68kdRF3F","url":"https://www.instagram.com/reel/DKz68kdRF3F/","grupo":"A","pendente":false,"autor":"Denis Survival","titulo":"Alerta de cortes de energia e armazenamento de comida em PET","resumo":"Notícia sobre alerta de uma autoridade britânica para estocar velas diante de cortes de energia, ligada a ataques cibernéticos contra infraestrutura crítica (luz, água, sistemas energéticos e alimentares). As imagens mostram garrafas PET com feijão e proteína de soja sendo vedadas com chama, como no tutorial do mesmo autor.","pontos":["Estocar velas para cortes de energia","Infraestrutura crítica = luz, água e sistemas hídricos, energéticos e alimentares","Guardar alimentos secos (feijão, proteína de soja) em garrafas PET vedadas"],"itens":["velas","garrafas PET","feijão","proteína de soja texturizada (aparente na imagem)","isqueiro (visto na tela)"],"alertas":["[não dito no vídeo] Cargo da autoridade varia entre áudio (vice-primeiro-ministro), legenda e tela; fonte da notícia não verificada","Chama na boca da garrafa plástica: risco de queimadura","[não dito no vídeo] Vela acesa exige base firme, longe de cortinas e crianças"],"secao":"Armazenamento e dicas gerais"},{"id":"DIsP2YpMtO9","url":"https://www.instagram.com/reel/DIsP2YpMtO9/","grupo":"A","pendente":false,"autor":"Adriano Lourenço (@adriano.alourenco)","titulo":"Estoque em garrafas PET e alerta de colapso econômico em 2027","resumo":"O autor mostra sua despensa de prepper com garrafas PET empilhadas (o conteúdo das brancas e das marrons não é dito; aparecem também pacotes de macarrão e garrafas de óleo) e diz que 'temos apenas dois anos'. Afirma que o governo admite colapso nas contas públicas em 2027 e orienta fazer estoque do básico em casa, principalmente quem depende do governo (aposentados, beneficiários), sem depender exclusivamente dele. Pede para o público pesquisar em fontes oficiais.","pontos":["Fazer estoque do básico em casa, 'estoquezinho' (dito no vídeo)","Quem depende do governo (aposentados, beneficiários de programas) tem mais risco e deve se preparar primeiro","Não depender única e exclusivamente do governo","Armazenamento visto na tela: garrafas PET tampadas empilhadas deitadas em prateleiras, macarrão em pacotes, óleo de cozinha em garrafas, etiquetas 'Prepper Sobrevivencialista'","Convida a pesquisar fontes oficiais do governo sobre o risco (sem citar documento ou fonte específica)"],"itens":["garrafas PET (conteúdo não dito)","macarrão (visto na tela)","óleo de cozinha (visto na tela)","colete tático com cruz vermelha (visto na tela)","protetor auricular tipo abafador (visto na tela)","prateleiras com etiquetas 'Prepper Sobrevivencialista'"],"alertas":["[não dito no vídeo] A afirmação 'governo admite colapso em 2027' não traz fonte; o autor pede para pesquisar. Conferir antes de repetir","[não dito no vídeo] Tom de alarme (colapso, 'dois anos'); usar como gancho de preparo, não como previsão","[não dito no vídeo] Não informa validade, vedação ou rotação dos alimentos nas garrafas; estoque exige checagem periódica"],"secao":"Armazenamento e dicas gerais"},{"id":"DIhYCuAOm6o","url":"https://www.instagram.com/reel/DIhYCuAOm6o/","grupo":"B","pendente":false,"autor":"Preppers BR","titulo":"Primeiras 24 horas após o colapso do sistema","resumo":"Sequência de ações nas primeiras 24 horas de um colapso: garantir água, reunir informações, decidir entre evacuar ou ficar, trancar a casa e preparar-se para o longo prazo com energia, comida e racionamento. Recomenda ficar em casa na maioria dos cenários.","pontos":["1. Água: encher garrafas, potes, panelas, baldes e banheira se a torneira ainda funcionar (ninguém passa de 3 dias sem água)","2. Informação: ligar rádio de emergência ou verificar o celular; ligar para familiares e amigos do ponto de encontro","3. Decidir se evacua; se sim, pegar a mochila de emergência e sair","4. Se ficar: trancar tudo, colocar tábuas nas janelas, barricar a porta, preparar as armas e checar câmera e alarme","5. Longo prazo: preparar fontes de comida, água e luz; gerador pronto, carregador solar, pilhas em lanternas e lampiões, fogão de emergência","6. Racionar comida e água; não agir como se durasse só 72 horas"],"itens":["garrafas","potes","panelas","baldes","banheira","rádio de emergência","celular","mochila de emergência","tábuas","câmera de segurança","alarme","gerador","carregador solar","pilhas","lanternas","lampiões","fogão de emergência","comida","água"],"alertas":["[não dito no vídeo] Armas de fogo exigem registro e posse legal no Brasil","[não dito no vídeo] Nunca usar gerador, fogão ou lampião a combustão em ambiente fechado (monóxido de carbono)","[não dito no vídeo] Barricar portas e janelas deve manter uma saída de emergência livre (incêndio)"],"secao":"Ações de sobrevivência"},{"id":"DGqEVYrOD7o","url":"https://www.instagram.com/reel/DGqEVYrOD7o/","grupo":"B","pendente":false,"autor":"Ademilde Motta Milares","titulo":"Dicas rápidas de estoque dentro de profecia para julho de 2027","resumo":"Repost de Marcel Mattos com discurso religioso/profético sobre mudanças bruscas e eventos em julho de 2027. As dicas práticas ocupam só o começo: ter dinheiro em espécie, estocar comida não perecível para 30 a 40 dias, pilhas, lanternas, carro abastecido e anotar informações sem acesso à rede.","pontos":["Ter algum dinheiro em espécie em casa","Estocar enlatados e não perecíveis para pelo menos 30 a 40 dias","Ter pilhas e lanternas","Carro abastecido (a fala foi transcrita como 'não tenha o carro abastecido'; pelo contexto parece 'mantenha', conferir no áudio)","Anotar informações importantes, pois pode não haver acesso à rede"],"itens":["dinheiro em espécie","enlatados","alimentos não perecíveis (30 a 40 dias)","pilhas","lanternas","carro abastecido","papel/caderno para anotações"],"alertas":["Previsão sobre julho de 2027 é crença religiosa sem base verificável; aproveitar só as dicas práticas","Frase sobre o carro abastecido ficou ambígua na transcrição"],"secao":"Ações de sobrevivência"},{"id":"DF3OqSpyFaB","url":"https://www.instagram.com/reel/DF3OqSpyFaB/","grupo":"B","pendente":false,"autor":"Careca das plantas · Vitor Pacela","titulo":"Mini floresta de quintal: comida sem veneno em 80 m²","resumo":"Reel sem fala (só música) com texto na tela: 'Fiz uma mini floresta no quintal e colhi comida sem nenhuma gota de veneno'. Mostra o quintal antes e colheitas de tomate-cereja, banana verde, amendoim e feijão. Legenda: usou princípios de agrofloresta em 80 m².","pontos":["Produzir comida em quintal pequeno (80 m²) com princípios de agrofloresta","Colheitas mostradas: tomate-cereja, banana, amendoim, feijão"],"itens":["tomate-cereja","banana","amendoim","feijão","quintal/terreno de 80 m²"],"alertas":["Vídeo é inspiração, sem passo a passo, espécies, espaçamento ou prazos","[não dito no vídeo] Plantio leva meses; não substitui estoque de emergência"],"secao":"Ações de sobrevivência"}],"livros":[{"id":"sas-survival-handbook","titulo":"SAS Survival Handbook","titulo_pt":null,"autor":"John 'Lofty' Wiseman","ano":1986,"edicoes":"Edição revisada de 2009 (3ª ed. 2014, HarperCollins).","por_que":"Referência clássica e compacta de sobrevivência escrita por ex-instrutor do SAS britânico. Cobre do básico (água, abrigo, fogo) a desastres urbanos, em formato de consulta rápida.","onde":"Amazon (edição em inglês, impressa e Kindle). Existe versão de bolso (Collins Gem). Verificar se há edição em português disponível no momento.","fonte":["conhecimento geral do tema"],"topicos":[{"topico":"Prioridades de sobrevivência","resumo":"Ordem prática: segurança imediata, abrigo e temperatura corporal, água, fogo, sinalização e só depois comida. Uma pessoa resiste cerca de 3 horas exposta a frio ou calor extremo, cerca de 3 dias sem água e semanas sem comida. Antes de agir, pare, avalie o local e os recursos e faça um plano. Pânico gasta energia e leva a decisões ruins."},{"topico":"Água: achar e tornar segura","resumo":"Procure água corrente, chuva, orvalho e vales; coletar chuva com lona limpa é a fonte mais segura. Toda água de natureza deve ser considerada contaminada. Filtre para tirar a sujeira e depois desinfete fervendo ou com hipoclorito. Nunca beba água do mar nem urina."},{"topico":"Abrigo","resumo":"Escolha local seco, protegido do vento e fora de leitos de rio, encostas instáveis e árvores com galhos mortos. Isole do chão: o solo frio rouba calor mais rápido que o ar. Abrigo pequeno aquece melhor. Construa antes de escurecer."},{"topico":"Fogo","resumo":"Junte três materiais antes de acender: isca fina e seca, gravetos da espessura de um lápis e lenha maior. Monte em pirâmide ou cabana para circular ar. Leve sempre duas formas de ignição (isqueiro e pederneira, por exemplo). Proteja o fogo de chuva e vento e nunca o deixe sem vigilância."},{"topico":"Sinalização e resgate","resumo":"Três sinais de qualquer tipo (três apitos, três fogueiras, três flashes) indicam socorro. Use espelho ou superfície refletora contra o sol para ser visto de longe. Monte sinais grandes em área aberta, com contraste de cor. Fique próximo do ponto onde é mais provável ser procurado."},{"topico":"Desastres urbanos","resumo":"Tenha um plano familiar: ponto de encontro, contato fora da cidade e rota de saída. Em enchente, nunca atravesse água corrente a pé ou de carro. Em incêndio, abaixe-se onde a fumaça é menor e toque portas com o dorso da mão antes de abrir. Desligue gás e energia se houver risco e for seguro."},{"topico":"Primeiros socorros no campo","resumo":"Avalie na ordem: perigo no local, resposta da vítima, vias aéreas, respiração e circulação. Controle sangramento com pressão direta firme. Imobilize fraturas na posição encontrada. Mantenha a vítima aquecida e procure socorro especializado o quanto antes."}]},{"id":"bushcraft-101","titulo":"Bushcraft 101: A Field Guide to the Art of Wilderness Survival","titulo_pt":null,"autor":"Dave Canterbury","ano":2014,"edicoes":"Adams Media.","por_que":"Organiza o bushcraft em torno de poucos itens essenciais (os 5 Cs) e ensina a viver no mato com pouco equipamento. Muito prático para quem quer aprender fazendo.","onde":"Amazon (edição em inglês, impressa e Kindle).","fonte":["conhecimento geral do tema"],"topicos":[{"topico":"Os 5 Cs do kit essencial","resumo":"Corte (faca robusta), Cobertura (lona ou manta), Combustão (formas de fazer fogo), Contêiner (recipiente de metal para ferver água) e Cordame (corda forte, como paracord). Com esses cinco itens se resolvem a maioria das necessidades. Escolha qualidade em vez de quantidade. Pratique cada item antes de depender dele."},{"topico":"Uso seguro de faca e machado","resumo":"Corte sempre para longe do corpo e mantenha a outra mão fora da linha do corte. Para o machado, trabalhe ajoelhado ou com a madeira apoiada em base firme e mantenha o círculo de segurança livre. Lâmina afiada é mais segura que cega, porque exige menos força. Guarde a lâmina na bainha quando não estiver usando."},{"topico":"Nós úteis","resumo":"Aprenda poucos nós e bem: lais de guia (alça fixa), volta do fiel (amarrar em poste), nó de correr ajustável para tensionar lona e nó direito para unir pontas iguais. Pratique até fazer de olhos fechados. Um nó bem feito desata fácil depois de usado. Corda molhada exige nós mais firmes."},{"topico":"Abrigo com lona","resumo":"Uma lona de cerca de 3 x 3 m permite várias montagens: telhado em A, meia água e abrigo fechado. Arme a cumeeira com corda bem esticada entre duas árvores. Incline o lado mais baixo para o vento e a chuva. Faça cama de folhas ou galhos para isolar do chão."},{"topico":"Fogo com recursos naturais","resumo":"Isca natural: casca interna seca, capim seco, palha de coco e resina de pinheiro. Raspe gravetos finos em lascas (feather stick) para ter material seco mesmo com chuva. Busque lenha morta ainda presa na árvore, que tende a estar mais seca que a do chão. Mantenha estoque de isca seca guardado no kit."},{"topico":"Ferver água em recipiente de metal","resumo":"Garrafa ou caneca de aço inox sem pintura vai direto ao fogo. Fervura em ebulição plena desinfeta a água. Filtre antes com pano para tirar sujeira. Não use garrafa de plástico no fogo nem recipiente pintado ou galvanizado."}]},{"id":"onde-nao-ha-medico","titulo":"Where There Is No Doctor: A Village Health Care Handbook","titulo_pt":"Onde não há médico","autor":"David Werner, com Carol Thuman e Jane Maxwell","ano":1977,"edicoes":"Original em espanhol (Donde no hay doctor, 1973). Edições atualizadas pela Hesperian Health Guides.","por_que":"Um dos manuais de saúde comunitária mais usados no mundo, escrito para lugares sem acesso a médico. Linguagem simples e muitas ilustrações.","onde":"Hesperian: capítulos em PDF gratuito (inglês) e guias online em hesperian.org. Edição em português para a África vendida na loja Hesperian (store.hesperian.org).","fonte":["conhecimento geral do tema"],"topicos":[{"topico":"Exame básico do doente","resumo":"Pergunte o que sente, desde quando e o que piora ou melhora. Observe respiração, cor da pele, temperatura e estado de consciência. Anote tudo com horário, isso ajuda quem for atender depois. Saiba reconhecer sinais de perigo que exigem atendimento urgente."},{"topico":"Desidratação e diarreia","resumo":"Diarreia mata principalmente por perda de líquido, sobretudo em crianças. Sinais de alerta: boca seca, pouca urina, olhos fundos e moleira afundada no bebê. O soro de reidratação oral (sais oficiais do posto de saúde) é a principal medida. Continue alimentando e amamentando; procure atendimento se houver sangue nas fezes ou a pessoa não conseguir beber."},{"topico":"Feridas e infecção","resumo":"Lave a ferida com bastante água limpa e sabão e retire a sujeira. Cubra com curativo limpo e troque quando molhar ou sujar. Sinais de infecção: vermelhidão que se espalha, calor, inchaço, pus e febre. Feridas profundas, sujas ou por mordida precisam de avaliação profissional e checagem da vacina antitetânica."},{"topico":"Higiene e prevenção","resumo":"Lavar as mãos com sabão antes de comer e depois de usar o banheiro previne grande parte das doenças. Mantenha latrina longe de poços e fontes de água. Proteja alimentos de moscas e guarde água em recipiente tampado. Vacinação em dia é prevenção barata e eficaz."},{"topico":"Sinais de perigo","resumo":"Procure atendimento com urgência em caso de dificuldade para respirar, dor forte no peito, perda de consciência, convulsão, sangramento que não para, rigidez de nuca com febre ou recém-nascido que não mama. Não espere piorar. Organize antes como chegar ao serviço de saúde mais próximo."},{"topico":"Uso responsável de remédios","resumo":"O livro insiste que muitos problemas se resolvem sem remédio e que o uso errado causa dano. Use medicamento apenas com orientação de profissional de saúde e respeitando a bula. Guarde remédios em local seco, fresco e fora do alcance de crianças. Confira validade periodicamente."}]},{"id":"where-there-is-no-dentist","titulo":"Where There Is No Dentist","titulo_pt":null,"autor":"Murray Dickson","ano":1983,"edicoes":"Hesperian Health Guides, edições atualizadas (inclui tratamento restaurador atraumático).","por_que":"Complemento do Onde não há médico focado em dentes e gengivas. Dor de dente sem acesso a dentista é um problema sério em crise prolongada.","onde":"Hesperian: leitura online gratuita em hesperian.org (inglês) e PDF gratuito em espanhol (Donde no hay dentista). Não foi localizada edição em português.","fonte":["conhecimento geral do tema"],"topicos":[{"topico":"Prevenção diária","resumo":"Escove ao menos duas vezes ao dia com creme dental com flúor e use fio dental. Reduza açúcar entre as refeições, principalmente bebidas doces. Estoque escovas, creme e fio para meses. Prevenir é muito mais fácil que tratar sem dentista."},{"topico":"Escova improvisada","resumo":"Na falta de escova, um galho fino de árvore não tóxica mastigado na ponta até formar cerdas funciona como escova tradicional. Pano limpo enrolado no dedo também remove placa. O importante é a limpeza mecânica regular. Enxágue com água limpa depois."},{"topico":"Dor de dente e abscesso","resumo":"Dor que piora com doce ou frio costuma ser cárie. Inchaço no rosto, febre e pus indicam abscesso, que pode se espalhar e ficar grave. Bochechos com água morna e sal aliviam e ajudam a limpar. Inchaço que avança para olho ou pescoço é urgência."},{"topico":"Gengivas","resumo":"Gengiva que sangra ao escovar indica inflamação por placa; a solução é escovar melhor, não parar de escovar. Massagem e limpeza diária revertem casos leves. Mau hálito persistente e dente mole indicam doença avançada. Procure atendimento assim que possível."},{"topico":"Dente quebrado ou arrancado","resumo":"Guarde o dente arrancado pela coroa, sem tocar a raiz, em leite ou na própria saliva, e busque atendimento rápido, de preferência em menos de uma hora. Não esfregue a raiz. Para dente quebrado, proteja a borda cortante e evite mastigar daquele lado. Controle sangramento mordendo gaze limpa."}]},{"id":"encyclopedia-country-living","titulo":"The Encyclopedia of Country Living","titulo_pt":null,"autor":"Carla Emery","ano":1974,"edicoes":"Publicado em partes a partir do início dos anos 1970; edições atualizadas pela Sasquatch Books, incluindo a edição de 50 anos.","por_que":"Enciclopédia de vida autossuficiente no campo: horta, pomar, animais, conservação de alimentos e cozinha do zero. Cobre exatamente o conhecimento rural que o Elton quer adquirir.","onde":"Amazon (edição em inglês, impressa).","fonte":["conhecimento geral do tema"],"topicos":[{"topico":"Planejar a propriedade","resumo":"Antes de comprar ou ocupar terra, verifique água disponível o ano inteiro, solo, acesso e vizinhança. Comece pequeno e expanda conforme aprende. Anote o que planta e cria e os resultados de cada estação. Autossuficiência total é rara; produza o que faz mais sentido para o seu clima."},{"topico":"Horta e grãos","resumo":"Concentre-se em culturas de alto rendimento e fácil armazenamento: feijão, milho, abóbora, mandioca e batata-doce no contexto brasileiro. Rotacione culturas para não esgotar o solo. Guarde sementes das melhores plantas de variedades não híbridas. Adube com composto e esterco curtido."},{"topico":"Pequenos animais","resumo":"Galinhas são o ponto de partida mais simples: ovos, carne e controle de insetos. Garanta abrigo contra predadores, água limpa sempre e alimentação regular. Coelhos e cabras exigem mais conhecimento, mas rendem bem em pouco espaço. Saiba a quem recorrer em caso de doença (veterinário ou técnico rural)."},{"topico":"Conservação de alimentos","resumo":"Métodos tradicionais: secagem, salga, defumação, fermentação e conservas em vidro. Cada método tem regras de segurança próprias; siga receitas testadas. Alimentos de baixa acidez exigem processamento sob pressão para evitar botulismo. Identifique e date tudo o que produzir."},{"topico":"Cozinha do zero","resumo":"Saiba fazer pão, massa, manteiga, queijo simples e conservas a partir de matéria-prima básica. Isso multiplica o valor do estoque de farinha, grãos e leite. Fermento natural pode ser mantido indefinidamente com farinha e água. Pratique agora, em tempos normais."},{"topico":"Abate e aproveitamento","resumo":"Abate deve ser rápido, com o mínimo de sofrimento e em local limpo. Resfrie a carne rapidamente e mantenha higiene rigorosa de facas e superfícies. Aproveite couro, gordura e ossos. Aprenda primeiro acompanhando alguém experiente."}]},{"id":"the-knowledge","titulo":"The Knowledge: How to Rebuild Our World from Scratch","titulo_pt":null,"autor":"Lewis Dartnell","ano":2014,"edicoes":"Bodley Head / Penguin (EUA: How to Rebuild Civilization in the Aftermath of a Cataclysm).","por_que":"Explica os princípios científicos por trás de agricultura, medicina, química, energia e materiais para reconstruir o básico após um colapso. Ótimo para entender o porquê das coisas.","onde":"Amazon (edição em inglês, impressa, Kindle e audiolivro). Não foi localizada tradução em português.","fonte":["conhecimento geral do tema"],"topicos":[{"topico":"Período de carência","resumo":"Após um colapso, existe um intervalo em que restos da civilização (comida enlatada, combustível, ferramentas) ainda podem ser aproveitados. Esse tempo deve ser usado para aprender e montar produção própria. Combustível e remédios perdem qualidade com o tempo. Priorize o que é renovável."},{"topico":"Alimento e agricultura","resumo":"Agricultura sustentada depende de manter a fertilidade do solo com rotação de culturas, leguminosas e retorno de matéria orgânica. Guardar sementes viáveis é crítico. Conservar alimento (secar, salgar, fermentar) é tão importante quanto produzir. Comece com culturas resistentes e conhecidas."},{"topico":"Água e saneamento","resumo":"Separar esgoto da água de beber é a medida de saúde pública de maior impacto da história. Ferver, clorar e filtrar são os métodos básicos. Sabão pode ser feito com gordura e cinzas (lixívia), mas exige cuidado com a soda cáustica. Higiene previne a maior parte das epidemias."},{"topico":"Energia","resumo":"Energia mecânica de água, vento e animais pode mover moinhos e bombas. Um gerador elétrico é uma bobina de fio girando perto de ímãs; alternadores de carro e motores de passo podem ser reaproveitados. Baterias armazenam pouco; use energia na hora em que é gerada sempre que possível. Segurança elétrica vem primeiro."},{"topico":"Materiais e ferramentas","resumo":"Cal, carvão vegetal e vidro são materiais base de muitas tecnologias antigas. Ferramentas de metal podem ser recuperadas de sucata por muito tempo. Saber afiar, consertar e adaptar é mais útil que fabricar do zero. Documente o que aprender."},{"topico":"Método científico","resumo":"O livro defende que o maior conhecimento a preservar é o método: observar, testar, medir e registrar. Isso permite redescobrir soluções sem depender de manuais. Teste uma variável por vez. Anote resultados, inclusive os fracassos."}]},{"id":"fm-21-76","titulo":"U.S. Army Survival Manual (FM 21-76)","titulo_pt":null,"autor":"Department of the Army (Exército dos EUA)","ano":1992,"edicoes":"Original de 1970; revisão de 1992; substituído pelo FM 3-05.70 (2002). Conteúdo de domínio público.","por_que":"Manual militar completo e gratuito, com capítulos de água, fogo, abrigo, plantas, armadilhas, navegação e ambientes extremos.","onde":"Domínio público: PDF gratuito em diversos acervos (ex.: Internet Archive). Também em versões impressas baratas na Amazon.","fonte":["conhecimento geral do tema"],"topicos":[{"topico":"Psicologia de sobrevivência","resumo":"Medo, ansiedade, raiva, solidão e culpa são reações normais e precisam ser reconhecidas. Ter um plano e tarefas concretas reduz o pânico. Mantenha rotina, mesmo simples. A vontade de sobreviver pesa tanto quanto o equipamento."},{"topico":"Navegação sem GPS","resumo":"Aprenda a usar bússola e mapa topográfico, incluindo como orientar o mapa. No hemisfério Sul, o Cruzeiro do Sul ajuda a achar o sul à noite. A sombra de uma vara fincada no chão, marcada em dois momentos com 15 minutos de intervalo, indica a linha leste-oeste. Siga rios para baixo para encontrar povoados com mais chance."},{"topico":"Plantas comestíveis","resumo":"Nunca coma planta que não identificou com certeza. O manual descreve um teste de comestibilidade lento e em etapas, mas ele é arriscado e serve apenas como último recurso. Evite plantas com seiva leitosa, cheiro de amêndoa, cogumelos e frutos desconhecidos. Aprenda antes as plantas comuns da sua região."},{"topico":"Armadilhas e caça","resumo":"Armadilhas simples exigem conhecer trilhas e hábitos dos animais. Muitas são ilegais no Brasil em situação normal; caça é regulada por lei. Pratique apenas o conhecimento teórico ou em contexto legal. Insetos e peixes costumam render mais proteína com menos energia."},{"topico":"Ambientes extremos","resumo":"No calor, trabalhe nas horas frescas, fique na sombra e beba água com regularidade, sem racionar ao ponto de desidratar. No frio, mantenha-se seco, em camadas, e evite suar. Em mata fechada, proteja-se de insetos e mantenha os pés secos. Adapte o kit ao ambiente onde vive."},{"topico":"Sinais visuais","resumo":"Sinais no chão em formato de letras grandes com bom contraste são vistos de aeronaves. Fumaça branca destaca-se em fundo escuro e fumaça escura em fundo claro. Espelho de sinalização alcança grandes distâncias. Mantenha os sinais prontos para acender rápido."}]},{"id":"when-technology-fails","titulo":"When Technology Fails: A Manual for Self-Reliance, Sustainability, and Surviving the Long Emergency","titulo_pt":null,"autor":"Matthew Stein","ano":2000,"edicoes":"Edição revisada e ampliada em 2008 (Chelsea Green).","por_que":"Abrange emergências de curto prazo e autossuficiência de longo prazo: água, comida, energia, saúde, abrigo e preparação familiar.","onde":"Amazon (edição em inglês, impressa e Kindle).","fonte":["conhecimento geral do tema"],"topicos":[{"topico":"Plano de preparação em camadas","resumo":"Organize a preparação por horizonte: 72 horas (mochila), 2 semanas (estoque em casa) e longo prazo (habilidades e produção própria). Comece pelo curto prazo, que resolve a maioria das emergências reais. Revise o plano a cada 6 meses. Envolva toda a família."},{"topico":"Estoque de água","resumo":"Reserve cerca de 4 litros por pessoa por dia, só para beber e higiene mínima. Use recipientes de grau alimentício, bem fechados, longe do sol. Troque a água periodicamente. Tenha também como tratar água nova (filtro, fervura, cloro)."},{"topico":"Energia de reserva","resumo":"Mapeie o que precisa de energia essencial: luz, comunicação, refrigeração de remédios, bomba de água. Painel solar com controlador, bateria e inversor é a solução silenciosa e sem combustível. Gerador a combustão só ao ar livre, longe de janelas, por risco de monóxido de carbono. Reduzir consumo é mais barato que gerar."},{"topico":"Saúde sem hospital","resumo":"Monte kit de primeiros socorros completo e aprenda a usar cada item. Tenha estoque dos medicamentos de uso contínuo da família, sempre orientado pelo médico. Higiene e água segura previnem a maioria das doenças em crise. Faça curso presencial de primeiros socorros."},{"topico":"Abrigo e conforto térmico","resumo":"A casa é o melhor abrigo se estiver segura. Tenha forma de aquecer e cozinhar sem energia elétrica, com ventilação adequada. Saiba desligar gás, água e energia do imóvel. Defina com antecedência para onde ir se precisar sair."},{"topico":"Comunidade","resumo":"Grupos organizados atravessam crises melhor que indivíduos isolados. Conheça vizinhos, suas habilidades e necessidades. Combine formas de comunicação sem internet. Troca de habilidades vale mais que estoque individual."}]},{"id":"manual-primeiros-socorros-fiocruz","titulo":"Manual de Primeiros Socorros","titulo_pt":"Manual de Primeiros Socorros","autor":"Fundação Oswaldo Cruz (Fiocruz), Núcleo de Biossegurança","ano":2003,"edicoes":"Rio de Janeiro, Fiocruz / Ministério da Saúde.","por_que":"Manual brasileiro, gratuito e em português, com os procedimentos básicos de primeiros socorros. Bom para imprimir e deixar no kit.","onde":"PDF gratuito em sites oficiais da Fiocruz e do Ministério da Saúde. Complementar com curso presencial (Cruz Vermelha, SENAC, Corpo de Bombeiros).","fonte":["conhecimento geral do tema"],"topicos":[{"topico":"Avaliação da cena","resumo":"Antes de ajudar, verifique se o local é seguro para você: trânsito, fogo, eletricidade, gás. Socorrista ferido vira mais uma vítima. Ligue 192 (SAMU) ou 193 (Bombeiros) o quanto antes. Use luvas ou barreira improvisada para evitar contato com sangue."},{"topico":"Parada cardiorrespiratória","resumo":"Se a pessoa não responde e não respira normalmente, chame socorro e inicie compressões no centro do peito, fortes e rápidas (100 a 120 por minuto). Deixe o tórax voltar totalmente entre as compressões. Use desfibrilador automático (DEA) assim que disponível, seguindo as instruções de voz. Não pare até chegar ajuda."},{"topico":"Hemorragias","resumo":"Aplique pressão direta firme sobre o ferimento com pano limpo. Se encharcar, coloque outro pano por cima sem retirar o primeiro. Em sangramento grave de braço ou perna que não para com pressão, o torniquete é indicado. Mantenha a vítima deitada e aquecida."},{"topico":"Queimaduras","resumo":"Resfrie a área com água corrente em temperatura ambiente por vários minutos. Não use gelo, pasta de dente, manteiga ou outros produtos caseiros. Não estoure bolhas. Cubra com pano limpo e procure atendimento para queimaduras extensas, no rosto, mãos, genitais ou profundas."},{"topico":"Fraturas e entorses","resumo":"Não tente colocar o osso no lugar. Imobilize na posição encontrada com talas improvisadas (papelão, madeira) acolchoadas, incluindo as articulações acima e abaixo. Verifique circulação abaixo da imobilização. Suspeita de lesão na coluna: não mova a vítima, salvo perigo imediato."},{"topico":"Engasgo em adultos","resumo":"Se a pessoa não consegue falar, tossir ou respirar, faça a manobra de Heimlich: por trás, mãos fechadas acima do umbigo, compressões para dentro e para cima. Repita até desobstruir ou a pessoa desmaiar. Se desmaiar, chame socorro e inicie RCP. Se ela ainda tosse com força, incentive a tosse."},{"topico":"Intoxicações","resumo":"Afaste a vítima da fonte (gás, produto químico) se for seguro. Não provoque vômito. Guarde a embalagem do produto para informar ao atendimento. Ligue para o Disque-Intoxicação da Anvisa (0800 722 6001) ou para o 192."}]},{"id":"ball-home-preserving","titulo":"Ball Complete Book of Home Preserving","titulo_pt":null,"autor":"Judi Kingry e Lauren Devine","ano":2006,"edicoes":"Robert Rose.","por_que":"Referência com centenas de receitas testadas de conservas caseiras, com foco em segurança alimentar.","onde":"Amazon (edição em inglês, impressa).","fonte":["conhecimento geral do tema"],"topicos":[{"topico":"Acidez define o método","resumo":"Alimentos ácidos (frutas, geleias, picles com vinagre, tomate acidificado) podem ser processados em banho-maria. Alimentos de baixa acidez (carnes, feijão, legumes) exigem panela de pressão própria para conservas. Errar o método pode causar botulismo. Siga receitas testadas, sem improvisar proporções."},{"topico":"Preparo dos vidros","resumo":"Use vidros próprios para conserva, sem trincas, e tampas novas. Lave bem e mantenha aquecidos até o envase. Deixe o espaço livre recomendado no topo do vidro. Retire bolhas de ar com espátula antes de fechar."},{"topico":"Vedação e armazenamento","resumo":"Depois de esfriar, a tampa deve estar côncava e não estalar ao ser pressionada. Vidros que não vedaram vão para a geladeira e devem ser consumidos logo. Guarde em local fresco, seco e escuro. Identifique com conteúdo e data."},{"topico":"Sinais de estrago","resumo":"Descarte sem provar: tampa estufada, vazamento, espuma, líquido turvo fora do normal, mofo, cheiro estranho ou jato ao abrir. Em caso de suspeita de botulismo, não prove nem para conferir. Descarte de forma que animais não tenham acesso. Higienize as superfícies que tiveram contato."},{"topico":"Geleias e picles","resumo":"Geleia depende do equilíbrio entre fruta, açúcar, pectina e acidez. Picles dependem de vinagre com acidez conhecida, geralmente 5%. Não reduza vinagre nem açúcar das receitas de conserva sem receita testada para isso. Prefira sal sem iodo para picles, que não escurece a conserva."}]},{"id":"gaias-garden","titulo":"Gaia's Garden: A Guide to Home-Scale Permaculture","titulo_pt":null,"autor":"Toby Hemenway","ano":2001,"edicoes":"Chelsea Green; 2ª edição em 2009.","por_que":"Introdução acessível à permacultura em escala doméstica: produzir alimento em pouco espaço com menos trabalho e mais resiliência.","onde":"Amazon (edição em inglês, impressa e Kindle).","fonte":["conhecimento geral do tema"],"topicos":[{"topico":"Zonas de uso","resumo":"Organize o terreno por frequência de uso: o que você colhe todo dia (temperos, folhas) fica perto da porta. Pomar e criações ficam mais afastados. Isso economiza tempo e energia. Observe o terreno por algumas estações antes de grandes mudanças."},{"topico":"Solo vivo","resumo":"Solo fértil é cheio de matéria orgânica e organismos. Cubra o solo sempre com palha ou folhas (cobertura morta) para manter umidade e evitar erosão. Faça compostagem com restos de cozinha e jardim. Evite revirar o solo em excesso."},{"topico":"Guildas de plantas","resumo":"Combine plantas que se ajudam: uma árvore frutífera com leguminosas que fixam nitrogênio, flores que atraem polinizadores e plantas de cobertura. O policultivo reduz pragas e aumenta a produção total. A clássica milho, feijão e abóbora é um exemplo. Adapte às espécies do seu clima."},{"topico":"Captação de água","resumo":"Colete água de chuva do telhado em cisternas ou bombonas para irrigação. Desenhe canteiros e valas em curva de nível para infiltrar água no solo. Cobertura morta reduz a necessidade de rega. Água de chuva para beber exige tratamento."},{"topico":"Perenes primeiro","resumo":"Plantas perenes (frutíferas, mandioca, bananeira, ora-pro-nóbis) produzem por anos com pouco trabalho. Elas formam a base de um sistema resiliente. Anuais complementam. Plante árvores cedo, porque levam anos para produzir."}]},{"id":"panc-brasil","titulo":"Plantas Alimentícias Não Convencionais (PANC) no Brasil","titulo_pt":"Plantas Alimentícias Não Convencionais (PANC) no Brasil","autor":"Valdely Ferreira Kinupp e Harri Lorenzi","ano":2014,"edicoes":"Instituto Plantarum de Estudos da Flora.","por_que":"Guia brasileiro com centenas de plantas comestíveis pouco conhecidas, fotos e receitas. Essencial para reconhecer alimento disponível no próprio quintal e no interior.","onde":"Livrarias e Amazon (edição em português, impressa).","fonte":["conhecimento geral do tema"],"topicos":[{"topico":"Identificação correta","resumo":"Só consuma planta identificada com 100% de certeza, conferindo folha, flor, caule e fruto. Muitas plantas comestíveis têm parecidas tóxicas. Aprenda com quem conhece a planta ao vivo. Na dúvida, não coma."},{"topico":"PANC fáceis de cultivar","resumo":"Ora-pro-nóbis, taioba, peixinho-da-horta, capuchinha, beldroega e bertalha são exemplos comuns no Brasil. Muitas crescem sozinhas e resistem a pragas. Tenha mudas no quintal ou em vasos. Ora-pro-nóbis é rica em proteína e serve de cerca viva."},{"topico":"Preparo seguro","resumo":"Algumas PANC precisam de cozimento para eliminar substâncias irritantes; a taioba, por exemplo, deve ser cozida e não confundida com plantas parecidas. Lave bem e consuma em quantidade moderada no início. Respeite a forma de preparo indicada para cada espécie. Evite colher à beira de estradas ou áreas contaminadas."},{"topico":"Colheita sustentável","resumo":"Colha só parte da planta para que ela continue produzindo. Não arranque espécies nativas raras. Prefira cultivar a coletar na natureza. Guarde sementes e estacas para multiplicar."},{"topico":"PANC como reserva alimentar","resumo":"Um quintal com PANC perenes garante folhas verdes e proteína vegetal mesmo sem acesso a mercado. Elas complementam o estoque de grãos com vitaminas e minerais. Muitas se propagam por estaca e exigem pouca água. Monte o canteiro agora para ter produção quando precisar."}]},{"id":"deep-survival","titulo":"Deep Survival: Who Lives, Who Dies, and Why","titulo_pt":null,"autor":"Laurence Gonzales","ano":2003,"edicoes":"W. W. Norton.","por_que":"Estuda casos reais de acidentes e mostra como a mente decide quem sobrevive. Complementa os manuais técnicos com o lado psicológico.","onde":"Amazon (edição em inglês, impressa, Kindle e audiolivro).","fonte":["conhecimento geral do tema"],"topicos":[{"topico":"Aceitar a realidade rápido","resumo":"Quem sobrevive reconhece cedo que a situação mudou e para de agir como se tudo estivesse normal. Negação faz perder tempo precioso. Diga em voz alta o que aconteceu e o que precisa ser feito. Atualize o plano conforme surgem fatos novos."},{"topico":"Mapas mentais errados","resumo":"Pessoas se perdem por insistir no mapa mental que têm na cabeça, mesmo quando o terreno o contradiz. Quando algo não bate, pare e reavalie. Volte ao último ponto conhecido em vez de seguir adiante às cegas. Confie no mapa e na bússola, não na intuição."},{"topico":"Controlar emoções","resumo":"Respirar fundo, contar e focar em pequenas tarefas reduz o pânico. Humor e senso de propósito ajudam a manter a cabeça funcionando. Pense em pessoas que dependem de você como motivação. Divida o problema em passos pequenos e comemore cada passo concluído."},{"topico":"Excesso de confiança","resumo":"Experiência pode virar armadilha quando gera desatenção às regras de segurança. Respeite sinais de alerta (tempo fechando, cansaço, horário). Defina antes um horário-limite para desistir e volte. Seguir as regras de segurança importa mais que chegar ao objetivo."},{"topico":"Liderança e grupo","resumo":"Em grupos, decisões apressadas por pressão social causam acidentes. Escolha um líder para decisões rápidas e ouça quem discorda com argumentos. Distribua tarefas para todos se sentirem úteis. Cuide de quem está mais abalado, porque o desânimo é contagioso."}]},{"id":"98-6-degrees","titulo":"98.6 Degrees: The Art of Keeping Your Ass Alive","titulo_pt":null,"autor":"Cody Lundin","ano":2003,"edicoes":"Gibbs Smith.","por_que":"Foca no que mais mata em situações de sobrevivência: perder o controle da temperatura corporal. Linguagem direta e kit mínimo bem explicado.","onde":"Amazon (edição em inglês, impressa e Kindle).","fonte":["conhecimento geral do tema"],"topicos":[{"topico":"Temperatura corporal em primeiro lugar","resumo":"Hipotermia e hipertermia matam mais rápido que fome ou sede. Roupa, abrigo e fogo existem para manter o corpo perto de 37 graus. Avalie sempre se você está ganhando ou perdendo calor. Aja antes de tremer forte ou de parar de suar no calor."},{"topico":"Roupas em camadas","resumo":"Camada de base que afasta suor, camada intermediária que isola e camada externa contra vento e chuva. Algodão molhado perde o isolamento e esfria o corpo. Tire camadas antes de suar e recoloque ao parar. Mantenha uma muda seca guardada em saco impermeável."},{"topico":"Calor e insolação","resumo":"No calor, reduza atividade nas horas mais quentes, fique na sombra e cubra a cabeça. Sinais de alerta: tontura, dor de cabeça, náusea, confusão e pele muito quente. Resfrie a pessoa com água e ventilação e procure socorro. Não espere a sede para beber."},{"topico":"Kit mínimo realista","resumo":"Leve o que de fato usa e sabe usar: faca, fonte de fogo, recipiente de metal, abrigo leve, água, luz e primeiros socorros. Teste o kit em saídas curtas. Equipamento que fica em casa não ajuda. Revise o kit a cada estação."},{"topico":"Água e hidratação","resumo":"Desidratação reduz força, raciocínio e capacidade de regular a temperatura. Beba aos poucos ao longo do dia em vez de racionar até passar mal. Urina escura e pouca indica que precisa beber mais. Reduza perda de água evitando esforço no calor e mantendo-se na sombra."}]}],"livrosAviso":"Conteúdo educativo para preparação pessoal. Não substitui curso presencial certificado nem atendimento profissional. Sem dosagem de medicamentos.","conhecimentos":[{"id":"agricultura","titulo":"Agricultura e horta doméstica","origem":"anotado pelo Elton","por_que":"Produzir parte da própria comida reduz a dependência de mercado em crise longa e é a base de qualquer plano de autossuficiência.","prioridade":"alta","como":["Comece com uma horta pequena (vasos ou 2 canteiros) de folhas e temperos de ciclo curto.","Faça um curso gratuito de horta doméstica ou orgânica na Embrapa e-Campo ou no SENAR EaD.","Monte uma composteira com restos de cozinha.","Plante perenes resistentes: mandioca, batata-doce, banana, ora-pro-nóbis.","Guarde sementes de variedades não híbridas e anote datas de plantio e colheita."],"fontes":[{"nome":"Embrapa e-Campo (cursos online gratuitos com certificado)","url":"https://www.embrapa.br/e-campo","obs":"Autoinstrucional, de 4 a 80 horas. Temas como horta, compostagem, saneamento rural e criação."},{"nome":"SENAR EaD / Senar Play (cursos gratuitos)","url":"https://ead.senar.org.br","obs":"Cursos do meio rural, gratuitos, com certificado. Algumas regionais têm portal próprio (ex.: ead.senargo.org.br)."}],"marcos":["Primeira colheita de folhosas","Composteira funcionando","Uma cultura de base (mandioca ou batata-doce) colhida","Banco de sementes próprio com 5 espécies","Calendário de plantio da sua região anotado"]},{"id":"ferramentas","titulo":"Criar coisas e manipular ferramentas","origem":"anotado pelo Elton","por_que":"Consertar, construir e adaptar objetos multiplica o valor de tudo que você tem e evita depender de serviços que podem parar.","prioridade":"alta","como":["Monte uma caixa de ferramentas básica: martelo, chaves de fenda e Phillips, alicates, serrote, trena, furadeira, nível.","Aprenda a afiar facas e ferramentas de corte com pedra de afiar.","Faça pequenos projetos: prateleira, conserto de móvel, troca de torneira.","Faça curso introdutório de manutenção ou elétrica no SENAI.","Use sempre equipamento de proteção (óculos, luvas, protetor auricular)."],"fontes":[{"nome":"SENAI (cursos livres e gratuitos online)","url":"https://www.mundosenai.com.br","obs":"Cursos introdutórios de eletricidade, manutenção e outros; verificar ofertas atuais."},{"nome":"SENAR EaD / Senar Play (cursos gratuitos)","url":"https://ead.senar.org.br","obs":"Cursos do meio rural, gratuitos, com certificado. Algumas regionais têm portal próprio (ex.: ead.senargo.org.br)."}],"marcos":["Caixa de ferramentas montada","Afiar uma faca até cortar papel","Um móvel ou estrutura simples construído","Um conserto hidráulico feito sozinho","Nós básicos dominados (lais de guia, volta do fiel)"]},{"id":"interior-rural","titulo":"Vida no interior e em áreas rurais","origem":"anotado pelo Elton","por_que":"Áreas rurais oferecem água, terra e espaço, mas exigem conhecimento próprio: clima local, recursos, vizinhança e serviços disponíveis.","prioridade":"média","como":["Escolha uma ou duas regiões candidatas e visite em estações diferentes (seca e chuva).","Verifique fonte de água permanente, acesso em dia de chuva, energia, sinal de celular e distância de hospital.","Converse com produtores locais e com a assistência técnica rural (Emater do estado).","Faça cursos do SENAR sobre produção e criação adequadas à região.","Conheça o regime de chuvas, riscos (seca, enchente, queimada) e a legislação ambiental do imóvel."],"fontes":[{"nome":"SENAR EaD / Senar Play (cursos gratuitos)","url":"https://ead.senar.org.br","obs":"Cursos do meio rural, gratuitos, com certificado. Algumas regionais têm portal próprio (ex.: ead.senargo.org.br)."},{"nome":"Embrapa e-Campo (cursos online gratuitos com certificado)","url":"https://www.embrapa.br/e-campo","obs":"Autoinstrucional, de 4 a 80 horas. Temas como horta, compostagem, saneamento rural e criação."}],"marcos":["Região candidata definida","Visita na seca e na chuva","Lista de recursos locais (água, saúde, comércio)","Contato com Emater ou produtor local","Plano de rota até o local"]},{"id":"agua","titulo":"Purificação e captação de água","origem":"sugestão adicional","por_que":"Água contaminada é a principal causa de doença em emergências. Saber tratar e captar água é prioridade máxima.","prioridade":"alta","como":["Leia a orientação do Ministério da Saúde sobre tratamento de água com hipoclorito.","Tenha hipoclorito 2,5% (posto de saúde) ou água sanitária só com hipoclorito e água, sem perfume.","Pratique os três métodos: filtrar, ferver e clorar.","Monte uma captação simples de chuva com calha e bombona de grau alimentício."],"fontes":[{"nome":"Ministério da Saúde: orientações à população em situação de enchentes","url":"https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/enchentes/publicacoes/orientacoes-a-populacao-em-situacao-de-enchentes.pdf","obs":"Tratamento de água com hipoclorito de sódio 2,5% e cuidados com alimentos."},{"nome":"Embrapa e-Campo (cursos online gratuitos com certificado)","url":"https://www.embrapa.br/e-campo","obs":"Autoinstrucional, de 4 a 80 horas. Temas como horta, compostagem, saneamento rural e criação."}],"marcos":["Tratar 10 litros com hipoclorito seguindo a dose oficial","Ferver água em fogareiro sem energia","Filtro portátil testado","Captação de chuva funcionando"]},{"id":"primeiros-socorros","titulo":"Primeiros socorros e APH básico","origem":"sugestão adicional","por_que":"Em crise, o socorro demora ou não vem. Saber agir nos primeiros minutos salva vidas na família.","prioridade":"alta","como":["Faça um curso presencial certificado de primeiros socorros (Cruz Vermelha, SENAC, Corpo de Bombeiros).","Inclua no curso RCP de adulto e de bebê e uso do DEA.","Imprima o Manual de Primeiros Socorros da Fiocruz e guarde no kit.","Monte e revise o kit de primeiros socorros a cada 6 meses."],"fontes":[{"nome":"Cruz Vermelha Brasileira","url":"https://www.cruzvermelha.org.br","obs":"Cursos de primeiros socorros por filial estadual; consultar a filial mais próxima."},{"nome":"Hesperian Health Guides","url":"https://hesperian.org","obs":"Guias de saúde comunitária gratuitos online (principalmente em inglês e espanhol)."}],"marcos":["Curso presencial concluído com certificado","RCP praticada em manequim","Controle de hemorragia e torniquete praticados","Kit montado e revisado","Engasgo em bebê praticado em manequim"]},{"id":"conservacao-alimentos","titulo":"Conservação de alimentos","origem":"sugestão adicional","por_que":"Permite transformar colheitas e promoções em estoque seguro e reduzir desperdício sem geladeira.","prioridade":"alta","como":["Aprenda as regras de armazenamento a seco (ver armazenamento.json).","Pratique desidratação de frutas e ervas ao sol ou em forno baixo.","Faça conservas ácidas simples (picles, geleias) seguindo receitas testadas.","Estude botulismo e por que alimento de baixa acidez exige pressão."],"fontes":[{"nome":"Embrapa e-Campo (cursos online gratuitos com certificado)","url":"https://www.embrapa.br/e-campo","obs":"Autoinstrucional, de 4 a 80 horas. Temas como horta, compostagem, saneamento rural e criação."},{"nome":"SENAR EaD / Senar Play (cursos gratuitos)","url":"https://ead.senar.org.br","obs":"Cursos do meio rural, gratuitos, com certificado. Algumas regionais têm portal próprio (ex.: ead.senargo.org.br)."}],"marcos":["Estoque organizado em sistema PEPS","Primeiro lote de fruta desidratada","Primeira conserva com vedação conferida","Lista de sinais de estrago memorizada"]},{"id":"navegacao","titulo":"Orientação e navegação","origem":"sugestão adicional","por_que":"Sem GPS ou internet, saber ler mapa e usar bússola garante chegar a um destino ou ponto de encontro.","prioridade":"média","como":["Baixe mapas offline (Organic Maps) da sua cidade e das rotas de saída.","Compre bússola de placa base e um mapa impresso da região.","Aprenda a orientar o mapa e a seguir um azimute.","Pratique em trilhas conhecidas antes de lugares novos."],"fontes":[{"nome":"Cursos de Proteção e Defesa Civil (gov.br)","url":"https://www.gov.br/pt-br/servicos/participar-de-cursos-em-protecao-e-defesa-civil","obs":"Cursos a distância da Secretaria Nacional de Proteção e Defesa Civil via EV.G."}],"marcos":["Mapas offline baixados","Mapa impresso com rotas marcadas","Seguir azimute por 500 m com precisão","Achar o sul pelo Cruzeiro do Sul"]},{"id":"radio","titulo":"Rádio e comunicação offline","origem":"sugestão adicional","por_que":"Celular e internet caem em grandes desastres. Rádio mantém família e comunidade em contato e recebe alertas.","prioridade":"média","como":["Tenha rádio AM/FM a pilha ou manivela para ouvir alertas.","Use walkie-talkies em faixas de uso livre para curta distância com a família.","Estude para o exame do COER (radioamador) com material da LABRE.","Combine canais e horários fixos de contato com a família."],"fontes":[{"nome":"LABRE (Liga de Amadores Brasileiros de Rádio Emissão)","url":"https://www.labre.org.br","obs":"Orienta sobre o exame do COER; procure a LABRE do seu estado."},{"nome":"gov.br: obter autorização para serviço de radioamador","url":"https://www.gov.br/pt-br/servicos/obter-autorizacao-para-servico-de-radioamador","obs":"Prova gratuita aplicada pela Anatel; taxas só após aprovação."}],"marcos":["Rádio de emergência funcionando","Plano de comunicação familiar escrito","Walkie-talkies testados a 1 km","Exame do COER feito","Indicativo de chamada obtido"]},{"id":"energia","titulo":"Eletricidade básica e energia solar","origem":"sugestão adicional","por_que":"Energia mínima para luz, comunicação e carregar baterias muda a qualidade de vida numa queda prolongada.","prioridade":"média","como":["Faça curso introdutório de eletricidade (SENAI ou similar) e aprenda segurança elétrica.","Entenda o sistema básico: painel, controlador de carga, bateria e inversor.","Comece com um kit solar pequeno (painel de 50 a 100 W) para carregar celulares e lanternas.","Calcule o consumo dos aparelhos essenciais em watts-hora por dia."],"fontes":[{"nome":"SENAI (cursos livres e gratuitos online)","url":"https://www.mundosenai.com.br","obs":"Cursos introdutórios de eletricidade, manutenção e outros; verificar ofertas atuais."},{"nome":"Escola Virtual de Governo (Enap)","url":"https://www.escolavirtual.gov.br","obs":"Cursos online gratuitos com certificado digital."}],"marcos":["Curso de eletricidade básica concluído","Consumo essencial calculado","Kit solar pequeno montado e testado","Saber medir tensão com multímetro"]},{"id":"pequenos-animais","titulo":"Criação de pequenos animais","origem":"sugestão adicional","por_que":"Galinhas, codornas e coelhos fornecem proteína contínua em pouco espaço.","prioridade":"baixa","como":["Comece por galinhas ou codornas, que são mais simples.","Faça curso de avicultura de base familiar no SENAR ou na Embrapa.","Construa abrigo seguro contra predadores e chuva.","Verifique regras do município para criação em área urbana."],"fontes":[{"nome":"SENAR EaD / Senar Play (cursos gratuitos)","url":"https://ead.senar.org.br","obs":"Cursos do meio rural, gratuitos, com certificado. Algumas regionais têm portal próprio (ex.: ead.senargo.org.br)."},{"nome":"Embrapa e-Campo (cursos online gratuitos com certificado)","url":"https://www.embrapa.br/e-campo","obs":"Autoinstrucional, de 4 a 80 horas. Temas como horta, compostagem, saneamento rural e criação."}],"marcos":["Curso de avicultura concluído","Galinheiro construído","Primeiro ciclo de postura","Plano de alimentação e água definido"]},{"id":"plantas-brasil","titulo":"Plantas comestíveis e medicinais do Brasil","origem":"sugestão adicional","por_que":"Reconhecer PANC e plantas úteis amplia as fontes de alimento. ALERTA: identificação errada pode matar; só consuma com 100% de certeza.","prioridade":"média","como":["Leia o livro PANC no Brasil (Kinupp e Lorenzi).","Cultive 5 PANC no quintal para aprender a reconhecê-las ao vivo.","Participe de oficinas e caminhadas de identificação com especialistas.","Plantas medicinais: use apenas como complemento e com orientação de profissional de saúde."],"fontes":[{"nome":"Embrapa e-Campo (cursos online gratuitos com certificado)","url":"https://www.embrapa.br/e-campo","obs":"Autoinstrucional, de 4 a 80 horas. Temas como horta, compostagem, saneamento rural e criação."},{"nome":"Livro: Plantas Alimentícias Não Convencionais (PANC) no Brasil","url":"https://www.plantarum.com.br","obs":"Kinupp e Lorenzi, Instituto Plantarum, 2014."}],"marcos":["5 PANC cultivadas","10 plantas identificadas com certeza","3 receitas com PANC preparadas","Lista de plantas tóxicas parecidas estudada"]},{"id":"costura-reparos","titulo":"Costura e reparos","origem":"sugestão adicional","por_que":"Consertar roupa, mochila, lona e calçado prolonga a vida útil do equipamento quando não há reposição.","prioridade":"baixa","como":["Monte kit com agulhas, linha forte, linha encerada, alfinetes e remendos.","Aprenda pontos básicos: alinhavo, ponto atrás e ponto caseado.","Pratique remendo em roupa velha e conserto de alça de mochila.","Aprenda a usar fita adesiva tipo duct tape e cola de contato em reparos rápidos."],"fontes":[{"nome":"SENAI (cursos livres e gratuitos online)","url":"https://www.mundosenai.com.br","obs":"Cursos introdutórios de eletricidade, manutenção e outros; verificar ofertas atuais."}],"marcos":["Kit de costura montado","Botão pregado","Rasgo remendado","Alça de mochila reforçada"]},{"id":"seguranca-domiciliar","titulo":"Defesa pessoal e segurança domiciliar","origem":"sugestão adicional","por_que":"Em crises, aumenta o risco de furtos e conflitos. Prevenir e evitar o confronto é a melhor defesa.","prioridade":"média","como":["Reforce portas, fechaduras e iluminação externa.","Combine com a família regras de acesso, senhas e ponto de fuga.","Faça aulas de defesa pessoal em academia credenciada, com foco em evitar e escapar.","Conheça vizinhos e organize rede de apoio e comunicação.","Qualquer arma exige cumprir a legislação brasileira; armas de fogo dependem de registro e autorização legal."],"fontes":[{"nome":"Cursos de Proteção e Defesa Civil (gov.br)","url":"https://www.gov.br/pt-br/servicos/participar-de-cursos-em-protecao-e-defesa-civil","obs":"Cursos a distância da Secretaria Nacional de Proteção e Defesa Civil via EV.G."}],"marcos":["Avaliação de pontos fracos da casa feita","Plano familiar de segurança combinado","Aulas de defesa pessoal iniciadas","Rede de vizinhos organizada"]},{"id":"higiene-saneamento","titulo":"Higiene e saneamento","origem":"sugestão adicional","por_que":"Sem água encanada e coleta de lixo, doenças se espalham rápido. Higiene simples evita a maioria delas.","prioridade":"alta","como":["Estoque sabão, álcool, água sanitária, sacos de lixo resistentes e papel higiênico.","Saiba montar banheiro de emergência com balde, saco duplo e serragem ou cal.","Defina local de descarte de lixo longe da água e da casa.","Faça curso de saneamento rural na Embrapa ou SENAR."],"fontes":[{"nome":"Embrapa e-Campo (cursos online gratuitos com certificado)","url":"https://www.embrapa.br/e-campo","obs":"Autoinstrucional, de 4 a 80 horas. Temas como horta, compostagem, saneamento rural e criação."},{"nome":"SENAR EaD / Senar Play (cursos gratuitos)","url":"https://ead.senar.org.br","obs":"Cursos do meio rural, gratuitos, com certificado. Algumas regionais têm portal próprio (ex.: ead.senargo.org.br)."},{"nome":"Ministério da Saúde: orientações à população em situação de enchentes","url":"https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/enchentes/publicacoes/orientacoes-a-populacao-em-situacao-de-enchentes.pdf","obs":"Tratamento de água com hipoclorito de sódio 2,5% e cuidados com alimentos."}],"marcos":["Estoque de higiene para 30 dias","Banheiro de emergência montado e testado","Plano de lixo definido","Estação de lavar mãos sem água encanada montada"]},{"id":"fogo-coccao","titulo":"Fogo e cocção sem energia","origem":"sugestão adicional","por_que":"Cozinhar e ferver água sem gás ou energia é essencial em crise longa.","prioridade":"alta","como":["Tenha fogareiro e combustível de reserva, usados apenas em área ventilada.","Pratique acender fogo com isqueiro, fósforo e pederneira.","Aprenda a montar fogão de tijolo ou fogão foguete simples.","Tenha extintor e saiba usá-lo."],"fontes":[{"nome":"Cursos de Proteção e Defesa Civil (gov.br)","url":"https://www.gov.br/pt-br/servicos/participar-de-cursos-em-protecao-e-defesa-civil","obs":"Cursos a distância da Secretaria Nacional de Proteção e Defesa Civil via EV.G."}],"marcos":["Fogo aceso com pederneira","Refeição completa cozida sem gás de cozinha","Fogão improvisado montado","Extintor em casa e verificado"]},{"id":"psicologico","titulo":"Autocontrole psicológico","origem":"sugestão adicional","por_que":"Decisões em pânico causam mais danos que a própria emergência. Treinar a mente é tão importante quanto o kit.","prioridade":"alta","como":["Pratique respiração controlada (inspirar 4 s, segurar 4 s, soltar 4 s, segurar 4 s).","Faça simulados familiares de evacuação e falta de energia.","Leia Deep Survival (Laurence Gonzales).","Mantenha rotina e tarefas definidas em situações de crise."],"fontes":[{"nome":"Cursos de Proteção e Defesa Civil (gov.br)","url":"https://www.gov.br/pt-br/servicos/participar-de-cursos-em-protecao-e-defesa-civil","obs":"Cursos a distância da Secretaria Nacional de Proteção e Defesa Civil via EV.G."},{"nome":"Escola Virtual de Governo (Enap)","url":"https://www.escolavirtual.gov.br","obs":"Cursos online gratuitos com certificado digital."}],"marcos":["Respiração controlada praticada diariamente por 2 semanas","Simulado de evacuação feito","Simulado de 24 h sem energia feito","Papéis de cada membro da família definidos"]},{"id":"defesa-civil","titulo":"Gestão de riscos e Defesa Civil","origem":"sugestão adicional","por_que":"Entender os riscos da sua região (enchente, deslizamento, seca) e os alertas oficiais orienta toda a preparação.","prioridade":"alta","como":["Cadastre o CEP para receber alertas da Defesa Civil por SMS (envie o CEP para 40199).","Faça um curso gratuito de proteção e defesa civil pela EV.G.","Identifique as áreas de risco e abrigos da sua cidade.","Monte o plano familiar de emergência."],"fontes":[{"nome":"Cursos de Proteção e Defesa Civil (gov.br)","url":"https://www.gov.br/pt-br/servicos/participar-de-cursos-em-protecao-e-defesa-civil","obs":"Cursos a distância da Secretaria Nacional de Proteção e Defesa Civil via EV.G."},{"nome":"Escola Virtual de Governo (Enap)","url":"https://www.escolavirtual.gov.br","obs":"Cursos online gratuitos com certificado digital."}],"marcos":["Alertas por SMS ativos","Curso de defesa civil concluído","Riscos locais mapeados","Plano familiar escrito e compartilhado"]}]};

  var SUPABASE_URL = 'https://pnkmhapcphdnehuwequs.supabase.co';
  var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBua21oYXBjcGhkbmVodXdlcXVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQwOTQ1OTgsImV4cCI6MjEwOTY3MDU5OH0.PSp4e_E2gYC4F1lkMBkWJv5-dqub1wxymNsqEZdM2j8';
  var RE_EMAIL = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/;

  var CHAVE = 'controle-emergencia:v2';
  var CHAVE_V1 = 'controle-emergencia:v1';
  var MAX_NOME = 120;
  var MAX_PROPRIOS = 300;
  var MAX_CHAVES = 2000;
  var MAX_REMOVIDOS = 1000;
  var GRUPO_PROPRIO = 'Meus itens';
  var V1_CATS = ['mochila', 'socorros', 'alimentos'];
  var RE_V1_ID = /^(mochila|socorros|alimentos)-\d{2}$/;
  var RE_ID = /^[A-Za-z0-9_-]{1,64}$/;
  var RE_CHAVE = /^[A-Za-z0-9_:.-]{1,100}$/;
  var RE_HTTPS = /^https:\/\/[^\s"'<>]+$/;

  var ABAS = DADOS.abas;
  var IDS_ABA = ABAS.map(function (a) { return a.id; });
  var ABA = {};
  ABAS.forEach(function (a) { ABA[a.id] = a; });
  var IDS_CHECK = ABAS.filter(function (a) { return a.tipo === 'checklist'; }).map(function (a) { return a.id; });

  var ROTULOS_FILTRO = {
    checklist: ['Todos', 'Tenho', 'Falta'],
    habilidades: ['Todas', 'Aprendidas', 'A aprender'],
    tutoriais: ['Todos', 'Lidos', 'A ler'],
    livros: ['Todos', 'Lidos', 'A ler'],
    conhecimentos: ['Todos', 'Concluídos', 'Em aberto']
  };
  var ROTULO_PAINEL = {
    checklist: 'Já possuo: ',
    habilidades: 'Aprendidas: ',
    tutoriais: 'Lidos: ',
    livros: 'Lidos: ',
    conhecimentos: 'Marcos concluídos: '
  };

  var PADRAO_POR_ID = {};
  var LEGADO = {};
  var ITENS_PADRAO = [];
  ABAS.forEach(function (a) {
    if (a.tipo !== 'checklist') { return; }
    a.grupos.forEach(function (g) {
      g.itens.forEach(function (it) {
        PADRAO_POR_ID[it.id] = it;
        ITENS_PADRAO.push(it);
        (it.legado || []).forEach(function (lid) { LEGADO[lid] = true; });
      });
    });
  });

  var NS_SVG = 'http://www.w3.org/2000/svg';
  var ICONE_EDITAR = 'M4 20h4L19 9l-4-4L4 16v4zM13.5 6.5l4 4';
  var ICONE_REMOVER = 'M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13M10.5 11v6M13.5 11v6';

  var estado = null;
  var abaAtual = IDS_ABA[0];
  var filtro = 'todos';
  var busca = '';
  var tokens = [];
  var editandoId = null;
  var removido = null;
  var timerAviso = null;
  var abertos = {};
  var sync = null;

  var $ = function (id) { return document.getElementById(id); };
  function temProp(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }
  function mapa() { return Object.create(null); }

  function el(tag, props, filhos) {
    var n = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        if (k === 'text') { n.textContent = props[k]; }
        else if (k === 'class') { n.className = props[k]; }
        else { n.setAttribute(k, props[k]); }
      });
    }
    (filhos || []).forEach(function (f) { if (f) { n.appendChild(f); } });
    return n;
  }

  function icone(d) {
    var s = document.createElementNS(NS_SVG, 'svg');
    s.setAttribute('viewBox', '0 0 24 24');
    s.setAttribute('aria-hidden', 'true');
    var p = document.createElementNS(NS_SVG, 'path');
    p.setAttribute('d', d);
    s.appendChild(p);
    return s;
  }

  function limparNome(v) {
    return String(v).replace(/[\x00-\x1f\x7f]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function novoId() {
    return 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function linkExterno(texto, url, classe) {
    if (!RE_HTTPS.test(String(url))) { return el('span', { text: texto }); }
    var a = el('a', { href: url, target: '_blank', rel: 'noopener noreferrer', text: texto });
    if (classe) { a.className = classe; }
    return a;
  }

  // ---------- estado ----------
  function estadoVazio() {
    return { versao: 2, tenho: mapa(), feito: mapa(), proprios: [], renomeados: mapa(), removidos: [] };
  }

  function reservado(id) { return temProp(PADRAO_POR_ID, id) || temProp(LEGADO, id); }

  function validarMapaBool(o, rotulo) {
    var m = mapa();
    if (o === undefined) { return { ok: true, dados: m }; }
    if (!o || typeof o !== 'object' || Array.isArray(o)) { return { ok: false, erro: 'O campo ' + rotulo + ' do backup é inválido.' }; }
    var ks = Object.keys(o);
    if (ks.length > MAX_CHAVES) { return { ok: false, erro: 'O campo ' + rotulo + ' do backup é grande demais.' }; }
    for (var i = 0; i < ks.length; i++) {
      if (!RE_CHAVE.test(ks[i]) || o[ks[i]] !== true) { return { ok: false, erro: 'O campo ' + rotulo + ' do backup tem valores inválidos.' }; }
      m[ks[i]] = true;
    }
    return { ok: true, dados: m };
  }

  function validarV2(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) { return { ok: false, erro: 'O arquivo não tem o formato esperado.' }; }
    if (obj.versao !== 2) { return { ok: false, erro: 'Versão do backup não reconhecida.' }; }
    var t = validarMapaBool(obj.tenho, 'marcações');
    if (!t.ok) { return t; }
    var f = validarMapaBool(obj.feito, 'conhecimento');
    if (!f.ok) { return f; }

    var proprios = [];
    if (obj.proprios !== undefined) {
      if (!Array.isArray(obj.proprios) || obj.proprios.length > MAX_PROPRIOS) { return { ok: false, erro: 'A lista de itens próprios é inválida (máximo de ' + MAX_PROPRIOS + ').' }; }
      var vistos = {};
      for (var i = 0; i < obj.proprios.length; i++) {
        var it = obj.proprios[i];
        var pos = 'Item próprio ' + (i + 1) + ': ';
        if (!it || typeof it !== 'object' || Array.isArray(it)) { return { ok: false, erro: pos + 'formato inválido.' }; }
        if (typeof it.id !== 'string' || !RE_ID.test(it.id)) { return { ok: false, erro: pos + 'identificador inválido.' }; }
        if (temProp(vistos, it.id) || reservado(it.id)) { return { ok: false, erro: pos + 'identificador repetido ou reservado.' }; }
        if (IDS_CHECK.indexOf(it.cat) === -1) { return { ok: false, erro: pos + 'categoria desconhecida.' }; }
        if (typeof it.nome !== 'string') { return { ok: false, erro: pos + 'nome inválido.' }; }
        var nome = limparNome(it.nome);
        if (nome.length < 1 || nome.length > MAX_NOME) { return { ok: false, erro: pos + 'nome vazio ou longo demais.' }; }
        var grupo = GRUPO_PROPRIO;
        if (it.grupo !== undefined) {
          if (typeof it.grupo !== 'string') { return { ok: false, erro: pos + 'grupo inválido.' }; }
          grupo = limparNome(it.grupo).slice(0, 80) || GRUPO_PROPRIO;
        }
        vistos[it.id] = true;
        proprios.push({ id: it.id, cat: it.cat, grupo: grupo, nome: nome });
      }
    }

    var ren = mapa();
    if (obj.renomeados !== undefined) {
      if (!obj.renomeados || typeof obj.renomeados !== 'object' || Array.isArray(obj.renomeados)) { return { ok: false, erro: 'O campo de nomes editados é inválido.' }; }
      var kr = Object.keys(obj.renomeados);
      if (kr.length > MAX_CHAVES) { return { ok: false, erro: 'O campo de nomes editados é grande demais.' }; }
      for (var j = 0; j < kr.length; j++) {
        var v = obj.renomeados[kr[j]];
        if (!RE_ID.test(kr[j]) || typeof v !== 'string') { return { ok: false, erro: 'O campo de nomes editados tem valores inválidos.' }; }
        var nv = limparNome(v);
        if (nv.length < 1 || nv.length > MAX_NOME) { return { ok: false, erro: 'O campo de nomes editados tem nomes vazios ou longos demais.' }; }
        ren[kr[j]] = nv;
      }
    }

    var rem = [];
    if (obj.removidos !== undefined) {
      if (!Array.isArray(obj.removidos) || obj.removidos.length > MAX_REMOVIDOS) { return { ok: false, erro: 'A lista de itens removidos é inválida.' }; }
      for (var k = 0; k < obj.removidos.length; k++) {
        if (typeof obj.removidos[k] !== 'string' || !RE_ID.test(obj.removidos[k])) { return { ok: false, erro: 'A lista de itens removidos tem identificadores inválidos.' }; }
        if (rem.indexOf(obj.removidos[k]) === -1) { rem.push(obj.removidos[k]); }
      }
    }
    return { ok: true, dados: { versao: 2, tenho: t.dados, feito: f.dados, proprios: proprios, renomeados: ren, removidos: rem } };
  }

  function validarV1(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) { return { ok: false, erro: 'O arquivo não tem o formato esperado.' }; }
    if (obj.versao !== 1) { return { ok: false, erro: 'Versão do backup não reconhecida.' }; }
    if (!Array.isArray(obj.itens)) { return { ok: false, erro: 'O backup não contém a lista de itens.' }; }
    if (obj.itens.length === 0 || obj.itens.length > 600) { return { ok: false, erro: 'Quantidade de itens inválida (máximo de 600).' }; }
    var vistos = {};
    var itens = [];
    for (var i = 0; i < obj.itens.length; i++) {
      var it = obj.itens[i];
      var pos = 'Item ' + (i + 1) + ': ';
      if (!it || typeof it !== 'object' || Array.isArray(it)) { return { ok: false, erro: pos + 'formato inválido.' }; }
      if (typeof it.id !== 'string' || !RE_ID.test(it.id)) { return { ok: false, erro: pos + 'identificador inválido.' }; }
      if (temProp(vistos, it.id)) { return { ok: false, erro: pos + 'identificador repetido.' }; }
      if (V1_CATS.indexOf(it.cat) === -1) { return { ok: false, erro: pos + 'categoria desconhecida.' }; }
      if (typeof it.nome !== 'string') { return { ok: false, erro: pos + 'nome inválido.' }; }
      var nome = limparNome(it.nome);
      if (nome.length < 1 || nome.length > MAX_NOME) { return { ok: false, erro: pos + 'nome vazio ou longo demais.' }; }
      if (typeof it.tenho !== 'boolean') { return { ok: false, erro: pos + 'marcação inválida.' }; }
      var grupo = GRUPO_PROPRIO;
      if (it.grupo !== undefined) {
        if (typeof it.grupo !== 'string') { return { ok: false, erro: pos + 'grupo inválido.' }; }
        grupo = limparNome(it.grupo).slice(0, 80) || GRUPO_PROPRIO;
      }
      vistos[it.id] = true;
      itens.push({ id: it.id, cat: it.cat, grupo: grupo, nome: nome, tenho: it.tenho });
    }
    return { ok: true, dados: { versao: 1, itens: itens } };
  }

  function migrarV1(v1) {
    var e = estadoVazio();
    var porId = {};
    v1.itens.forEach(function (i) { porId[i.id] = i; });
    var cobertos = {};
    ITENS_PADRAO.forEach(function (it) {
      var origem = [];
      if (RE_V1_ID.test(it.id)) { origem.push(it.id); }
      (it.legado || []).forEach(function (lid) { origem.push(lid); });
      if (!origem.length) { return; }
      origem.forEach(function (id) { cobertos[id] = true; });
      var presentes = origem.filter(function (id) { return temProp(porId, id); });
      if (!presentes.length) { e.removidos.push(it.id); return; }
      if (presentes.some(function (id) { return porId[id].tenho; })) { e.tenho[it.id] = true; }
    });
    v1.itens.forEach(function (i) {
      if (temProp(cobertos, i.id)) { return; }
      if (temProp(PADRAO_POR_ID, i.id)) { if (i.tenho) { e.tenho[i.id] = true; } return; }
      if (e.proprios.length >= MAX_PROPRIOS) { return; }
      e.proprios.push({ id: i.id, cat: i.cat, grupo: i.grupo, nome: i.nome });
      if (i.tenho) { e.tenho[i.id] = true; }
    });
    return e;
  }

  function carregar() {
    try {
      var bruto = localStorage.getItem(CHAVE);
      if (bruto) {
        var r = validarV2(JSON.parse(bruto));
        if (r.ok) { return r.dados; }
        avisar('Os dados salvos estavam ilegíveis. A lista padrão foi carregada.', { erro: true });
        return estadoVazio();
      }
      var antigo = localStorage.getItem(CHAVE_V1);
      if (antigo) {
        var r1 = validarV1(JSON.parse(antigo));
        if (r1.ok) {
          var migrado = migrarV1(r1.dados);
          estado = migrado;
          salvar();
          avisar('Seus dados da versão 1 foram convertidos para a versão 2.');
          return migrado;
        }
        avisar('Os dados da versão 1 estavam ilegíveis. A lista padrão foi carregada.', { erro: true });
      }
    } catch (e) {
      avisar('Não foi possível ler os dados salvos. A lista padrão foi carregada.', { erro: true });
    }
    return estadoVazio();
  }

  function salvarLocal() {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(estado));
    } catch (e) {
      avisar('Não foi possível salvar neste navegador. Exporte um backup para não perder as marcações.', { erro: true, fixo: true });
    }
  }

  function salvar() {
    salvarLocal();
    if (sync) { sync.registrar(); }
  }

  // ---------- sincronização: estado <-> chaves planas ----------
  // t:<id> tenho | f:<chave> feito | p:<id> item próprio | r:<id> nome editado | x:<id> item padrão removido
  function projetar() {
    var p = Object.create(null);
    Object.keys(estado.tenho).forEach(function (id) { p['t:' + id] = true; });
    Object.keys(estado.feito).forEach(function (c) { p['f:' + c] = true; });
    estado.proprios.forEach(function (x) { p['p:' + x.id] = { cat: x.cat, grupo: x.grupo, nome: x.nome }; });
    Object.keys(estado.renomeados).forEach(function (id) { p['r:' + id] = estado.renomeados[id]; });
    estado.removidos.forEach(function (id) { p['x:' + id] = true; });
    return p;
  }

  function nomeValido(v) {
    if (typeof v !== 'string') { return null; }
    var n = limparNome(v);
    return n.length >= 1 && n.length <= MAX_NOME ? n : null;
  }

  function validarChaveSync(chave, valor) {
    if (typeof chave !== 'string' || chave.charAt(1) !== ':') { return false; }
    var tipo = chave.charAt(0);
    var resto = chave.slice(2);
    if (tipo === 't' || tipo === 'x') { return RE_ID.test(resto) && valor === true; }
    if (tipo === 'f') { return RE_CHAVE.test(resto) && valor === true; }
    if (tipo === 'r') { return RE_ID.test(resto) && nomeValido(valor) !== null; }
    if (tipo === 'p') {
      return RE_ID.test(resto) && !reservado(resto) && !!valor && typeof valor === 'object' && !Array.isArray(valor) &&
        IDS_CHECK.indexOf(valor.cat) !== -1 && nomeValido(valor.nome) !== null && typeof valor.grupo === 'string';
    }
    return false;
  }

  function aplicarSync(vals) {
    var e = estadoVazio();
    var novos = [];
    Object.keys(vals).forEach(function (k) {
      var v = vals[k];
      if (!validarChaveSync(k, v)) { return; }
      var tipo = k.charAt(0);
      var resto = k.slice(2);
      if (tipo === 't' && Object.keys(e.tenho).length < MAX_CHAVES) { e.tenho[resto] = true; }
      else if (tipo === 'f' && Object.keys(e.feito).length < MAX_CHAVES) { e.feito[resto] = true; }
      else if (tipo === 'r' && Object.keys(e.renomeados).length < MAX_CHAVES) { e.renomeados[resto] = nomeValido(v); }
      else if (tipo === 'x' && e.removidos.length < MAX_REMOVIDOS) { e.removidos.push(resto); }
      else if (tipo === 'p') { novos.push({ id: resto, cat: v.cat, grupo: limparNome(v.grupo).slice(0, 80) || GRUPO_PROPRIO, nome: nomeValido(v.nome) }); }
    });
    var porId = {};
    novos.forEach(function (p) { porId[p.id] = p; });
    estado.proprios.forEach(function (p) {
      if (porId[p.id] && e.proprios.length < MAX_PROPRIOS) { e.proprios.push(porId[p.id]); delete porId[p.id]; }
    });
    Object.keys(porId).sort().forEach(function (id) { if (e.proprios.length < MAX_PROPRIOS) { e.proprios.push(porId[id]); } });
    estado = e;
    salvarLocal();
    render();
  }

  // ---------- itens e progresso ----------
  function gruposDe(abaId) {
    var aba = ABA[abaId];
    var removidos = {};
    estado.removidos.forEach(function (id) { removidos[id] = true; });
    var grupos = [];
    var porNome = {};
    aba.grupos.forEach(function (g) {
      var gr = { nome: g.nome, nota: g.nota, itens: [] };
      g.itens.forEach(function (it) {
        if (temProp(removidos, it.id)) { return; }
        gr.itens.push({
          id: it.id, cat: abaId, grupo: g.nome,
          nome: estado.renomeados[it.id] || it.nome,
          def: it, proprio: false, tenho: !!estado.tenho[it.id]
        });
      });
      grupos.push(gr);
      porNome[g.nome] = gr;
    });
    estado.proprios.forEach(function (p) {
      if (p.cat !== abaId) { return; }
      var nome = p.grupo || GRUPO_PROPRIO;
      var gr = porNome[nome];
      if (!gr) { gr = { nome: nome, nota: null, itens: [] }; grupos.push(gr); porNome[nome] = gr; }
      gr.itens.push({ id: p.id, cat: abaId, grupo: nome, nome: p.nome, def: null, proprio: true, tenho: !!estado.tenho[p.id] });
    });
    return grupos;
  }

  function itensDe(abaId) {
    var lista = [];
    gruposDe(abaId).forEach(function (g) { lista = lista.concat(g.itens); });
    return lista;
  }

  function contar(lista) {
    var tem = 0;
    lista.forEach(function (i) { if (i.tenho) { tem += 1; } });
    var total = lista.length;
    return { tem: tem, total: total, pct: total ? Math.round(tem * 100 / total) : 0 };
  }

  function rotulo(c) { return c.tem + '/' + c.total + ' · ' + c.pct + '%'; }

  function chavesConhecimento(abaId) {
    var ch = [];
    if (abaId === 'habilidades') { DADOS.habilidades.forEach(function (h) { ch.push('hab:' + h.id); }); }
    else if (abaId === 'tutoriais') { DADOS.tutoriais.forEach(function (t) { if (!t.pendente) { ch.push('tut:' + t.id); } }); }
    else if (abaId === 'livros') { DADOS.livros.forEach(function (l) { ch.push('li:' + l.id); }); }
    else if (abaId === 'conhecimentos') { DADOS.conhecimentos.forEach(function (k) { k.marcos.forEach(function (m, i) { ch.push('marco:' + k.id + ':' + i); }); }); }
    return ch;
  }

  function progresso(aba) {
    if (aba.tipo === 'checklist') { return contar(itensDe(aba.id)); }
    var ch = chavesConhecimento(aba.id);
    var lista = ch.map(function (c) { return { tenho: !!estado.feito[c] }; });
    return contar(lista);
  }

  // ---------- busca ----------
  var memoTexto = typeof WeakMap === 'function' ? new WeakMap() : null;
  var PULAR = { url: 1, id: 1, legado: 1, via: 1, tarefa: 1, pendente: 1, grupo: 1, ano: 1 };

  function norm(s) {
    return String(s).normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
  }

  function achatar(o, acc) {
    if (o === null || o === undefined) { return acc; }
    if (typeof o === 'string') { acc.push(o); return acc; }
    if (typeof o === 'number') { acc.push(String(o)); return acc; }
    if (Array.isArray(o)) { o.forEach(function (x) { achatar(x, acc); }); return acc; }
    if (typeof o === 'object') {
      Object.keys(o).forEach(function (k) { if (!PULAR[k]) { achatar(o[k], acc); } });
    }
    return acc;
  }

  function textoBusca(o) {
    if (memoTexto && memoTexto.has(o)) { return memoTexto.get(o); }
    var t = norm(achatar(o, []).join(' \n '));
    if (memoTexto) { memoTexto.set(o, t); }
    return t;
  }

  function casa(texto) {
    for (var i = 0; i < tokens.length; i++) { if (texto.indexOf(tokens[i]) === -1) { return false; } }
    return true;
  }

  function casaObjeto(o) { return !tokens.length || casa(textoBusca(o)); }

  function casaItem(item) {
    if (!tokens.length) { return true; }
    var t = norm(item.nome + ' ' + item.grupo);
    if (item.def) {
      t += ' ' + textoBusca(item.def);
      if (item.def.via) { t += ' via reel'; }
      if (item.def.tarefa) { t += ' tarefa'; }
    }
    return casa(t);
  }

  function casaCartao(tipo, o) {
    if (!tokens.length) { return true; }
    if (tipo === 'tut' && o.pendente) { return casa(norm('removido do instagram reel ' + o.id + ' ' + o.secao)); }
    return casa(textoBusca(o));
  }

  function acertos(aba) {
    if (!tokens.length) { return 0; }
    var n = 0;
    if (aba.tipo === 'checklist') {
      gruposDe(aba.id).forEach(function (g) { g.itens.forEach(function (i) { if (casaItem(i)) { n += 1; } }); });
      (aba.extras || []).forEach(function (e) { if (casaObjeto(e)) { n += 1; } });
    } else if (aba.id === 'habilidades') {
      DADOS.habilidades.forEach(function (h) { if (casaCartao('hab', h)) { n += 1; } });
    } else if (aba.id === 'tutoriais') {
      DADOS.tutoriais.forEach(function (t) { if (casaCartao('tut', t)) { n += 1; } });
    } else if (aba.id === 'livros') {
      DADOS.livros.forEach(function (l) { if (casaCartao('liv', l)) { n += 1; } });
      (aba.extras || []).forEach(function (e) { if (casaObjeto(e)) { n += 1; } });
    } else if (aba.id === 'conhecimentos') {
      DADOS.conhecimentos.forEach(function (k) { if (casaCartao('con', k)) { n += 1; } });
    }
    return n;
  }

  function definirBusca(valor) {
    busca = limparNome(valor).slice(0, 80);
    tokens = norm(busca).split(' ').filter(function (t) { return t.length > 0; });
    if (tokens.length && acertos(ABA[abaAtual]) === 0) {
      for (var i = 0; i < ABAS.length; i++) {
        if (acertos(ABAS[i]) > 0) { abaAtual = ABAS[i].id; editandoId = null; break; }
      }
    }
    render();
    if (tokens.length) { var b = $('aba-' + abaAtual); if (b && b.scrollIntoView) { b.scrollIntoView({ block: 'nearest', inline: 'center' }); } }
  }

  // ---------- avisos e dialogo ----------
  function avisar(texto, opc) {
    opc = opc || {};
    var box = $('aviso');
    clearTimeout(timerAviso);
    box.textContent = '';
    box.className = 'aviso' + (opc.erro ? ' erro' : '');
    if (!texto) { return; }
    box.appendChild(el('span', { text: texto }));
    if (opc.desfazer) {
      var b = el('button', { type: 'button', text: 'Desfazer' });
      b.addEventListener('click', opc.desfazer);
      box.appendChild(b);
    }
    if (!opc.fixo) {
      timerAviso = setTimeout(function () { if (box.firstChild) { avisar(''); } }, 9000);
    }
  }

  function confirmar(titulo, texto, rotuloOk) {
    return new Promise(function (resolve) {
      var dlg = $('dlg');
      $('dlg-titulo').textContent = titulo;
      $('dlg-texto').textContent = texto;
      $('dlg-ok').textContent = rotuloOk;
      dlg.returnValue = '';
      dlg.addEventListener('close', function () { resolve(dlg.returnValue === 'ok'); }, { once: true });
      dlg.showModal();
    });
  }

  // ---------- componentes ----------
  function duplicado(cat, nome, ignorarId) {
    var alvo = nome.toLocaleLowerCase('pt-BR');
    return itensDe(cat).some(function (i) {
      return i.id !== ignorarId && i.nome.toLocaleLowerCase('pt-BR') === alvo;
    });
  }

  function marcar(mapaEstado, chave, valor) {
    if (valor) { mapaEstado[chave] = true; } else { delete mapaEstado[chave]; }
    salvar();
    render();
  }

  function caixa(chave, textoRotulo, mapaEstado, classe) {
    var chk = el('input', { type: 'checkbox', 'data-chave': chave, 'data-foco': chave });
    chk.checked = !!mapaEstado[chave];
    chk.addEventListener('change', function () { marcar(mapaEstado, chave, chk.checked); });
    return el('label', { class: 'marca ' + (classe || '') }, [chk, el('span', { class: 'nome', text: textoRotulo })]);
  }

  function lista(itens, ordenada) {
    var ul = el(ordenada ? 'ol' : 'ul');
    itens.forEach(function (t) { ul.appendChild(el('li', { text: t })); });
    return ul;
  }

  function detalhes(chave, titulo, corpo, classe) {
    var d = el('details', { class: classe || 'detalhes' }, [el('summary', { text: titulo }), el('div', { class: 'detalhe-corpo' }, corpo)]);
    if (tokens.length || abertos[chave]) { d.open = true; }
    d.addEventListener('toggle', function () {
      if (tokens.length) { return; }
      if (d.open) { abertos[chave] = true; } else { delete abertos[chave]; }
    });
    return d;
  }

  function secao(titulo, filho) {
    return [el('h4', { text: titulo }), filho];
  }

  function blocoAlerta(titulo, filho) {
    return el('div', { class: 'alerta', role: 'note' }, [el('strong', { text: titulo }), filho]);
  }

  function linksLista(links) {
    var ul = el('ul');
    links.forEach(function (l) {
      var li = el('li');
      li.appendChild(linkExterno(l.nome, l.url));
      if (l.obs) { li.appendChild(document.createTextNode(': ' + l.obs)); }
      ul.appendChild(li);
    });
    return ul;
  }

  function renderDica(dica) {
    var corpo = [];
    dica.forEach(function (d) {
      if (d.t) { corpo.push(el('p', {}, [el('strong', { text: d.r + ': ' }), document.createTextNode(d.t)])); }
      else if (d.l) { corpo.push(el('p', {}, [el('strong', { text: d.r + ':' })])); corpo.push(lista(d.l, false)); }
    });
    return corpo;
  }

  // ---------- checklist ----------
  function criarLinha(item) {
    var li = el('li', { class: 'item' + (item.tenho ? ' tem' : ''), 'data-id': item.id });

    if (editandoId === item.id) {
      var campo = el('input', { type: 'text', maxlength: String(MAX_NOME), 'aria-label': 'Nome do item', 'data-foco': item.id + ':campo' });
      campo.value = item.nome;
      var salvarBtn = el('button', { type: 'button', class: 'btn primario', text: 'Salvar', 'data-acao': 'salvar-edicao' });
      var cancelarBtn = el('button', { type: 'button', class: 'btn', text: 'Cancelar', 'data-acao': 'cancelar-edicao' });
      var confirmarEdicao = function () {
        var nome = limparNome(campo.value);
        if (!nome) { avisar('O nome do item não pode ficar vazio.', { erro: true }); campo.focus(); return; }
        if (nome.length > MAX_NOME) { avisar('Nome longo demais (máximo de ' + MAX_NOME + ' caracteres).', { erro: true }); campo.focus(); return; }
        if (duplicado(item.cat, nome, item.id)) { avisar('Já existe um item com esse nome nesta lista.', { erro: true }); campo.focus(); return; }
        if (item.proprio) {
          estado.proprios.forEach(function (p) { if (p.id === item.id) { p.nome = nome; } });
        } else if (nome === item.def.nome) {
          delete estado.renomeados[item.id];
        } else {
          estado.renomeados[item.id] = nome;
        }
        editandoId = null;
        salvar();
        avisar('');
        render();
      };
      var cancelarEdicao = function () { editandoId = null; avisar(''); render(); };
      salvarBtn.addEventListener('click', confirmarEdicao);
      cancelarBtn.addEventListener('click', cancelarEdicao);
      campo.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); confirmarEdicao(); }
        else if (e.key === 'Escape') { e.preventDefault(); cancelarEdicao(); }
      });
      li.appendChild(el('div', { class: 'edicao' }, [campo, salvarBtn, cancelarBtn]));
      return li;
    }

    var chk = el('input', { type: 'checkbox', 'data-foco': item.id + ':chk', 'data-chave': item.id });
    chk.checked = item.tenho;
    chk.addEventListener('change', function () { marcar(estado.tenho, item.id, chk.checked); });
    var rot = el('label', { class: 'marca' }, [chk, el('span', { class: 'nome', text: item.nome })]);

    var editar = el('button', { type: 'button', class: 'icone', title: 'Editar nome', 'aria-label': 'Editar nome: ' + item.nome, 'data-acao': 'editar', 'data-foco': item.id + ':editar' }, [icone(ICONE_EDITAR)]);
    editar.addEventListener('click', function () { editandoId = item.id; render(); });

    var remover = el('button', { type: 'button', class: 'icone remover', title: 'Remover item', 'aria-label': 'Remover item: ' + item.nome, 'data-acao': 'remover' }, [icone(ICONE_REMOVER)]);
    remover.addEventListener('click', function () { removerItem(item); });

    li.appendChild(el('div', { class: 'item-linha' }, [rot, el('div', { class: 'acoes' }, [editar, remover])]));

    var def = item.def;
    if (def) {
      var extra = el('div', { class: 'item-extra' });
      var selos = el('div', { class: 'selos' });
      (def.via || []).forEach(function (rid, i) {
        var url = DADOS.reels[rid];
        var txt = 'via reel' + (def.via.length > 1 ? ' ' + (i + 1) : '');
        selos.appendChild(url ? linkExterno(txt, url, 'selo') : el('span', { class: 'selo', text: txt }));
      });
      if (def.tarefa) { selos.appendChild(el('span', { class: 'selo tarefa', text: 'tarefa' })); }
      if (selos.firstChild) { extra.appendChild(selos); }
      if (def.nota) { extra.appendChild(el('p', { text: def.nota })); }
      if (def.link) { extra.appendChild(el('p', {}, [linkExterno(def.link.texto, def.link.url)])); }
      if (def.dica) { extra.appendChild(detalhes('dica:' + item.id, 'Como guardar', renderDica(def.dica), 'dica')); }
      if (extra.firstChild) { li.appendChild(extra); }
    }
    return li;
  }

  function removerItem(item) {
    if (item.proprio) {
      var pos = -1;
      estado.proprios.forEach(function (p, i) { if (p.id === item.id) { pos = i; } });
      if (pos === -1) { return; }
      var obj = estado.proprios.splice(pos, 1)[0];
      removido = { tipo: 'proprio', item: obj, pos: pos, tinha: !!estado.tenho[item.id] };
      delete estado.tenho[item.id];
    } else {
      if (estado.removidos.indexOf(item.id) === -1) { estado.removidos.push(item.id); }
      removido = { tipo: 'padrao', id: item.id };
    }
    salvar();
    avisar('Item removido.', { desfazer: desfazerRemocao });
    render();
  }

  function desfazerRemocao() {
    if (!removido) { return; }
    if (removido.tipo === 'proprio') {
      estado.proprios.splice(Math.min(removido.pos, estado.proprios.length), 0, removido.item);
      if (removido.tinha) { estado.tenho[removido.item.id] = true; }
    } else {
      estado.removidos = estado.removidos.filter(function (id) { return id !== removido.id; });
    }
    removido = null;
    salvar();
    avisar('Item restaurado.');
    render();
  }

  function filtroOk(feito) {
    if (filtro === 'tenho') { return feito; }
    if (filtro === 'falta') { return !feito; }
    return true;
  }

  function renderChecklist(box, aba) {
    var todos = itensDe(aba.id);
    var mostrou = false;
    gruposDe(aba.id).forEach(function (g) {
      var vis = g.itens.filter(function (i) { return filtroOk(i.tenho) && casaItem(i); });
      if (!vis.length) { return; }
      mostrou = true;
      var ul = el('ul', { class: 'itens' });
      vis.forEach(function (it) { ul.appendChild(criarLinha(it)); });
      var titulo = el('h3', { class: 'grupo-titulo' }, [
        el('span', { text: g.nome }),
        el('span', { text: rotulo(contar(g.itens)).split(' · ')[0] })
      ]);
      var sec = el('section', { class: 'grupo' }, [titulo]);
      if (g.nota) { sec.appendChild(el('p', { class: 'grupo-nota', text: g.nota })); }
      sec.appendChild(ul);
      box.appendChild(sec);
    });
    if (filtro === 'todos') {
      (aba.extras || []).forEach(function (e) {
        if (!casaObjeto(e)) { return; }
        mostrou = true;
        box.appendChild(renderExtra(e, aba.id));
      });
    }
    if (!mostrou) {
      var msg = tokens.length ? 'Nenhum resultado para "' + busca + '" nesta aba.'
        : todos.length === 0 ? 'Esta lista está vazia. Adicione um item abaixo.'
        : filtro === 'tenho' ? 'Nenhum item marcado como "Tenho" nesta lista.'
        : 'Nenhum item pendente. Tudo marcado como "Tenho".';
      box.appendChild(el('p', { class: 'vazio', text: msg }));
    }
  }

  // ---------- reels ----------
  function corpoReel(t, chavePrefixo) {
    var corpo = [];
    if (t.autor) { corpo.push(el('p', { class: 'meta', text: 'Autor do reel: ' + t.autor })); }
    corpo.push(el('p', { text: t.resumo }));
    if (t.alertas && t.alertas.length) { corpo.push(blocoAlerta('Alertas', lista(t.alertas, false))); }
    var det = [];
    det = det.concat(secao('Pontos-chave', lista(t.pontos, true)));
    if (t.itens && t.itens.length) { det = det.concat(secao('Itens citados', lista(t.itens, false))); }
    corpo.push(detalhes(chavePrefixo + t.id, 'Pontos-chave e itens citados', det));
    corpo.push(el('p', {}, [linkExterno('Abrir o reel no Instagram', t.url)]));
    return corpo;
  }

  function cartaoTutorial(t) {
    if (t.pendente) {
      return el('article', { class: 'cartao pendente', 'data-id': t.id }, [
        el('div', { class: 'cartao-topo' }, [el('h3', { text: 'Reel ' + t.id }), el('span', { class: 'selo', text: 'Removido do Instagram' })]),
        el('p', { text: 'Este reel foi removido do Instagram. O conteúdo não está mais disponível.' }),
        el('p', {}, [linkExterno('Abrir o reel no Instagram', t.url)])
      ]);
    }
    var topo = el('div', { class: 'cartao-topo' }, [el('h3', { text: t.titulo }), caixa('tut:' + t.id, 'Lido', estado.feito, 'solta')]);
    return el('article', { class: 'cartao', 'data-id': t.id }, [topo].concat(corpoReel(t, 'tut:')));
  }

  // ---------- blocos extras ----------
  function renderExtra(e, abaId) {
    var sec = el('section', { class: 'extra' });
    if (e.tipo === 'lista') {
      sec.appendChild(el('h3', { text: e.titulo }));
      sec.appendChild(lista(e.itens, false));
    } else if (e.tipo === 'reel') {
      sec.appendChild(el('h3', { text: e.titulo }));
      var r = e.reel;
      sec.appendChild(el('div', { class: 'cartao' }, [el('div', { class: 'cartao-topo' }, [el('h3', { text: r.titulo })])].concat(corpoReel(r, 'ex:'))));
    } else if (e.tipo === 'armazenamento') {
      var corpo = [el('p', { text: e.aviso })];
      corpo = corpo.concat(secao('Princípios gerais', (function () {
        var ul = el('ul');
        e.principios.forEach(function (p) { ul.appendChild(el('li', {}, [el('strong', { text: p.regra + ': ' }), document.createTextNode(p.como)])); });
        return ul;
      })()));
      corpo = corpo.concat(secao('Pragas', lista(e.pragas, false)));
      corpo = corpo.concat(secao('Fontes', linksLista(e.fontes)));
      sec.appendChild(detalhes('extra:' + abaId + ':armaz', e.titulo, corpo));
    } else if (e.tipo === 'pendentes') {
      sec.appendChild(el('h3', { text: e.titulo }));
      sec.appendChild(el('p', { text: 'Estes reels foram removidos do Instagram. Os livros citados não puderam ser identificados.' }));
      var ul = el('ul');
      e.reels.forEach(function (r) { ul.appendChild(el('li', {}, [linkExterno('Reel ' + r.id, r.url)])); });
      sec.appendChild(ul);
    }
    return sec;
  }

  // ---------- conhecimento ----------
  function cartaoHabilidade(h) {
    var topo = el('div', { class: 'cartao-topo' }, [el('h3', { text: h.titulo }), caixa('hab:' + h.id, 'Aprendi', estado.feito, 'solta')]);
    var det = [];
    det = det.concat(secao('Passo a passo', lista(h.passos, true)));
    det = det.concat(secao('Erros comuns', lista(h.erros, false)));
    det = det.concat(secao('Onde aprender', linksLista(h.onde)));
    return el('article', { class: 'cartao', 'data-id': h.id }, [
      topo,
      el('p', { text: h.resumo }),
      blocoAlerta('Alerta de segurança', el('p', { text: h.alerta })),
      detalhes('hab:' + h.id, 'Passo a passo, erros comuns e onde aprender', det)
    ]);
  }

  function cartaoLivro(l) {
    var topo = el('div', { class: 'cartao-topo' }, [el('h3', { text: l.titulo })]);
    var corpo = [topo];
    if (l.titulo_pt) { corpo.push(el('p', { class: 'meta', text: 'Título em português: ' + l.titulo_pt })); }
    corpo.push(el('p', { class: 'meta', text: l.autor + (l.ano ? ' · ' + l.ano : '') }));
    corpo.push(el('p', { text: l.por_que }));
    if (l.onde) { corpo.push(el('p', { class: 'meta', text: 'Onde encontrar: ' + l.onde })); }
    corpo.push(el('div', { class: 'marcas' }, [caixa('tem:' + l.id, 'Tenho o livro', estado.feito, 'solta'), caixa('li:' + l.id, 'Li', estado.feito, 'solta')]));
    var det = [];
    l.topicos.forEach(function (t) {
      det.push(el('div', { class: 'topico' }, [el('h5', { text: t.topico }), el('p', { text: t.resumo })]));
    });
    if (l.fonte && l.fonte.length) { det.push(el('p', { class: 'meta', text: 'Base dos resumos: ' + l.fonte.join('; ') + '. ' + DADOS.livrosAviso })); }
    corpo.push(detalhes('liv:' + l.id, 'Tópicos e resumos (' + l.topicos.length + ')', det, 'detalhes topicos'));
    return el('article', { class: 'cartao', 'data-id': l.id }, corpo);
  }

  function cartaoConhecimento(k) {
    var feitos = 0;
    k.marcos.forEach(function (m, i) { if (estado.feito['marco:' + k.id + ':' + i]) { feitos += 1; } });
    var topo = el('div', { class: 'cartao-topo' }, [
      el('h3', { text: k.titulo }),
      el('span', { class: 'prioridade', text: 'Prioridade ' + k.prioridade })
    ]);
    var marcos = el('ul', { class: 'marcos' });
    k.marcos.forEach(function (m, i) { marcos.appendChild(el('li', {}, [caixa('marco:' + k.id + ':' + i, m, estado.feito)])); });
    var det = [];
    det = det.concat(secao('Como começar', lista(k.como, true)));
    det = det.concat(secao('Fontes', linksLista(k.fontes)));
    det = det.concat(secao('Marcos', marcos));
    return el('article', { class: 'cartao', 'data-id': k.id }, [
      topo,
      el('p', { class: 'meta', text: 'Origem: ' + k.origem }),
      el('p', { text: k.por_que }),
      detalhes('con:' + k.id, 'Como começar, fontes e marcos (' + feitos + '/' + k.marcos.length + ')', det)
    ]);
  }

  function renderConhecimento(box, aba) {
    var mostrou = false;
    var raiz = el('div');
    if (aba.id === 'habilidades') {
      DADOS.habilidades.forEach(function (h) {
        if (!filtroOk(!!estado.feito['hab:' + h.id]) || !casaCartao('hab', h)) { return; }
        mostrou = true; raiz.appendChild(cartaoHabilidade(h));
      });
    } else if (aba.id === 'tutoriais') {
      var secoes = [];
      var porSecao = {};
      DADOS.tutoriais.forEach(function (t) {
        if (t.pendente ? filtro !== 'todos' : !filtroOk(!!estado.feito['tut:' + t.id])) { return; }
        if (!casaCartao('tut', t)) { return; }
        if (!porSecao[t.secao]) { porSecao[t.secao] = []; secoes.push(t.secao); }
        porSecao[t.secao].push(t);
      });
      secoes.forEach(function (nome) {
        mostrou = true;
        var s = el('section', { class: 'grupo' }, [el('h3', { class: 'grupo-titulo' }, [el('span', { text: nome }), el('span', { text: porSecao[nome].length + (porSecao[nome].length === 1 ? ' reel' : ' reels') })])]);
        porSecao[nome].forEach(function (t) { s.appendChild(cartaoTutorial(t)); });
        raiz.appendChild(s);
      });
    } else if (aba.id === 'livros') {
      DADOS.livros.forEach(function (l) {
        if (!filtroOk(!!estado.feito['li:' + l.id]) || !casaCartao('liv', l)) { return; }
        mostrou = true; raiz.appendChild(cartaoLivro(l));
      });
    } else if (aba.id === 'conhecimentos') {
      DADOS.conhecimentos.forEach(function (k) {
        var todosFeitos = k.marcos.length > 0 && k.marcos.every(function (m, i) { return !!estado.feito['marco:' + k.id + ':' + i]; });
        if (!filtroOk(todosFeitos) || !casaCartao('con', k)) { return; }
        mostrou = true; raiz.appendChild(cartaoConhecimento(k));
      });
    }
    box.appendChild(raiz);
    if (filtro === 'todos') {
      (aba.extras || []).forEach(function (e) {
        if (!casaObjeto(e)) { return; }
        mostrou = true;
        box.appendChild(renderExtra(e, aba.id));
      });
    }
    if (!mostrou) {
      box.appendChild(el('p', { class: 'vazio', text: tokens.length ? 'Nenhum resultado para "' + busca + '" nesta aba.' : 'Nada para mostrar com este filtro.' }));
    }
  }

  // ---------- render ----------
  function atualizarBarra(id, pct) {
    var b = $(id);
    b.setAttribute('aria-valuenow', String(pct));
    b.firstElementChild.style.width = pct + '%';
  }

  function render() {
    var foco = document.activeElement && document.activeElement.getAttribute && document.activeElement.getAttribute('data-foco');

    var todos = [];
    IDS_CHECK.forEach(function (id) { todos = todos.concat(itensDe(id)); });
    var geral = contar(todos);
    $('geral-num').textContent = rotulo(geral);
    atualizarBarra('geral-barra', geral.pct);

    var totalAcertos = 0;
    var abasComAcerto = 0;
    ABAS.forEach(function (a) {
      var btn = $('aba-' + a.id);
      btn.setAttribute('aria-selected', a.id === abaAtual ? 'true' : 'false');
      btn.tabIndex = a.id === abaAtual ? 0 : -1;
      btn.querySelector('.aba-num').textContent = rotulo(progresso(a));
      var selo = btn.querySelector('.aba-busca');
      var n = acertos(a);
      totalAcertos += n;
      if (n > 0) { abasComAcerto += 1; }
      selo.textContent = n > 0 ? String(n) : '';
      if (n > 0) { selo.removeAttribute('hidden'); } else { selo.setAttribute('hidden', ''); }
    });
    $('busca-info').textContent = !tokens.length ? ''
      : totalAcertos === 0 ? 'Nenhum resultado para "' + busca + '".'
      : totalAcertos + (totalAcertos === 1 ? ' resultado' : ' resultados') + ' em ' + abasComAcerto + (abasComAcerto === 1 ? ' aba' : ' abas') + '.';

    var aba = ABA[abaAtual];
    var prog = progresso(aba);
    $('painel-titulo').textContent = aba.nome;
    var textoNum = ROTULO_PAINEL[aba.tipo === 'checklist' ? 'checklist' : aba.id] + rotulo(prog);
    if (aba.id === 'livros') {
      textoNum += ' · Tenho: ' + rotulo(contar(DADOS.livros.map(function (l) { return { tenho: !!estado.feito['tem:' + l.id] }; })));
    } else if (aba.id === 'tutoriais') {
      var pend = DADOS.tutoriais.filter(function (t) { return t.pendente; }).length;
      if (pend) { textoNum += ' · ' + pend + ' removidos do Instagram'; }
    }
    $('painel-num').textContent = textoNum;
    atualizarBarra('painel-barra', prog.pct);
    $('painel-intro').textContent = aba.intro || '';
    var avisoFixo = $('painel-aviso');
    avisoFixo.textContent = aba.aviso || '';
    if (aba.aviso) { avisoFixo.removeAttribute('hidden'); } else { avisoFixo.setAttribute('hidden', ''); }
    $('painel').setAttribute('aria-labelledby', 'aba-' + abaAtual);

    var rotulosFiltro = ROTULOS_FILTRO[aba.tipo === 'checklist' ? 'checklist' : aba.id];
    Array.prototype.forEach.call(document.querySelectorAll('#filtros button'), function (b, i) {
      b.textContent = rotulosFiltro[i];
      b.setAttribute('aria-pressed', b.getAttribute('data-filtro') === filtro ? 'true' : 'false');
    });
    if (aba.tipo === 'checklist') { $('form-novo').removeAttribute('hidden'); } else { $('form-novo').setAttribute('hidden', ''); }

    var box = $('lista');
    box.textContent = '';
    if (aba.tipo === 'checklist') { renderChecklist(box, aba); } else { renderConhecimento(box, aba); }

    if (foco) {
      var alvo = document.querySelector('[data-foco="' + foco + '"]');
      if (alvo) { alvo.focus(); }
    }
    if (editandoId) {
      var campo = document.querySelector('.edicao input');
      if (campo && document.activeElement !== campo) { campo.focus(); campo.select(); }
    }
  }

  function montarAbas() {
    var nav = $('abas');
    var ultimoGrupo = null;
    ABAS.forEach(function (a) {
      if (a.nav !== ultimoGrupo) {
        nav.appendChild(el('span', { class: 'aba-rotulo', 'aria-hidden': 'true', text: a.nav }));
        ultimoGrupo = a.nav;
      }
      var b = el('button', { type: 'button', class: 'aba', role: 'tab', id: 'aba-' + a.id, 'aria-controls': 'painel', 'aria-selected': 'false' }, [
        el('span', { class: 'aba-nome', text: a.curto }),
        el('span', { class: 'aba-num', text: '' }),
        el('span', { class: 'aba-busca', hidden: '', text: '' })
      ]);
      b.addEventListener('click', function () { trocarAba(a.id); });
      b.addEventListener('keydown', function (e) {
        var i = IDS_ABA.indexOf(a.id);
        var prox = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { prox = IDS_ABA[(i + 1) % IDS_ABA.length]; }
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { prox = IDS_ABA[(i + IDS_ABA.length - 1) % IDS_ABA.length]; }
        else if (e.key === 'Home') { prox = IDS_ABA[0]; }
        else if (e.key === 'End') { prox = IDS_ABA[IDS_ABA.length - 1]; }
        if (prox) { e.preventDefault(); trocarAba(prox); $('aba-' + prox).focus(); }
      });
      nav.appendChild(b);
    });
  }

  function trocarAba(id) {
    abaAtual = id;
    editandoId = null;
    avisar('');
    render();
    var b = $('aba-' + id);
    if (b && b.scrollIntoView) { b.scrollIntoView({ block: 'nearest', inline: 'center' }); }
  }

  function adicionar(e) {
    e.preventDefault();
    var campo = $('novo-nome');
    var nome = limparNome(campo.value);
    if (!nome) { avisar('Digite o nome do item.', { erro: true }); campo.focus(); return; }
    if (nome.length > MAX_NOME) { avisar('Nome longo demais (máximo de ' + MAX_NOME + ' caracteres).', { erro: true }); return; }
    if (duplicado(abaAtual, nome, null)) { avisar('Já existe um item com esse nome nesta lista.', { erro: true }); return; }
    if (estado.proprios.length >= MAX_PROPRIOS) { avisar('Limite de itens próprios atingido.', { erro: true }); return; }
    estado.proprios.push({ id: novoId(), cat: abaAtual, grupo: GRUPO_PROPRIO, nome: nome });
    filtro = filtro === 'tenho' ? 'todos' : filtro;
    campo.value = '';
    salvar();
    avisar('Item adicionado em "' + GRUPO_PROPRIO + '".');
    render();
    campo.focus();
  }

  function exportar() {
    var dados = {
      app: 'controle-emergencia', versao: 2, exportadoEm: new Date().toISOString(),
      tenho: estado.tenho, feito: estado.feito, proprios: estado.proprios,
      renomeados: estado.renomeados, removidos: estado.removidos
    };
    var blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'controle-emergencia-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    avisar('Backup exportado.');
  }

  function importar(file) {
    if (!file) { return; }
    if (file.size > 1024 * 1024) { avisar('Arquivo grande demais para ser um backup válido.', { erro: true }); return; }
    var leitor = new FileReader();
    leitor.onerror = function () { avisar('Não foi possível ler o arquivo.', { erro: true }); };
    leitor.onload = function () {
      var obj;
      try { obj = JSON.parse(String(leitor.result)); }
      catch (e) { avisar('O arquivo não é um JSON válido. Nada foi alterado.', { erro: true }); return; }
      var novo;
      var avisoVersao = '';
      if (obj && typeof obj === 'object' && !Array.isArray(obj) && obj.versao === 1) {
        var r1 = validarV1(obj);
        if (!r1.ok) { avisar(r1.erro + ' Nada foi alterado.', { erro: true }); return; }
        novo = migrarV1(r1.dados);
        avisoVersao = 'Este backup é da versão 1 e será convertido para a versão 2. ';
      } else {
        var r2 = validarV2(obj);
        if (!r2.ok) { avisar(r2.erro + ' Nada foi alterado.', { erro: true }); return; }
        novo = r2.dados;
      }
      confirmar('Importar backup', avisoVersao + 'Isto substitui todo o seu estado atual (marcações, itens próprios e progresso de conhecimento). Deseja continuar?', 'Importar').then(function (ok) {
        if (!ok) { return; }
        estado = novo;
        editandoId = null;
        removido = null;
        salvar();
        avisar('Backup importado.');
        render();
      });
    };
    leitor.readAsText(file);
  }

  function restaurar() {
    confirmar('Restaurar lista padrão', 'Isto apaga suas marcações, edições, itens adicionados e o progresso de conhecimento, e volta para o padrão. Exporte um backup antes, se quiser guardar. Deseja continuar?', 'Restaurar').then(function (ok) {
      if (!ok) { return; }
      estado = estadoVazio();
      editandoId = null;
      removido = null;
      filtro = 'todos';
      abertos = {};
      salvar();
      avisar('Lista padrão restaurada.');
      render();
    });
  }

  // ---------- sincronização: interface ----------
  function pluralPend(n) { return n + (n === 1 ? ' alteração pendente' : ' alterações pendentes'); }

  function pintarSync(s) {
    var textos = {
      local: 'Somente neste aparelho',
      sincronizando: 'Sincronizando…',
      ok: 'Sincronizado',
      pendente: pluralPend(s.pendentes),
      offline: s.pendentes > 0 ? 'Offline — ' + pluralPend(s.pendentes) : 'Offline — sem alterações pendentes',
      erro: s.erro === 'indisponivel' ? 'Erro: sincronização indisponível no momento (serviço restrito). Seus dados seguem salvos neste aparelho.' : 'Erro ao sincronizar. Nova tentativa em instantes.',
      expirada: 'Sessão expirada. Entre de novo para sincronizar.'
    };
    $('sync').setAttribute('data-fase', s.fase);
    $('sync-status').textContent = textos[s.fase] || '';
    $('sync-conta').textContent = s.logado ? s.email : '';
    if (s.logado) { $('btn-entrar').setAttribute('hidden', ''); $('btn-sair').removeAttribute('hidden'); $('btn-sincronizar').removeAttribute('hidden'); }
    else { $('btn-entrar').removeAttribute('hidden'); $('btn-sair').setAttribute('hidden', ''); $('btn-sincronizar').setAttribute('hidden', ''); }
  }

  function ligarLogin() {
    var dlg = $('dlg-login');
    var erro = $('login-erro');
    function mostrarErro(t) { erro.textContent = t; if (t) { erro.removeAttribute('hidden'); } else { erro.setAttribute('hidden', ''); } }
    $('btn-entrar').addEventListener('click', function () { mostrarErro(''); dlg.showModal(); $('login-email').focus(); });
    $('login-cancelar').addEventListener('click', function () { $('login-senha').value = ''; dlg.close(); });
    $('form-login').addEventListener('submit', function (e) {
      e.preventDefault();
      var email = $('login-email').value.trim();
      var senha = $('login-senha').value;
      if (!RE_EMAIL.test(email) || email.length > 254) { mostrarErro('Digite um e-mail válido.'); return; }
      if (!senha || senha.length > 200) { mostrarErro('Digite a senha.'); return; }
      var btn = $('login-enviar');
      btn.disabled = true;
      mostrarErro('');
      sync.entrar(email, senha).then(function (r) {
        btn.disabled = false;
        if (r.ok) { $('login-senha').value = ''; dlg.close(); avisar('Conectado. Sincronizando seus dados.'); }
        else { mostrarErro(r.erro); }
      });
    });
    $('btn-sair').addEventListener('click', function () {
      confirmar('Sair da conta', 'Seus dados continuam salvos neste aparelho, mas deixam de ser sincronizados até você entrar de novo.', 'Sair').then(function (ok) {
        if (ok) { sync.sair(); avisar('Você saiu. Os dados continuam neste aparelho.'); }
      });
    });
    $('btn-sincronizar').addEventListener('click', function () { sync.sincronizar(); });
  }

  // ---------- PWA: service worker e aviso de nova versão ----------
  function registrarSW() {
    if (!('serviceWorker' in navigator) || !/^https?:$/.test(location.protocol)) { return; }
    var tinhaControlador = !!navigator.serviceWorker.controller;
    var pedido = false;
    var aviso = $('aviso-versao');
    function oferecer(w) {
      aviso.removeAttribute('hidden');
      $('btn-atualizar').onclick = function () { pedido = true; w.postMessage('PULAR_ESPERA'); };
    }
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (tinhaControlador && pedido) { location.reload(); }
    });
    navigator.serviceWorker.register('sw.js').then(function (reg) {
      if (reg.waiting && navigator.serviceWorker.controller) { oferecer(reg.waiting); }
      reg.addEventListener('updatefound', function () {
        var novo = reg.installing;
        if (!novo) { return; }
        novo.addEventListener('statechange', function () {
          if (novo.state === 'installed' && navigator.serviceWorker.controller) { oferecer(novo); }
        });
      });
      window.addEventListener('focus', function () { reg.update().catch(function () { /* offline */ }); });
    }).catch(function () { /* sem service worker: o app segue funcionando */ });
  }

  function iniciar() {
    montarAbas();
    $('nota-rodape').textContent = 'Os dados ficam salvos neste aparelho e funcionam sem internet. Para usar o mesmo progresso no celular e no computador, entre na sua conta no topo da página. Exporte um backup de tempos em tempos. As listas seguem orientações gerais de Defesa Civil, Cruz Vermelha, FEMA/Ready.gov e Ministério da Saúde, mais as suas anotações e os reels salvos. ' + DADOS.aviso;
    estado = estadoVazio();
    estado = carregar();
    Array.prototype.forEach.call(document.querySelectorAll('#filtros button'), function (b) {
      b.addEventListener('click', function () { filtro = b.getAttribute('data-filtro'); render(); });
    });
    $('busca').addEventListener('input', function (e) { definirBusca(e.target.value); });
    $('busca').addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && $('busca').value) { e.preventDefault(); $('busca').value = ''; definirBusca(''); }
    });
    $('form-novo').addEventListener('submit', adicionar);
    $('btn-exportar').addEventListener('click', exportar);
    $('btn-importar').addEventListener('click', function () { $('arquivo').click(); });
    $('arquivo').addEventListener('change', function (e) {
      importar(e.target.files && e.target.files[0]);
      e.target.value = '';
    });
    $('btn-restaurar').addEventListener('click', restaurar);
    sync = window.CriarSync({ url: SUPABASE_URL, anon: SUPABASE_ANON, projetar: projetar, aplicar: aplicarSync, validar: validarChaveSync, aoMudar: pintarSync });
    ligarLogin();
    sync.registrar();
    pintarSync(sync.estado());
    render();
    sync.ligar();
    registrarSW();
  }

  iniciar();
})();
