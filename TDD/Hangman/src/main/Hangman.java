package main;

import java.io.*;
import java.util.*;

public class Hangman {

	Set<String> usedWordsSet = new HashSet<>();
	List<String> wordsList = new ArrayList<>();


	public int countAlphabet(String word, char alphabet) {
		int result = 0;

		for (char c: word.toCharArray()){
			if (c == alphabet) result++;
		}
		return result;
	}
	
	
	public String fetchWord(int requestedLength) {
		
		for (String result : wordsList){
			if(result.length() != requestedLength) continue;
			else if (usedWordsSet.add(result)) return result;
		};
		
		return null;
	}

	public void loadWords(){
		String result;
		try (BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\Grenada PC 07\\Desktop\\CCA\\LinkedIn-learning\\TDD\\Hangman\\src\\WordSource.txt"))){
			while ((result = br.readLine()) != null) {
				wordsList.add(result);
			}
		} catch (FileNotFoundException e){
			e.printStackTrace();
		} catch (IOException e){
			e.printStackTrace();
		}

	}


	public String getClue(String word) {
		StringBuilder clue = new StringBuilder();
		for (int i=0;i<word.length();i++){
			clue.append("-");
		}
		return clue.toString();
	}


	public String getClue(String string, String clue, char c) {
		if (c >= 'A' && c <= 'Z') c+=32; // to shift ASCII code
		if (c < 'a'|| c > 'z' ) throw new IllegalArgumentException("Invalid character");

		String newClue="";
		for (int i = 0; i<string.length();i++){
			newClue += string.toCharArray()[i]==c?string.toCharArray()[i]:clue.toCharArray()[i];
		}
		return newClue;
	}
}
