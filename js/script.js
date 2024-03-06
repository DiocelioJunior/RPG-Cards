var card1 = document.getElementById('card-1');
var card2 = document.getElementById('card-2');
var card3 = document.getElementById('card-3');

var next = document.getElementById('arrow-nxt');
var back = document.getElementById('arrow-bck');

var currentValue = 1;

// Array de objetos representando os personagens
const personagens = [
    //Personagem 1//////////////////////////////////////////
    {
        nome: "Alariel Starfrost",
        raca: "Althari (elfo)",
        classe: "Atiradora",
        genero: "Feminino",
        idade: 120,
        atributos: {
            forca: 12,
            destreza: 18,
            constituicao: 14,
            inteligencia: 14,
            sabedoria: 16,
            carisma: 13,
        },
        pericias: ["Atletismo", "Furtividade", "Percepção", "Sobrevivência"],
        equipamento: [
            "Poção de cura",
        ]
    },

    //Personagem 2//////////////////////////////////////////
    {
        nome: "Soraya Vulticora",
        raca: "Tiefling",
        classe: "Atiradora",
        genero: "Feminino",
        idade: 27,
        atributos: {
            forca: 11,
            destreza: 16,
            constituicao: 14,
            inteligencia: 12,
            sabedoria: 13,
            carisma: 15,
        },
        pericias: ["Atletismo", "Furtividade", "Percepção", "Intimidação"],
        equipamento: [
            "Pistolas ornamentadas",
            "Kit de ladrão",
        ],
    },

    //Personagem 3//////////////////////////////////////////
    {
        nome: "Caleb Ironheart",
        raca: "Humano",
        classe: "Guerreiro",
        genero: "Masculino",
        idade: 28,
        atributos: {
            forca: 16,
            destreza: 14,
            constituicao: 15,
            inteligencia: 10,
            sabedoria: 12,
            carisma: 13,
        },
        pericias: ["Atletismo", "Intimidação", "Sobrevivência", "Percepção"],
        equipamento: [
            "Espada longa",
            "Escudo de aço",
        ],
    }
];

// Adicionando ouvintes de eventos de clique para cada cartão
card1.addEventListener("click", function (event) {
    selectedCard(event, 1);
});
card2.addEventListener("click", function (event) {
    selectedCard(event, 2);
});
card3.addEventListener("click", function (event) {
    selectedCard(event, 3);
});

function selectedCard(event, cardNumber) {
    switch (cardNumber) {
        case 1:
            console.log(personagens[0]);
            break;
        case 2:
            console.log(personagens[1]);
            break;
        case 3:
            console.log(personagens[2]);
            break;
        default:
            break;
    }
}

// Adicionando ouvintes de eventos de clique para os botões de próxima e anterior
next.addEventListener("click", nextCard);
back.addEventListener("click", backCard);

// Funções para avançar nos cartões
function nextCard() {
    if (currentValue < 3) {
        currentValue = currentValue + 1;
    } else {
        currentValue = 1;
    }
    showCurrentCard();
}

// Funções para retroceder nos cartões
function backCard() {
    if (currentValue > 1) {
        currentValue = currentValue - 1;
    } else {
        currentValue = 3;
    }
    showCurrentCard();
}

// Função para exibir o cartão correspondente com base no valor atual
function showCurrentCard() {
    switch (currentValue) {
        case 1:
            card1.style.display = "flex";
            card2.style.display = "none";
            card3.style.display = "none";
            break;
        case 2:
            card1.style.display = "none";
            card2.style.display = "flex";
            card3.style.display = "none";
            break;
        case 3:
            card1.style.display = "none";
            card2.style.display = "none";
            card3.style.display = "flex";
            break;
        default:
            console.log('Invalid card value.');
            break;
    }
}

