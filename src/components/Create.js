export default function Create() {
  const arr = [];
  const test = document.getElementsByClassName("test").value;
  const test2 = document.getElementsByClassName("test2").value;
  const test3 = document.getElementsByClassName("test3").value;
  arr.push(test, test2, test3);
  const meep = document.getElementById('sub')
  // meep.addEventListener('click', function(event) {
  //   event.preventDefault();
  // })

  console.log(test, test2, test3)
  console.log('test', arr)
  return(
    <div>
      <h1>Create Quiz!</h1>
      <form>
        <label>Quiz Name:</label>
        <input className="test" />
        <br />
        <label className="test2">Category:</label>
        <input />
        <br />
        <label className="test3">Number of questions:</label>
        <input/>
        <button id="sub">Submit</button>
      </form>      
    </div>
  );
}