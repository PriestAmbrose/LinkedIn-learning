import {isEqual} from 'lodash'
import {getLetterCount} from './letterCount';


export const isAnagram = (string1, string2)=>{
    const letterCount1 = getLetterCount(string1.replace(/\s/g, '').toLowerCase());
    const letterCount2 = getLetterCount(string2.replace(/\s/g, '').toLowerCase());
    return isEqual(letterCount1,letterCount2);
}