import { getSuggestedQuery } from '@testing-library/dom';
import React,{useState,useEffect} from 'react'

const Search = ({getQuery}) => {
    const [text, settext] = useState('');

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
