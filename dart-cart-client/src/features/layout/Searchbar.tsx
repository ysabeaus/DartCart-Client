import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchShopProducts,
  getSearchString,
  updatedSearchString,
} from "../../common/slices/shopProductSlice";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const dispatch = useDispatch();
  const string = useRef<HTMLInputElement>(null);
  const search: string = useSelector(getSearchString);

  const nav = useNavigate();
  const handleSearch = (e: any) => {
<<<<<<< HEAD
    dispatch(fetchShopProducts(search));
    nav("/Display");
  };
=======
    if(e.code !== "Enter") {
      dispatch(updatedSearchString(string.current?.value))
    } 
  }

  const buttonHandler = (e: any) => {
    dispatch(updatedSearchString(string.current?.value))
  }


>>>>>>> b14a86d78367c1da688f6f03c2f85b3ca4a32371

  const onChangeHandler = (e: any) => {
    dispatch(updatedSearchString(string.current?.value));
  };

  return (
    <div className="navbar-brand" style={{ width: " 60%", marginLeft: "20px" }}>
      <div className="form-inline my-2 my-lg-0">
        <button
          onClick={(e) => handleSearch(e)}
          className="btn btn-success"
          value="Search"
          style={{ float: "right", backgroundColor: "#198754" }}
        >
          Search{" "}
        </button>
        <div style={{ overflow: "hidden", paddingRight: ".5em" }}>
          <input
            type="text"
            placeholder="Search"
            style={{ width: "100%" }}
            ref={string}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
