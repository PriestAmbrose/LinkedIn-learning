package main;

public interface ExternalDBMock {
	Boolean StoreDb(String word, double score);
	double retrieveScore(String word);
}