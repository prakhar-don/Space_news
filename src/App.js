import { useEffect,useState} from 'react';
import './App.css';

function App() {

  const [news,setNews]= useState([]);

  useEffect(()=>{
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=10").then((res)=> res.json()).then((data)=>{
    setNews(data.results);
    },[]);
  });
  return (
    <div className="App">
      <h1 className='title'>Space News</h1>
      <div className="container">
       {news.map((val,key)=>{
        return (
        <div className="article" key={key} onClick={()=>{window.location.href=val.url}}>
          <h3> {val.title}</h3> 
          <img src={val.image_url}/>
          <p>{val.summary}</p>
          <h4>{val.published_at}</h4>

          
           </div>
        )
       })}
 



      </div>
      
    </div>
  );
}

export default App;
