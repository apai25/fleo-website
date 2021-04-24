public class AdditionPattern{
    private int start;
    private int increment;
    private int curr;
  
    public AdditionPattern(int start, int increment){
      this.start = start;
      this.increment = increment;
      curr = start;
    }
    public int currentNumber(){
      return curr;
    }
    public void next(){
      curr += increment;
    }
    public void prev(){
      if(curr - increment >= start){
        curr -= increment;
      }
    }
  }