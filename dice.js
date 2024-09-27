let p1_score = 0;
let p2_score = 0;
const btn1 = document.querySelectorAll("button")[0];
const btn2 = document.querySelectorAll("button")[1];
btn1.addEventListener("click", startGame);
btn2.addEventListener("click", resetGame);

function startGame(){
    const imgs = ["dice-1-fill.svg", "dice-2-fill.svg","dice-3-fill.svg","dice-4-fill.svg","dice-5-fill.svg", "dice-6-fill.svg"];
    let p1_number = Math.ceil(Math.random() * 6);
    let p2_number = Math.ceil(Math.random() * 6);
    console.log(p1_number, p2_number);
    document.getElementById("P1").setAttribute("src", "./image/" + imgs[p1_number-1]);
    document.getElementById("P2").setAttribute("src", "./image/" + imgs[p2_number-1]);
    if (p1_number > p2_number){
        p1_score++;
        document.getElementsByTagName("h1")[0].textContent = "Player 1 Wins!";
        document.getElementById("s1").textContent = "Score: " + p1_score;
    }
    else if (p1_number < p2_number){
        p2_score++;
        document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins!";
        document.getElementById("s2").textContent = "Score: " + p2_score;
    }
    else{
        document.getElementsByTagName("h1")[0].textContent = "It is a tie!";
    }
}

function resetGame(){
    location.reload();
}