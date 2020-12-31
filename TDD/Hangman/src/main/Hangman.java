package main;

import java.io.*;
import java.util.*;

public class Hangman {

	Set<String> usedWordsSet = new HashSet<>();


	public int countAlphabet(String word, char alphabet) {
		int result = 0;

		for (char c: word.toCharArray()){
			if (c == alphabet) result++;
		}
		return result;
	}
	
	public String fetchWord(){
		return "pizza";
	}

	public String fetchWord(int requestedLength) {
		/*switch(requestedLength) {
			case 5: return "pizza";
			case 6: return "cheese";
			case 7: return "chicken";
			case 8: return "tomato";
			case 9: return "pineapple";
			case 10: return "mozarella";
			default: return "";
		}*/

		String result = null;
		try (BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\Grenada PC 07\\Desktop\\CCA\\LinkedIn-learning\\TDD\\Hangman\\src\\WordSource.txt"))){
			while ((result = br.readLine()) != null) {
				if (result.length()!=requestedLength) continue;
				else if (usedWordsSet.add(result)) break;
			}
		} catch (FileNotFoundException e){
			e.printStackTrace();
		} catch (IOException e){
			e.printStackTrace();
		}
		return result;
	}
}
