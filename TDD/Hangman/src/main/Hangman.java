package main;

import java.io.*;
import java.util.*;


public class Hangman {

	public Set<String> usedWordsSet = new HashSet<String>();
	public List<String> wordsList = new ArrayList<String>();
	public final int MAX_TRIALS = 10;
	public int Trials = 0;
	public float Scores = 0;
	String clue = "";

	ExternalDBMock Db;


	public Hangman(ExternalDBMock mockObject) {
		Db = mockObject;
	}


	public int countAlphabet(String word, char alphabet) {
		int result = 0;

		for (char c: word.toCharArray()){
			if (c == alphabet) result++;
		}
		return result;
	}
	
	
	public String fetchWord(int requestedLength) {
		Trials = MAX_TRIALS;
		for (String result : wordsList){
			if(result.length() != requestedLength) continue;
			else if (usedWordsSet.add(result)){
				clue =getClue(result);
				return result;
			}
		};
		
		
		return null;
	}

	public void loadWords(){
		String result;
		try {
			FileReader fl = new FileReader("C:\\Users\\Grenada PC 07\\Desktop\\CCA\\LinkedIn-learning\\TDD\\Hangman\\src\\Pizza.txt");
			BufferedReader br = new BufferedReader(fl);
			while ((result = br.readLine()) != null) {
				wordsList.add(result);
			}
			br.close();
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


	public String getClue(String string, String cl, char c) {
		if (c >= 'A' && c <= 'Z') c+=32; // to shift ASCII code
		if (c < 'a'|| c > 'z' ) throw new IllegalArgumentException("Invalid character");

		String newClue="";
		for (int i = 0; i<string.length();i++){
			newClue += string.toCharArray()[i]==c?string.toCharArray()[i]:cl.toCharArray()[i];
		}
		return newClue;
	}


	public Integer getTrials() {
		return Trials;
	}


	public Float getScores() {
		return Scores;
	}


	public void guess(String word, char guess) {
		if(word.indexOf(guess) != -1 && clue.indexOf(guess)==-1 ) {
			Scores+=(double)MAX_TRIALS/word.length();
			clue = getClue(word, clue, guess);
		}
		Trials--;
	}


	public Boolean StoreDB(String word, double score) {
		return Db.StoreDb(word, score);
	}


	public double retrieveScore(String word) {
		return Db.retrieveScore(word);
	}
}
