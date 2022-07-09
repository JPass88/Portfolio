import Quotes from '../public/quotesDatabase.json';

export default function quote() {
  
    let quote = '';

    function findQuote() {
        let num = Math.floor((Math.random() * 51));
        let text = Quotes[num].quote;  
        let author = Quotes[num].author;
        quote = '"' + text + '" -' + author;
        return quote;
    }    
    
    return (
        <div className="Quote">        
            <p id="quotetext">{findQuote()}</p>        
        </div>
    );
}

