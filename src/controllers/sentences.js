import sentences from '../models/Sentence.js'

// Renders page with the new sentence data 
export const renderPage = async (req,res) => {

    // If there is no position specified. I.e. it is the first sentence
    if(!req.params.pos){
        // Reset next values
        let currSentence = sentences.head;
        while(currSentence.next){
            let tmp = currSentence.next;
            currSentence.next = null;
            currSentence = tmp;
        }

        res.render("index", {sentence: sentences.head});
    }
    else{
        console.log(req.params.pos)

        // Get the current sentence
        let currSentence = sentences.head;
        while(currSentence.next){
            currSentence = currSentence.next;
        }

        currSentence.next = currSentence[req.params.pos];

        if(currSentence.next){
            // Renders the page
            res.render("index", {sentence: currSentence.next})
        }      
    }
}

// Adds a new sentence to the sentences object
export const postSentence = async (req,res) => {
    const sent = req.body.sentence;
    const pos = req.params.pos;
    console.log(pos)

    // Get the currect sentence
    let currSentence = sentences.head;
    while(currSentence.next){ 
        currSentence = currSentence.next;
    }

    // Adds a new sentence node
    await sentences.addSentence({sentence: sent},currSentence,pos);

    // Renders the page
    res.render("index", {sentence: currSentence})
}