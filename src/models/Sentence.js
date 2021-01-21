  // Sentence node class
  class SentenceNode{
    constructor(data, parent = null, top = null, bottom = null, left = null, right = null, next = null){
        this.data = data,
        this.parent = parent,
        this.top = top,
        this.bottom = bottom,
        this.left = left,
        this.right = right,
        this.next = next
    }
  }

  // Sentences class - a class that links all the sentence nodes together
  class Sentences{
    constructor(){
        this.head = null;
    }

    // Method to add a sentence node to the Sentences object
    addSentence(data,parent,pos){
      console.log(pos)
      // Creates the new sentence node
      let newNode = new SentenceNode(data,parent);
      
      // Checks if a parent is specified, if not, the node is the head node
      if(!parent){
        this.head = newNode;
        return this.head;
      }
      else{
        // Links the new node to the parent node depending on its position
        if(pos == "top"){
          newNode.parent.top = newNode;
        }
        else if(pos == "bottom"){
          newNode.parent.bottom = newNode;
        }
        else if(pos == "left"){
          newNode.parent.left = newNode;
        }
        else if(pos == "right"){
          newNode.parent.right = newNode;
        }
      }
    }
  }

  // Initialises the sentences object that will contain reference to all the sentence nodes
  let sentences = new Sentences();
  // Adds the first sentence to the sentences object
  sentences.addSentence({sentence: "Once upon a time, there was a big bad wolf"})

  export default sentences;