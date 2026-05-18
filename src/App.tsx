import { useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  // USERS
  const users = [
    {
      username: "admin",
      pin: "0000",
    },
  ];

  // LOGIN FUNCTION
  const handleLogin = (e) => {
    e.preventDefault();

    const validUser = users.find(
      (user) =>
        user.username === username &&
        user.pin === pin
    );

    if (validUser) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Incorrect username or PIN");
    }
  };

  // DASHBOARD PAGE
  if (isLoggedIn) {
    return (
      <Dashboard
        username={username}
        setIsLoggedIn={setIsLoggedIn}
        setUsername={setUsername}
        setPin={setPin}
      />
    );
  }

  // LOGIN PAGE
  return (
    <div className="flex min-h-screen 
    items-center justify-center 
    bg-gradient-to-br 
    from-blue-700 via-indigo-700 
    to-purple-700 px-4 py-6">

      {/* LOGIN CARD */}
      <div className="w-80 h-100 max-w-md 
      rounded-[30px] bg-white 
      px-6 py-10 shadow-2xl 
      sm:px-10">

        {/* ICON */}
        <div className="mb-8 text-center">

          <div className="mb-4 flex justify-center">
            <div className="flex h-20 w-20 items-center 
            justify-center rounded-full bg-gray-100 
            text-4xl shadow-inner">
              🛒
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Fevy~Tech POS
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Instant Barcode Scanner
          </p>
        </div>

        {/* LOGIN FORM */}
        <form
          onSubmit={handleLogin}
          className="space-y-5 flex flex-col gap-4"
        >
          {/* USERNAME */}
          <div>
            <label className="mb-2 block text-xl font-semibold text-gray-700">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              className="h-14 w-full rounded-xl border border-gray-300 px-4 text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              required
            />
          </div>

          {/* PIN */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              PIN Code
            </label>

            <input
              type="password"
              placeholder="Enter 4-digit PIN"
              maxLength={4}
              value={pin}
              onChange={(e) =>
                setPin(e.target.value)
              }
              className="h-14 w-full rounded-xl border border-gray-300 px-4 text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              required
            />
          </div>

          {/* ERROR */}
          {error && (
            <div className="rounded-xl bg-red-100 px-4 py-3 text-sm font-medium mt-4 text-red-600">
              {error}
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-4 h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.01] active:scale-[0.98]"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default App;