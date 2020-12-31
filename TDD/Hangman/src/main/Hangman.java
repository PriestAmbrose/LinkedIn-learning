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


	public String getClue() {
		return null;
	}


	public void loadWords(String string) {
	}


	public void guess(char c) {
	}
}
