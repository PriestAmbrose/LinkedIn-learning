package main;

public class Hangman {

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
		return null;
	}
}
