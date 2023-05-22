//Player 1 = O
//Player 2 = X
let turn = 1;
let flag = false;
let tie = false;
let currentTurn = document.getElementById("turn");
const reset = document.getElementById("reset");

const playGame = (() => {
    const resetGame = () =>{
        for(let i = 1; i<= 9; i++){
            const row = document.getElementById(`${i}`)
            row.innerHTML = "";
        }
        flag = false;
        document.getElementById("winner").innerHTML = "";
    }

    const checkWinner = ()=>{
        if(
            (document.getElementById("1").innerHTML === "O" &&
            document.getElementById("4").innerHTML === "O"  &&
            document.getElementById("7").innerHTML === "O") ||
    
            (document.getElementById("2").innerHTML === "O" &&
            document.getElementById("5").innerHTML === "O"  &&
            document.getElementById("8").innerHTML === "O") ||
    
            (document.getElementById("3").innerHTML === "O" &&
            document.getElementById("6").innerHTML === "O"  &&
            document.getElementById("9").innerHTML === "O") ||
    
            (document.getElementById("1").innerHTML === "O" &&
            document.getElementById("2").innerHTML === "O"  &&
            document.getElementById("3").innerHTML === "O") ||
    
            (document.getElementById("4").innerHTML === "O" &&
            document.getElementById("5").innerHTML === "O"  &&
            document.getElementById("6").innerHTML === "O") ||
    
            (document.getElementById("7").innerHTML === "O" &&
            document.getElementById("8").innerHTML === "O"  &&
            document.getElementById("9").innerHTML === "O") ||
    
            (document.getElementById("1").innerHTML === "O" &&
            document.getElementById("5").innerHTML === "O"  &&
            document.getElementById("9").innerHTML === "O") ||
    
            (document.getElementById("7").innerHTML === "O" &&
            document.getElementById("5").innerHTML === "O"  &&
            document.getElementById("3").innerHTML === "O")
        ){
            let win = document.querySelector("#winner");
            win.innerHTML = "Player 1 Won!";
            return true
        }else if(
                (document.getElementById("1").innerHTML === 'X' &&
                document.getElementById("4").innerHTML === 'X'  &&
                document.getElementById("7").innerHTML === 'X') ||
        
                (document.getElementById("2").innerHTML === "X" &&
                document.getElementById("5").innerHTML === "X"  &&
                document.getElementById("8").innerHTML === "X") ||
        
                (document.getElementById("3").innerHTML === "X" &&
                document.getElementById("6").innerHTML === "X"  &&
                document.getElementById("9").innerHTML === "X") ||
        
                (document.getElementById("1").innerHTML === "X" &&
                document.getElementById("2").innerHTML === "X"  &&
                document.getElementById("3").innerHTML === "X") ||
        
                (document.getElementById("4").innerHTML === "X" &&
                document.getElementById("5").innerHTML === "X"  &&
                document.getElementById("6").innerHTML === "X") ||
        
                (document.getElementById("7").innerHTML === "X" &&
                document.getElementById("8").innerHTML === "X"  &&
                document.getElementById("9").innerHTML === "X") ||
        
                (document.getElementById("1").innerHTML === "X" &&
                document.getElementById("5").innerHTML === "X"  &&
                document.getElementById("9").innerHTML === "X") ||
        
                (document.getElementById("7").innerHTML === "X" &&
                document.getElementById("5").innerHTML === "X"  &&
                document.getElementById("3").innerHTML === "X")
                ){        
                    let win = document.querySelector("#winner");
                    win.innerHTML = "Player 2 Won!";
                    return true;
                }
    }

    return{resetGame, checkWinner};
})();

reset.addEventListener("click", playGame.resetGame);

for(let i = 1; i<=9; i++){
    const row = document.getElementById(`${i}`)
    row.addEventListener("click", () => {
        if(flag === false){
            if(row.innerHTML === "X" || row.innerHTML === "O"){
                alert("You can not select this box");
            }else{
                if(turn % 2 == 1){
                    row.innerHTML = "O";
                    turn+=1;
                    currentTurn.innerHTML = "Turn: Player 2 (X)";
                }else if(turn % 2 == 0){
                    row.innerHTML = "X";
                    turn+=1;
                    currentTurn.innerHTML = "Turn: Player 1 (O)";
                }
            }
            playGame.checkWinner();
            if(playGame.checkWinner()){
                flag = true;
            }
        }
    })    
    if(flag){
        break;
    }

}
