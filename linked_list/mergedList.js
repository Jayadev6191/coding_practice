var p = {
    val: 10,
    next: {
      val: 20,
      next: {
        val: 30,
        next: {}
      }
    }
  };
  
  var q = {
    val: 10,
    next: {
      val: 30,
      next: {
        val: 40,
        next: {}
      }
    }
  };
  
  /* --------- ------------------------------------------------------*/
  //  10 -> 20 -> 30 -> null
  //  10 -> 30 -> 40 -> null
  /* --------- ------------------------------------------------------*/
  
  function mergeLists(p, q) {
    if (p === null) return q;
    if (q === null) return p;
  
    let new_list = {};
    let s = null;
    if (p.val <= q.val) {
      s = p;
      p = p.next;
    } else {
      s = q;
      q = q.next;
    }
  
    new_list = s;
  
    while (p && q) {
      if (p.val <= q.val) {
        s.next = p;
        s = p;
        p = s.next;
      } else {
        s.next = q;
        s = q;
        q = s.next;
      }
    }
    return new_list;
  }
  
  console.log(mergeLists(p, q));
  