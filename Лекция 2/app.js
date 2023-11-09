import { Grid } from "./grid.js"
import { Tile } from "./tile.js";
 
const gameBoard = document.querySelector('.game-board');


const grid = new Grid(gameBoard);

grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));

document.addEventListener('keydown', handleInput);

function checkGameOver() {
    if (grid.checkVictory()) {
        console.log("Congratulations! You have won the game!");
        redirectToPage("victory.html", "Victory! You won the game.");
    } else if (grid.checkDefeat()) {
        console.log("Game over! You have been defeated.");
        redirectToPage("defeat.html", "Defeat! You lost the game.");
    }
}

function redirectToPage(page, message) {
    const encodedMessage = encodeURIComponent(message);
    const url = `${page}?message=${encodedMessage}`;
    window.location.href = url;
}

function handleInput(event) {
    switch (event.key) {
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':  
            moveDown(); 
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break
        default:
            return
    }
    checkGameOver();
    const newTile = new Tile(gameBoard);
    grid.getRandomEmptyCell().linkTile(newTile); 
}

function moveUp(){
    slideTiles(grid.groupedCellsByColumn)
}   

function moveDown(){
    slideTiles(grid.groupedCellsByReversedColumn)
}   

function moveLeft(){
    slideTiles(grid.groupedCellsByRow)
}

function moveRight(){
    slideTiles(grid.groupedCellsByReversedRow)
}

function slideTiles(groupedCells){
    groupedCells.forEach(group => slideTilesInGroup(group));
    grid.cells.forEach(cell => cell.linkedTileForMerge && cell.mergeTiles())
}

function slideTilesInGroup(group) {
    for (let i = 1; i < group.length; i++) {
        if (group[i].isEmpty()) {
            continue;
        }

        const cellWithTile = group[i];
        let targetCell = null;
        let j = i - 1;

        while (j >= 0) {
            if (group[j].isEmpty()) {
                targetCell = group[j];
            } else if (group[j].canAccept(cellWithTile.linkedTile)) {
                targetCell = group[j];
                break;
            } else {
                break;
            }
            j--;
        }

        if (!targetCell) {
            continue;
        }

        if (targetCell.isEmpty()) {
            targetCell.linkTile(cellWithTile.linkedTile);
        } else {
            targetCell.linkTileForMerge(cellWithTile.linkedTile);
        }

        cellWithTile.unlinkTile();
    }
}
