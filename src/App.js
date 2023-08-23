import { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
import { plusOne, minusOne, clearData, inputId, fetchData } from './features/dataSlice';
import './App.css';



function App(props) {
 const dispatch = useDispatch() 
 const data = useSelector((state) => state.data)

 const renderImg = () => {
  if(data.apiData) {
    return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
  } else {
    return <p>image here</p>
  }
}

useEffect(() => {
  dispatch(fetchData())
}, [props.objectId, dispatch])

return (
  <div className="App">
    <div>
      <button onClick={() => dispatch(fetchData())}>Fetch with Thunk</button>
      <button onClick={() => dispatch(clearData())}>Clear</button>
      <button onClick={() => dispatch(plusOne())}>NEXT UP</button>
      <button onClick={() => dispatch(minusOne())}>PREVIOUSLY</button>
    </div>
    <input value={ data.objectId } onChange={(e) => {
      dispatch(inputId(Number(e.target.value)))
    }} />
    <div>
      {data.objectId}
      {renderImg()}
    </div>
  </div>
);
}


const mapStateToProps = (state) => ({ objectId: state.data.objectId })

export default connect(mapStateToProps)(App);
