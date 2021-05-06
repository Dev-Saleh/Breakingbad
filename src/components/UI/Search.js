
import React,{useState} from 'react'

const Search = ({getQuery}) => {
    const [ settext] = useState('');

   const onChange = (q) => {
    settext(q);
    getQuery(q);
   }
    return (
        <section className='search'>
            <form>
                <input type='text' className='form-control' placeholder='Search Characters' onChange={(e) => onChange(e.target.value)}  />
            </form>
        </section>
    )
}

export default Search
