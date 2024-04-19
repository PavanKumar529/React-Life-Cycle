import React, { useEffect, useState } from 'react'

const Example2 = () => {
    const [ text, setText ] = useState("")
    const [ charCount , setCharCount ] = useState(0)
    const [ wordCount , setWordCount ] = useState(0)
    const [ characters, setCharacters ] = useState(0)


    useEffect(() => {

        // setCharCount(text.trim().length)
        // setWordCount(() => {
        //     let str = text.trim()
        //     let count = 1
        //     for(let i=0; i<str.length; i++) {
        //         if(str[i] === ' ') {
        //             count ++
        //         }
        //     }
        //     return count 
        // })

        
        setCharCount(text.length)

        const characters = text.split("").filter(word => word.trim()  !== "");

        setCharacters(characters.length);

        // const charLengthWithoutSpace = text.replace(/\s/g, '').length;
        // setCharCount(charLengthWithoutSpace);


        // const words = text.split(" ").filter(word => word.trim() !== "");
        // setWordCount(words.length);
// or
        // setWordCount(text.trim().split(" "))
        setWordCount(text.trim().split(" ").filter(e => e !== "").length)

    }, [text])

    const reverseString = () => {
        const reversedText = text.trim().split("").reverse().join("");
        setText(reversedText);
    };

    const reverseEachWord = () => {
        const reversedWords = text.split(" ").map(word => word.split("").reverse().join("")).join(" ");
        setText(reversedWords);
    };

    
  return (
    <div>
      <textarea cols={50} rows={10} value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <h1>{text}</h1>
      <h3>No.of characters with space count: {charCount}</h3>
      <h3>No.of characters without space count: {characters}</h3>
      <h3>No.of words count: {wordCount}</h3>
      <button onClick={() => setText(text.toUpperCase())}>Convert to Upper Case</button>
      <button onClick={reverseString}>Reverse the String</button>
      {/* <button onClick={setText(() => text.trim().split("").reverse().join("") )}>Reverse the String</button> */}

        <button onClick={reverseEachWord}>Reverse Each Words</button> 
        {/* Like Hello World = olleH dlroW */}
    </div>
    
  )
}

export default Example2
