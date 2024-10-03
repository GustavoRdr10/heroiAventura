class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Define o ataque de acordo com o tipo
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        // Exibe a mensagem de ataque
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const heroi1 = new Heroi("Gandalf", 2019, "mago");
const heroi2 = new Heroi("Conan", 30, "guerreiro");
const heroi3 = new Heroi("Shaolin", 25, "monge");
const heroi4 = new Heroi("Kakashi", 28, "ninja");

// Chamando o método atacar
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
