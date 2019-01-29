/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    if(!s.length && !t.length) return false;
    
    //calc length of the strings
    var m = s.length;
    var n = t.length;
    var rem_edits = 1;
    
    if(Math.abs(m - n) > 1) return false;
    
    var i = 0;
    var j = 0;
    
    while(i < m && j < n) {
        if(s[i] !== t[j]) {
            if(!rem_edits == 1) {
                return false;
            }    
            rem_edits--;
            
            if(m > n) {
                i++;
            } else if (m < n) {
                j++;
            } else {
                // both string are equal
                i++;
                j++;
            }
        } else {
            // both string are equal
            i++;
            j++;
        }
    }
    
    if(i < m || j < n) {
        rem_edits--;
    }
    
    return rem_edits === 0;
};
