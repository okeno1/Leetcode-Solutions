class Solution {
public:
  
  string convert(string st)
  {
     string s1[]={".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
    string s="";
    for(char a:st)
    {
      s+=s1[a - 'a'];
      
    }
    return s;
    
  }
    int uniqueMorseRepresentations(vector<string>& words) {
      
     set<string>st; 
      for(int i=0;i<words.size();i++)
      {
      st.insert(convert(words[i]));
      
               
      
      }
      
      
      return st.size();
    }
};
