// import logo from "./logo.svg";
// import "./App.css";
// import { element } from "prop-types";
// import { useEffect, useState } from "react";

// function Test() {
//   const [recaps, setRecaps] = useState([]);

//   function getRecap() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => setRecaps(data));
//   }
//   console.log(recaps);

//   useEffect(() => {
//     getRecap();
//   }, []);
//   return (
//     <div className="test">
//       {recaps.map((element) => {
//         return <div key={element.id}>{element.title}</div>;
//       })}
//     </div>
//   );
// }

// export default Test;
