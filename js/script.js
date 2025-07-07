
let mensagens = [
    "A vida é uma jornada, não um destino. - Ralph Waldo Emerson",
    "A vida é o que acontece enquanto você está ocupado fazendo outros planos. - John Lennon",
    "A vida é 10% o que acontece conosco e 90% como reagimos a isso. - Charles R. Swindoll",
    "A vida é realmente simples, mas insistimos em torná-la complicada. - Confúcio",
    "A vida é curta, e é por isso que devemos aproveitar cada momento. - Anônimo",
    "A vida é como andar de bicicleta. Para manter o equilíbrio, você deve continuar em movimento. - Albert Einstein",
    "A vida é feita de escolhas. Algumas nos definem, outras nos ensinam. - Anônimo",
    "A vida é uma aventura ousada ou não é nada. - Helen Keller",]

let msg = document.getElementById("duda");

let btn = document.getElementById("btn");
let con = true;
btn.addEventListener("click", () => {
    let nmsg = Math.floor(Math.random() * 8);
    if (con) {
        msg.innerHTML = mensagens[nmsg];
        btn.innerHTML = "Esconder Mensagem";
        msg.scrollIntoView({ behavior: "smooth" });
        con = false;
    }
    else {
        msg.innerHTML = "";
        btn.innerHTML = "Clique para ver uma mensagem";
        con = true;
    }
    
});