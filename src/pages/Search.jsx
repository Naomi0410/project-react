import {
  useSearchParams,
  Link,
  useNavigate,
} from "react-router-dom";
import { getSearch } from "../api/api";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data, error, isLoading } = useFetch(getSearch, query);
 
  const navigate = useNavigate();
  
  useEffect(() => {
    const params = new URLSearchParams();
    if (query) {
      params.append("query", query);
    } else {
      params.delete("query");
    }
    navigate({ search: params.toString() });
  }, [navigate, query]);

  const filterResult = data?.results?.filter((item)=>{
    if(item.media_type == "tv"){
    return
    }
    else{
      return item.title || item.name
    }
  })

  console.log(filterResult);

  return <div className="cover px-3 py-3 px-lg-5 "></div>;
}
