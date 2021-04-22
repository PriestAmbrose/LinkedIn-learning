export const getLetterCount = string => {
    const letters = string.split('');
    const letterCount = {};
    letters.forEach(element => {
        if (!letterCount[element]){
            letterCount[element]=1;
        }
        else {
            letterCount[element]++;
        }
    });
    return letterCount;
};