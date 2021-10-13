import PropTypes from 'prop-types'

const foodLike = [
  {
    id: 1,    
    name: "pizza",
    image: "https://w.namu.la/s/015965f5dfb5fe31da575f4854d36b4aa29cce64e24d27b9f51b76490dddbf7457190f6f77b5fc69dd65eeee8a8e1cd0bc5ad39e6cfa16efdbc7909eef3305cd910dffbcc49d1b4875fabf2312e0cbf11d5d758b69a243f7bd61b26641645673",
    alt: "피자",
    rating: 5.0
  },
  {
    id: 2,
    name: "jogbal",
    image: "https://newsimg.hankookilbo.com/cms/articlerelease/2020/05/21/202005211435033018_5.jpg",
    alt: "족발",
    rating: 4.8
  }
]

const renderFood = dish => <Food 
  key={dish.id} 
  name={dish.name} 
  picture={dish.image} 
  alt={dish.alt}
  rating={dish.rating}
  />   

Food.PropTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  console.log(foodLike.map(renderFood));  

  return(
    <div>
      {foodLike.map(renderFood)}
    </div>
  )
}
  
function Food({name, picture, alt, rating}) {
  return (      
    <div>
      <h1>I like {name}</h1>    
      <h4>{rating}/5.0</h4>
      <img alt={alt} src={picture} />  
    </div>
  )
}

export default App
