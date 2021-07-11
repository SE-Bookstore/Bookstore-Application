import React,{useState, useEffect} from "react";
import axios from "axios";



function Featured(props) {

    let [bookGrid,setBookGrid] =useState([])

    let randomWords= ["quilting", "pencil", "fort", "bottle","fiji"]

    const getBooks= async ()=>{
       let res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${randomWords[Math.floor(Math.random()*5)]}`)
       
       createGrid(parseResponse(res.data.items))
    }

    const parseResponse=(arr)=>{
        console.log(arr)
        return arr.map(x=>{
            if(x.volumeInfo.authors)
            {
                return {title: x.volumeInfo.title,
                    author: x.volumeInfo.authors[0],
                    picture: x.volumeInfo.imageLinks.smallThumbnail
                    }
            
            }else{
                return {title: x.volumeInfo.title,
                    author: "not found",
                    picture: x.volumeInfo.imageLinks.smallThumbnail
                    }
            }
            })
            
    }
    
    const createGrid = (parsedArr)=>{
        let grid= parsedArr.map(x=>{
            return (
                <div>
                    <img src={x.picture}></img>
                    <h4>{x.title}</h4>
                    <h5>{x.author}</h5>
                </div>
            )
        })
        setBookGrid(grid);
        
    }


    return <div>
            {bookGrid} 
            <button onClick={getBooks}>Api Test</button>
        </div>;
  }
  
  export default Featured;
  