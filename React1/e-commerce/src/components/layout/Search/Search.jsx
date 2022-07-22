import React, { useEffect, useState } from 'react'
import SearchDisplay from './SearchDisplay';


const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const [searchFilterData, setSearchFilterData] = useState([]);
  const [data, setData] = useState([]);
  // console.log("SearchPropsData", props)
  useEffect(() => {
    setData(props)
  })
  let newData = props;
  // console.log("dhanu", newData);


  const HandleSearch = event => {
    console.log("searchText.toLowerCase()",searchText.toLowerCase())
    console.log("data.data", data.data);
    let res = data.data.filter((value) => {
      // console.log("value.title.toLowerCase().includes(searchText.toLowerCase()",value.title.toLowerCase().includes("omega"))
      console.log("result", value.title.toLowerCase().includes(searchText.toLowerCase()))
      return value.title.toLowerCase().includes(searchText.toLowerCase())
    
    })
    setSearchFilterData(res);
    console.log("setSearchFilterData", searchFilterData)

  }
  return (
    <>
      <input className="form-control me-2 px-5" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={e => setSearchText(e.target.value)} />
      <button className="btn btn-outline-success" type='submit' onClick={HandleSearch}>Search</button>

    </>
  )
}
export default Search
