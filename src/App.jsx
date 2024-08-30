import { useEffect, useState } from "react";
import Compbar from "./components/Compbar";
import Compboard from "./components/Compboard";
import Compitems from "./components/Compitems";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
        <div>
<Compbar setCategory={setCategory}/>
<Compboard category={category}/>
<Compitems/>
</div>
  
)}

export default App;
