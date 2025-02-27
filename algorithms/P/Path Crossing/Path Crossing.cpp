class Solution {
public:
    bool isPathCrossing(string path) {
	
        set<pair<int, int>>st;
        
        int x=0,y=0;
        
        st.insert({0, 0});
        
        for(int i=0;i<path.length();i++){
            
            if(path[i]=='N'){
                x++;
            }
            
            else if(path[i]=='S'){
                x--;
            }
            
            else if(path[i]=='E'){
                y++;
            }
            
            else{
                y--;
            }
            
            //if pair find at any point, return true
            if(st.find({x,y}) != st.end()){
                return 1;
            }
            //insert the pair
            st.insert({x, y});
        }
        return 0;
    }
};
