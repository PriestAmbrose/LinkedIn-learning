package test;

import static org.junit.jupiter.api.Assertions.*;

import java.util.*;

import org.junit.*;


import main.Hangman;

public class TestHangman {

    static Random random;
    static Hangman hangman;
    static int requestedLength;
    static String word;

    @BeforeClass
    public static void setUpClass() {
        random = new Random();
        hangman = new Hangman();
        
    }

    @Before
    public void setupTest(){
        hangman.Scores =0;
        hangman.Trials=hangman.MAX_TRIALS;
        requestedLength = 5;//random.nextInt(4)+4;
        hangman.wordsList.clear();
        hangman.usedWordsSet.clear();
        hangman.loadWords();
        word = hangman.fetchWord(requestedLength);
    }

    @Test
    public void test_alphabetCountInAWord(){
        String word = "pizza";
        char alphabet = 'a';
        int count = hangman.countAlphabet(word,alphabet);
        assertEquals(1,count, "wrong count");
    }

    
    

    @Test
    public void test_lengthOfFetchedWordRandom(){
        
      
      
        String word = hangman.fetchWord(requestedLength);

        assertTrue(requestedLength == word.length());
    }

    @Test 

    public void test_uniquenesssOfFetchWord() {
        
        
        Set<String> usedWordsSet = new HashSet<>();
        int round =0;
        String word = null;
        

        while (round<10) {
            requestedLength = random.nextInt(4)+4;
            word = hangman.fetchWord(requestedLength);
            round++;
            assertTrue(usedWordsSet.add(word));
        }
    }


    @Test
    public void test_returnClueBeforeGuess(){
        String clue = "";
        for (int i=0; i<word.length();i++) clue+="-";
        assertEquals(clue, hangman.getClue(word), "wrong clue");
    }

    @Test
    public void test_returnClueIfGuessedCorrectly(){
        
        String clue = hangman.getClue("pizza");
        String newClue = hangman.getClue("pizza",clue,'z');
        assertEquals("--zz-", newClue);
    }

    @Test
    public void test_returnClueIfGuessedInCorrectly(){
        
        String clue = hangman.getClue("pizza");
        String newClue = hangman.getClue("pizza",clue,'x');
        assertEquals("-----", newClue);
    }

    @Test
    public void test_whenInvalidGuessThenFetchClueThrowsException(){
        assertThrows(IllegalArgumentException.class,
            () -> hangman.getClue("pizza","-----", '1')
            );
    }

    @Test
    public void test_whenInvalidGuessThenFetchClueThrowsExceptionWithMessage(){
        Exception e = assertThrows(IllegalArgumentException.class,
            () -> hangman.getClue("pizza","-----", '1')
            );
        assertEquals("Invalid character",e.getMessage());
    }

    @Test
    public void test_TrialsBeforeAGuess(){
        
        assertEquals(hangman.MAX_TRIALS, hangman.getTrials());
    }

    @Test
    public void test_ScoresBeforeAGuess(){
        assertEquals(0,hangman.getScores(),0.04);
    }

    @Test
    public void test_TrialsAfterFirstCorrectGuess(){
        hangman.guess(word,'p');
        assertEquals(hangman.MAX_TRIALS-1, hangman.getTrials());
    }

    @Test
    public void test_ScoresAfterFirstCorrectGuess(){
        hangman.guess(word,'p');
        assertEquals(2,hangman.getScores(),0.04);
    }

    @Test 
    public void test_TrialsAfterSecondCorrectGuess(){
        hangman.guess(word,'p');
        hangman.guess(word,'i');
        assertEquals(8, hangman.getTrials());
    }

    @Test
    public void test_ScoresAfterSecondCorrectGuess(){
        hangman.guess(word,'p');
        hangman.guess(word,'i');
        assertEquals(4, hangman.getScores(),0.04);
    }

    /*@AfterEach
    public static void CleanUpClass(){
        hangman.Scores =0;
        hangman.Trials=hangman.MAX_TRIALS;
    }*/
}
