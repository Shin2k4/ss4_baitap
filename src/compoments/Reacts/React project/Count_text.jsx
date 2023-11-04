import React, { useState } from 'react';

function CountText() {
    const [inputText, setInputText] = useState('');
    const [charCount, setCharCount] = useState(0);
    const handleInputChange = (event) => {
        const text = event.target.value;
        setInputText(text);
        let arrtext = text.split(" ")
        let textNoSP = arrtext.join('');
        console.log(textNoSP);
        setCharCount (textNoSP.length)
    };

    return (
        <div>
            <input 
                placeholder="Enter some text..." value={inputText} onChange={handleInputChange} className='form-control'/>
            <p>Tổng số chữ : {charCount}</p>
        </div>
    );
}

export default CountText;
