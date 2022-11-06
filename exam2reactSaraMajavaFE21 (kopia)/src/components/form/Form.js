const Form = (props) => {
  const formObject = {
    pName: "",
    pAmount: 0,
    pCategory: "",
    pExdate: "",
  };

  const submitForm = (e) => {
    e.preventDefault();
    for (const item of e.target.children) {
      item.value = "";
    }
    props.addProduct(formObject);
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Product"
        onChange={(e) => (formObject.pName = e.target.value)}
      />
      <br></br>
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => (formObject.pAmount = e.target.value)}
      />
      <br></br>
      <input
        type="text"
        placeholder="Category"
        onChange={(e) => (formObject.pCategory = e.target.value)}
      />
      <br></br>
      <input
        type="date"
        onChange={(e) => (formObject.pExdate = e.target.value)}
      />
      <br></br>
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
