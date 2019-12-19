console.clear();


const res = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 
'c12', 'c13', 'c14','c15', 'c16'];
let elements = document.querySelectorAll('.row div');

function swap(c1,c2) {
  var temp = document.getElementById(c1).getAttribute('data-t');
  document.getElementById(c1).setAttribute('data-t', 
  document.getElementById(c2).getAttribute('data-t'));
  document.getElementById(c2).setAttribute('data-t', temp);
}

function shuffle() {
  let tmp = Array(16).fill().map((val,i) => i+1);
  let sorted = tmp.sort(() => Math.random() - 0.5);
  tmp.forEach((col1, col2) => swap(`c${col2+1}`, `c${col1}`));
}


elements.forEach((element, i) => {
  element.addEventListener('click', function() {
    move(i +1);
  });
})


function results() {
  let tmp = [];
  elements.forEach((e) => tmp.push(e.getAttribute('data-t')));
  if(tmp.toString() === res.toString()) {
    alert(' Congrats, YOU WON !!!');
  } else {
    alert(' Sorry, TRY AGAIN !!!');
  }
}

function move(nodeId) {
  let whichNode = document.getElementById(`c${nodeId}`).getAttribute('data-t');
  /*for directions */
  let col = (nodeId % 4 ===0 ) ? 4 : (nodeId % 4);
  let row = Math.ceil(nodeId / 4); 
  if(whichNode !== 'c16') {
    if (col < 4) {
      if (document.getElementById(`c${nodeId+1}`).getAttribute('data-t') === "c16") {
        swap(`c${nodeId}`, `c${nodeId + 1}`);
        return;
      }
    }

    if (col > 1) {
      if (document.getElementById(`c${nodeId-1}`).getAttribute('data-t') === "c16") {
        swap(`c${nodeId}`, `c${nodeId - 1}`);
        return;
      }
    }

    if (row>1) {
      if ( document.getElementById(`c${nodeId - 4}`).getAttribute('data-t') === "c16") {
         swap(`c${nodeId}`, `c${nodeId - 4}`);
        return;
      }
    }

    if (row<4) {
      if ( document.getElementById(`c${nodeId + 4}`).getAttribute('data-t') === "c16") {
        swap(`c${nodeId}`, `c${nodeId + 4}`);
        return;
      }
    } 
  }
}


