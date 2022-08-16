export default function Create() {
  const test = document.getElementsByClassName("test")
  console.log('test', test)
  return(
    <div>
      <h1>Create Quiz!</h1>
      <form>
        <label>Quiz Name:</label>
        <input className="test" />
        <br />
        <label>Category:</label>
        <input />
        <br />
        <label>Number of questions:</label>
        <input/>
        <button>Submit</button>
      </form>

      
    </div>
  );
}