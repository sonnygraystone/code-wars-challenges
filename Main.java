public class Main {
    public static void Main(String[] args){
        String str="geeks", nstr="";
        char ch;

        System.out.println("Original word: ");
        System.out.println(str);

        for (int i=0; i < str.length(); i++)
        {
            ch=str.charAt(i);
            nstr=ch+nstr;
        }
        System.out.println("Reversed str "+ nstr);
        
    }
    
}