import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function HttpHelper(url) {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
}

export HttpHelper