import React, { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(100);
  const [communityPct, setCommunityPct] = useState(5);
  const [page, setPage] = useState("login"); // login | home | dashboard

  const savedFees = (amount * 0.07).toFixed(2);
  const communityImpact = ((amount * communityPct) / 100).toFixed(2);

  // ---------------------------
  // Login Page
  // ---------------------------
  if (page === "login") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
          <h1 className="text-4xl font-serif text-brandGreen mb-4">Remitr</h1>
          <p className="text-gray-600 mb-6">Sign in to start sending and investing.</p>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-6"
          />

          <button
            onClick={() => setPage("home")}
            className="w-full bg-brandGreen text-white py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Sign In
          </button>

          <p className="mt-6 text-sm text-gray-500">
            Don’t have an account?{" "}
            <span className="text-brandOrange font-semibold cursor-pointer">
              Join Waitlist
            </span>
          </p>
        </div>
      </div>
    );
  }

  // ---------------------------
  // Dashboard (Impact Tracking)
  // ---------------------------
  if (page === "dashboard") {
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <header className="bg-brandGreen text-white px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif">Remitr</h1>
          <div className="flex gap-3">
            <button
              className="bg-white text-brandGreen px-4 py-2 rounded-lg font-semibold"
              onClick={() => setPage("home")}
            >
              Back to Demo
            </button>
            <button
              className="bg-brandOrange px-4 py-2 rounded-lg font-semibold"
              onClick={() => setPage("login")}
            >
              Log Out
            </button>
          </div>
        </header>

        <main className="px-6 py-10 max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif mb-6">Impact Dashboard</h2>
          <p className="mb-8 text-lg">
            See how community investments from the diaspora are changing lives.
          </p>

          {/* Example projects */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold mb-2">School in Lagos</h3>
              <p className="text-sm mb-2">Funded 82%</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-brandOrange h-3 rounded-full" style={{ width: "82%" }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold mb-2">Clinic in Kingston</h3>
              <p className="text-sm mb-2">Funded 45%</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-brandGreen h-3 rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold mb-2">Solar Grid in Accra</h3>
              <p className="text-sm mb-2">Funded 60%</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
          </div>

          {/* Wallet mock */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4">Your Wallet</h3>
            <p>Balance: <span className="font-semibold">$250.00</span></p>
            <p className="mt-2">Last transfer: <span className="text-gray-600">$100 → Lagos (5% to community)</span></p>
          </div>
        </main>
      </div>
    );
  }

  // ---------------------------
  // Home (Send Money Demo)
  // ---------------------------
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <header className="bg-brandGreen text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif">Remitr</h1>
        <button
          className="bg-brandOrange px-4 py-2 rounded-lg font-semibold"
          onClick={() => setPage("login")}
        >
          Log Out
        </button>
      </header>

      {/* Demo */}
      <section id="demo" className="py-20 px-6 text-center bg-gray-100 min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-serif mb-6">Send Money</h2>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow p-6">
          <label className="block mb-4 text-lg">
            Enter amount to send:
            <input
              type="number"
              className="border p-2 rounded w-full mt-2 text-center"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </label>

          <p className="mb-2">Fees saved vs banks: <span className="font-bold text-green-600">${savedFees}</span></p>
          <label className="block mb-4">
            Community Investment: {communityPct}%
            <input
              type="range"
              min="0"
              max="20"
              value={communityPct}
              onChange={(e) => setCommunityPct(Number(e.target.value))}
              className="w-full"
            />
          </label>
          <p>That’s <span className="font-bold text-orange-600">${communityImpact}</span> going to community projects!</p>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => alert(`Sending $${amount} with near-zero fees!`)}
              className="px-4 py-2 bg-brandGreen text-white rounded-lg hover:bg-green-700"
            >
              Send Money
            </button>
            <button
              onClick={() => setPage("dashboard")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              View Impact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


