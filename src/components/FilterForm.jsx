export default function FilterForm(props) {
  const formStyles = {
    border: ".3em solid green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  return(
    <div style={formStyles}>
      <form onSubmit={props.handleFruitSubmit}>
        <label htmlFor="fruit-filter">Enter A Fruit!</label>

        <input 
        type="text"
        value={props.fruitInputValue}
        onChange={props.handleFruitChange}
        placeholder="enter a fruit! 🍒"
        />
        
        <input
          type="submit"
          value="Submit to the Fruit"
          />

      </form>
    </div>
  )
}