import React from 'react';

/** Display inspirational quote. */

function InspirationalQuote({ quote, getQuote }) {
  return (<div className='text-end'>
    {quote
        ?
        <div>
          <p className="inpire-quote lead "><i>{quote}</i></p>
          <button className="btn btn-sm btn-warning"
            onClick={getQuote}>Nu quote.</button>
        </div>
        :
      <button className="btn btn-sm btn-warning"
        onClick={getQuote}>Click here to get an inspirational quote!</button>
    }</div>);
}

export default InspirationalQuote;