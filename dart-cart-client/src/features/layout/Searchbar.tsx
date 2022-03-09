import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { updatedSearchString } from "../../common/slices/shopProductSlice";

const Searchbar = () => {


  const dispatch = useDispatch();
  const string = useRef<HTMLInputElement>(null);

  const handleSearch = (e: any) => {
    if(e.code !== "Enter") {
      dispatch(updatedSearchString(string.current?.value))
    } 
  }

  const buttonHandler = (e: any) => {
    dispatch(updatedSearchString(string.current?.value))
  }




  return (

    <div className="navbar-brand" style={{width:" 60%", marginLeft: "20px" }}>
      <div className="form-inline my-2 my-lg-0">
        <input
          type="submit"
          onClick={e => buttonHandler(e)}
          className="btn btn-success"
          value="Search"
          style={{ float: "right", backgroundColor: "#198754" }}
        />
        <div style={{ overflow: "hidden", paddingRight: ".5em" }}>
          <input type="text" placeholder="Search" style={{ width: "100%" }} ref={string} onChange={(e) => {handleSearch(e)}}/>
        </div>
      </div>
    </div>


  );
};

export default Searchbar;
