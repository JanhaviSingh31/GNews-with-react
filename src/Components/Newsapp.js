import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "d4e019562872419a81c048f153b09788";
    const page = 1;

    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0,10)
        setNewsData(dt)

    }

    useEffect(()=>{
        getData()
    },[])

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)

    }
    const userInput = (event) =>{
        setSearch(event.target.value)
    }

  return (
    
      <div className='page'>
        <nav>
          <div className='logo'>
        <img src="/mylogo.jpeg" style={{ width: '100px', height: '100px' , borderRadius: '50%' }}/>
            <div>
                <h1 style={{ paddingTop: '14px' }}>Janhit News</h1>
            </div>
            </div>
            <ul style={{display:"flex", gap:"11px"}}>
                <a style={{fontWeight:600, fontSize:"17px"}}>All News</a>
                <a style={{fontWeight:600, fontSize:"17px"}}>Trending</a>

            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div className='hero'>
        <div>
            <p className='head'>Stay Update with JanhitNews</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>
        </div>
       

        <div>
        {newsData?  <Card data={newsData}/> : null}

        </div>
    </div>
  )
}

export default Newsapp
