/*

Suppose you have a function getBatch(index)
 
The function makes a request call to the backend to fetch the data.
It returns a promise which can be resolved to the following JSON structure:

interface ValueAndChildrenType {
  value: string;
  children: ValueAndChildrenType[];
}

response: Promise<ValueAndChildrenType[]>;

[
  {
    "value": "value1",
    "children": [
      {
        "value": "value200",
        "children": [
          {
            "value": "value3",
            "children": []
          }
        ]
      },
      {
        "value": "value4",
        "children": []
      }
    ]
  },
  {
    "value": "value5",
    "children": []
  }
]


Task: complete the function getValueList(from, to) that calls getBatch(x) and flattens the results into an array:

 
Expected result:
[
  {"value":"value1"},
  {"value":"value200"},
  {"value":"value3"},
  {"value":"value4"},
  ...
]

*/


// complete this:
function getValueList(from, to) {
   
   return new Promise((resolve, reject) => {
        var result = [];
       /*
        from - 1
        getBatch(1).then => [{}] => get k,v(value: value0) => push => result
       */
       
       for(var i = from; i <= to; i++) {
            getBatch(i).then(function(res){
               for(var j = 0; j < res.length; j++) {
                   if(res[j].value) result.push({value: res[j].value});
                   
                   var children = res[j].children; 
                   /* 
                        track the children array
                        check if it has length greater than 0
                   */
                    getNestedChild(children)
                    function getNestedChild(children) {
                        if(!children.length) return;
                        for(var k = 0; k < children.length; k++) {
                            result.push({value: children[k].value});
                            if(children[k].children) getNestedChild(children[k].children);
                        }
                    }
               }

               resolve(result);
            });
       }
   })
}

// Test driver
getValueList(1, 3).then(result => console.log(result));
/*
[
  {"value":"value0"},
  {"value":"value1"},
  {"value":"value2"},
  {"value":"value3"},
  {"value":"value4"},
  {"value":"value5"},
  {"value":"value6"}
]
*/


// mock function
function getBatch(index) {
    return new Promise((resolve, reject) => {
        if (index === 1) {
          resolve([
            {
              value: "value0",
              children: []
            }
          ]);
        } else if (index === 2) {
          resolve([
            {
              value: "value1",
              children: [
                {
                  value: "value2",
                  children: [
                    {
                      value: "value3",
                      children: []
                    }
                  ]
                },
                {
                  value: "value4",
                  children: []
                }
              ]
            },
            {
              value: "value5",
              children: []
            }
          ]);
        } else if (index === 3) {
            resolve([
              {
                value: "value6",
                children: []
              }
            ]);
        }
    });
}

