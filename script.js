// CONFIGURAÇÃO DA THECATAPI

const API_KEY = "live_BW9hsH2R89YUVn0I0a2c0WMAqAkrJp1sA7WOnsaa4HzrCvDXvHrBUSo4Dij6rwDp";

const API_URL = "https://api.thecatapi.com/v1";


// ELEMENTOS DA PÁGINA

const botao = document.getElementById("buscarBtn");
const campoRaca = document.getElementById("racaInput");

const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

const imagemGato = document.getElementById("imagemGato");
const nomeRaca = document.getElementById("nomeRaca");
const origem = document.getElementById("origem");
const temperamento = document.getElementById("temperamento");
const vida = document.getElementById("vida");
const peso = document.getElementById("peso");
const descricao = document.getElementById("descricao");


// TRADUÇÃO DOS TEMPERAMENTOS

const traducoes = {

    "Active": "Ativo",
    "Affectionate": "Afetuoso",
    "Agile": "Ágil",
    "Alert": "Alerta",
    "Calm": "Calmo",
    "Clever": "Esperto",
    "Curious": "Curioso",
    "Demanding": "Exigente",
    "Devoted": "Dedicado",
    "Energetic": "Energético",
    "Friendly": "Amigável",
    "Gentle": "Gentil",
    "Intelligent": "Inteligente",
    "Independent": "Independente",
    "Loving": "Amoroso",
    "Loyal": "Leal",
    "Playful": "Brincalhão",
    "Quiet": "Tranquilo",
    "Relaxed": "Relaxado",
    "Social": "Sociável",
    "Sweet": "Dócil",
    "Outgoing": "Extrovertido",
    "Easygoing": "Tranquilo",
    "Patient": "Paciente",
    "Vocal": "Comunicativo",
    "Talkative": "Falante",
    "Smart": "Inteligente",
    "Adventurous": "Aventureiro",
    "Docile": "Dócil",
    "Trainable": "Fácil de treinar",
    "Adaptable": "Adaptável",
    "Confident": "Confiante",
    "Reserved": "Reservado",
    "Shy": "Tímido",
    "Mischievous": "Travesso",
    "Attention-seeking": "Que busca atenção",
    "Attention seeking": "Que busca atenção"
};


// TRADUÇÃO DE PAÍSES

const paises = {

    "Egypt": "Egito",
    "United States": "Estados Unidos",
    "United Kingdom": "Reino Unido",
    "England": "Inglaterra",
    "Scotland": "Escócia",
    "Wales": "País de Gales",
    "France": "França",
    "Germany": "Alemanha",
    "Italy": "Itália",
    "Spain": "Espanha",
    "Portugal": "Portugal",
    "Belgium": "Bélgica",
    "Netherlands": "Países Baixos",
    "Switzerland": "Suíça",
    "Austria": "Áustria",
    "Russia": "Rússia",
    "China": "China",
    "Japan": "Japão",
    "Thailand": "Tailândia",
    "Turkey": "Turquia",
    "Canada": "Canadá",
    "Australia": "Austrália",
    "Norway": "Noruega",
    "Sweden": "Suécia",
    "Denmark": "Dinamarca",
    "Finland": "Finlândia",
    "Brazil": "Brasil",
    "Mexico": "México",
    "India": "Índia",
    "Iran": "Irã",
    "Myanmar": "Mianmar"
};


// TRADUZIR TEMPERAMENTO

function traduzirTemperamento(texto) {

    if (!texto) {
        return "Não informado";
    }

    return texto
        .split(",")
        .map(item => {

            const palavra = item.trim();

            return traducoes[palavra] || palavra;

        })
        .join(", ");
}


// TRADUZIR ORIGEM

function traduzirOrigem(texto) {

    if (!texto) {
        return "Não informado";
    }

    return paises[texto] || texto;
}

// DESCRIÇÕES ESPECÍFICAS


const descricoes = {

    "Sphynx":
        "Gato de tamanho médio, sem pelos, com pele enrugada, orelhas grandes e corpo musculoso. Conhecido por sua personalidade afetuosa e por buscar atenção.",

    "Siamese":
        "Gato elegante e de aparência marcante, conhecido por seus olhos azuis, corpo esbelto e personalidade comunicativa. É uma raça muito sociável, inteligente e afetuosa.",

    "Persian":
        "Gato de aparência elegante, conhecido por sua pelagem longa e abundante, rosto característico e personalidade tranquila e carinhosa.",

    "Maine Coon":
        "Uma das maiores raças de gatos domésticos. Possui corpo robusto, pelagem longa e uma personalidade amigável, inteligente e brincalhona.",

    "Bengal":
        "Gato de aparência semelhante à de um felino selvagem, com pelagem marcada e corpo atlético. É conhecido por ser ativo, inteligente, curioso e brincalhão.",

    "British Shorthair":
        "Gato de porte médio a grande, com corpo robusto, pelagem curta e densa. Possui personalidade tranquila, independente e carinhosa.",

    "Ragdoll":
        "Gato de grande porte, conhecido por seus olhos azuis, pelagem macia e personalidade tranquila e afetuosa. É uma raça bastante sociável.",

    "Abyssinian":
        "Gato de tamanho médio, elegante e atlético, conhecido por sua pelagem característica. É muito ativo, inteligente, curioso e brincalhão.",

    "Scottish Fold":
        "Gato conhecido pelas orelhas dobradas para frente, aparência arredondada e personalidade tranquila, carinhosa e sociável.",

    "Russian Blue":
        "Gato elegante de pelagem curta e azul-acinzentada, conhecido por seus olhos verdes e personalidade tranquila, inteligente e afetuosa."
};


// TRADUZIR DESCRIÇÃO

function obterDescricao(gato) {

    // Se temos uma descrição própria da raça
    if (descricoes[gato.name]) {

        return descricoes[gato.name];

    }


    // Caso a API tenha uma descrição em português
    if (gato.description) {

        return gato.description;

    }


    return "Descrição não disponível.";
}


// BUSCAR RAÇA

async function buscarGato() {

    const raca = campoRaca.value.trim();


    // Limpa mensagens

    mensagem.textContent = "";

    resultado.style.display = "none";


    // Verifica campo vazio

    if (raca === "") {

        mensagem.textContent =
            "Digite o nome de uma raça.";

        return;
    }


    // Mostra carregamento

    mensagem.textContent =
        "Pesquisando raça...";


    try {

        // PESQUISA DA RAÇA

        const url =
            `${API_URL}/breeds/search?q=${encodeURIComponent(raca)}`;


        const resposta = await fetch(
            url,
            {
                method: "GET",

                headers: {
                    "x-api-key": API_KEY
                }
            }
        );


        // Verifica resposta

        if (!resposta.ok) {

            if (resposta.status === 401) {

                throw new Error(
                    "Chave da API inválida."
                );
            }

            if (resposta.status === 429) {

                throw new Error(
                    "Limite de pesquisas atingido. Aguarde um pouco."
                );
            }

            throw new Error(
                "Erro " + resposta.status
            );
        }


        const dados = await resposta.json();


        // VERIFICA SE ENCONTROU

        if (!dados || dados.length === 0) {

            mensagem.textContent =
                "Raça não encontrada. Tente outro nome.";

            return;
        }


        const gato = dados[0];


        // NOME

        nomeRaca.textContent =
            gato.name || "Não informado";


        // ORIGEM

        origem.textContent =
            traduzirOrigem(gato.origin);


        // TEMPERAMENTO

        temperamento.textContent =
            traduzirTemperamento(gato.temperament);


        // EXPECTATIVA DE VIDA

        if (gato.life_span) {

            vida.textContent =
                gato.life_span + " anos";

        } else {

            vida.textContent =
                "Não informado";
        }


        // PESO

        if (
            gato.weight &&
            gato.weight.metric
        ) {

            peso.textContent =
                gato.weight.metric + " kg";

        } else {

            peso.textContent =
                "Não informado";
        }


        // DESCRIÇÃO

        descricao.textContent =
            obterDescricao(gato);


        // BUSCA IMAGEM

        await buscarImagem(gato.id);


        // MOSTRA RESULTADO

        mensagem.textContent = "";

        resultado.style.display = "grid";


    } catch (erro) {

        console.error(
            "Erro na TheCatAPI:",
            erro
        );


        mensagem.textContent =
            erro.message ||
            "Não foi possível realizar a pesquisa.";

    }
}


// BUSCAR IMAGEM

async function buscarImagem(idRaca) {

    const url =
        `${API_URL}/images/search?breed_ids=${idRaca}&limit=1`;


    const resposta = await fetch(
        url,
        {
            method: "GET",

            headers: {
                "x-api-key": API_KEY
            }
        }
    );


    if (!resposta.ok) {

        throw new Error(
            "Não foi possível carregar a imagem."
        );
    }


    const imagens =
        await resposta.json();


    if (
        imagens &&
        imagens.length > 0 &&
        imagens[0].url
    ) {

        imagemGato.src =
            imagens[0].url;

        imagemGato.alt =
            "Imagem da raça " +
            nomeRaca.textContent;

    } else {

        imagemGato.removeAttribute("src");

        imagemGato.alt =
            "Imagem não disponível";
    }
}


// CLIQUE NO BOTÃO

botao.addEventListener(
    "click",
    buscarGato
);


// ENTER NO CAMPO

campoRaca.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            buscarGato();

        }

    }
);