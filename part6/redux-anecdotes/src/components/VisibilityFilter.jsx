import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const VisibilityFilter = (props) => {
  const dispatch = useDispatch()

  return (
    <div>
        <h1>Filter</h1>
        <input type="text" name="filter" onChange={(event)=> dispatch(filterChange(event.target.value))} />
    </div>
    
    
      
  )
}

export default VisibilityFilter