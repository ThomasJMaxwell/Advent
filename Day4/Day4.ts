function CountWordInLists(lists: string[][], word: string): number {
    let count = 0;
    const rows = lists.length;
    const cols = lists[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            count += CheckWord(lists, i, j, word);
        }
    }

    return count;
}

function CheckWord(lists: string[][], row: number, col: number, word: string): number {
    const directions = [
        { r: 0, c: 1 },   // R
        { r: 0, c: -1 },  // L
        { r: 1, c: 0 },   // U
        { r: -1, c: 0 },  // D
        { r: 1, c: 1 },   // DR
        { r: 1, c: -1 },  // DL
        { r: -1, c: 1 },  // UR
        { r: -1, c: -1 }  // UL
    ];

    let matchCount = 0;

    for (const direction of directions) {
        let match = true;

        for (let c = 0; c < word.length; c++) {
            const newRow = row + direction.r * c;
            const newCol = col + direction.c * c;

            if (
                newRow < 0 || newRow >= lists.length ||
                newCol < 0 || newCol >= lists[0].length ||
                lists[newRow][newCol] !== word[c]
            ) {
                match = false;
                break;
            }
        }

        if (match) {
            matchCount++;
        }
    }

    return matchCount;
}

// Example usage
const lists: string[][] = [
    ['M','M','M','S','X','X','M','A','S','M'],
    ['M','S','A','M','X','M','S','M','S','A'],
    ['A','M','X','S','X','M','A','A','M','M'],
    ['M','S','A','M','A','S','M','S','M','X'],
    ['X','M','A','S','A','M','X','A','M','M'],
    ['X','X','A','M','M','X','X','A','M','A'],
    ['S','M','S','M','S','A','S','X','S','S'],
    ['S','A','X','A','M','A','S','A','A','A'],
    ['M','A','M','M','M','X','M','M','M','M'],
    ['M','X','M','X','A','X','M','A','S','X']
];

const word = "XMAS";
const result = CountWordInLists(lists, word);
console.log("The word " + word + " appears " + result + " times.");