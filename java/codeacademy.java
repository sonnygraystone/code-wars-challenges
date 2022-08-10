import java.util.Scanner;

public class Introduction {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.println("What is your name?");
    String userName = input.next();
    System.out.printf("Hello %s! It's nice to meet you.", userName;
  }
}



// FileInputStream read files from disk
import java.io.*;

public class Introduction {
  public static void main(String[] args) throws IOException {
    String path = "/home/ccuser/workspace/java-input-and-output-file-input-stream/input.txt";
    FileInputStream inputFile = new FileInputStream(path);

    int i = 0;
    while((i = inputFile.read()) != -1) {
      System.out.print((char)i);
    }
          inputFile.close();

  }
}

import java.io.*;

public class Introduction {
  public static void main(String[] args){
    String path = "/home/ccuser/workspace/java-input-and-output-file-input-stream/input.txt";
    try {
      FileInputStream inputFile = new FileInputStream(path);
      int i = 0;    
      while((i = inputFile.read()) != -1) {    
        System.out.print((char)i);    
      }    
      inputFile.close();
    } catch (IOException e) {
      System.out.println("There has been an IO exception!");
      System.out.println(e);
    }
  }
}