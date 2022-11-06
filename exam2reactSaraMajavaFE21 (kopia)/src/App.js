import React, { useState } from "react";
import Form from "./components/form/Form";
import Filter from "./components/filter/FilterComp";

const App = () => {

    const [pList, setPList] = useState([]); 
    const [category, setCategory] = useState([]); 
    const [allList, setAll] = useState([]); 

    const addProduct = (formObject) => {
        setPList(pList => [...pList, formObject]); 
        if (!category.includes(formObject.pCategory)) {
        setCategory(category => [...category, formObject.pCategory])
        }
        setAll(pList => [...pList, formObject]);
    }

    const filterProduct = (cat) => {
        const data = allList.filter((value)=> value.pCategory === cat)
        setPList(data); 
    }

    const filterAll = () => {
        setPList(allList);
    }

  return (
    <>
      <Form addProduct={addProduct}/>
      {pList.map((value, index) => {
          return <h3 key={index}>Product: {value.pName}, Amount: {value.pAmount}, Expiration Date: {value.pExdate}, Category: {value.pCategory}</h3>
      })}
      {allList.length > 0 && <Filter category={category} filterProduct={filterProduct} filterAll={filterAll}/>}
    </>
  );
};

export default App;
