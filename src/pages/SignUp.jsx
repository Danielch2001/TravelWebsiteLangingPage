// src/pages/SignUp.jsx
export default function SignUp() {
  return (
    <div className="pt-20 flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input type="text" placeholder="Name" className="border p-2 w-full mb-2" />
        <input type="email" placeholder="Email" className="border p-2 w-full mb-2" />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">Register</button>
      </form>
    </div>
  );
}
