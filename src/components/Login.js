import './Login.css';

export default function Login() {
  return(
    <div>
      <h1>Login</h1>
      <section>
        <form>
          <label>Email:</label>
          <input />
          <br />
          <label>Password:</label>
          <input />
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
}