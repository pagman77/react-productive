import React, {useState} from 'react';
import InspirationalQuote from './InspirationalQuote';
import axios from 'axios'

const API_BASE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

function GetInspirationalQuote(){

  const [quote, getQuote] = useState("");

  async function setQuote(){
    const quote = await axios.get(API_BASE_URL);
    getQuote(quote.data.quote.text);
  }

  return (
    <InspirationalQuote quote={quote}
    getQuote={setQuote}/>
  )
}


export default GetInspirationalQuote;