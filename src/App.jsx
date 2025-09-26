import React, { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(100);

  const savedFees = (amount * 0.07).toFixed(2);
  const communityImpact = (amount * 0.05).toFixed(2);

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-brandGreen to-brandOrange text-white">
        <h1 className="text-6xl font-serif mb-4">Remitr</h1>
        <p className="text-2xl mb-6 font-sans">Transfer Money. Transform Community.</p>
        <a href="#demo" className="px-6 py-3 bg-white text-brandGreen font-semibold rounded-full shadow hover:bg-gray-200">
          See How It Works
        </a>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-serif mb-4">The Problem</h2>
        <p className="max-w-2xl mx-auto text-lg">
          The Black diaspora sends over <strong>$50B annually</strong> to Africa &amp; the Caribbean.
          Fees average <strong>7–10% per transfer</strong>. Families need money today, but communities also need long-term investment.
        </p>
      </section>

      {/* Solution */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-serif mb-6">Our Solution</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-bold text-xl mb-2">Cheaper Transfers</h3>
            <p>Stablecoins cut fees from 7–10% to near zero.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-bold text-xl mb-2">Faster Access</h3>
            <p>Transactions settle in seconds; cash-out via local agents or mobile money.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-bold text-xl mb-2">Community Investment</h3>
            <p>Toggle a % of each transfer into pooled smart contracts funding schools, clinics, and businesses.</p>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-serif mb-6">Demo: Your Transfer</h2>
        <p className="mb-4 text-lg">See how Remitr saves you money and funds your community.</p>
        <input
          type="number"
          className="border p-2 rounded w-40 text-center"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <div className="mt-6 max-w-md mx-auto bg-white rounded-2xl shadow p-6">
          <p className="text-lg">You send: <span className="font-bold">${amount}</span></p>
          <p className="text-lg">Fees saved vs banks: <span className="font-bold text-green-600">${savedFees}</span></p>
          <p className="text-lg">Optional community investment: <span className="font-bold text-orange-600">${communityImpact}</span></p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => alert(`Sending $${amount} with near-zero fees!`)}
            className="px-4 py-2 bg-brandGreen text-white rounded-lg hover:bg-green-700"
          >
            Send Money
          </button>
          <button
            onClick={() => alert(`$${communityImpact} invested in community projects!`)}
            className="px-4 py-2 bg-brandOrange text-white rounded-lg hover:bg-orange-700"
          >
            Invest in Community
          </button>
          <button
            onClick={() => alert("Tracking impact: School in Lagos funded, Clinic in Kingston launched!")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Track Impact
          </button>
        </div>
      </section>

      {/* Market */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-serif mb-6">Market Opportunity</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-bold text-xl">TAM</h3>
            <p>$860B global remittances; $54B Africa &amp; Caribbean.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-bold text-xl">Revenue</h3>
            <p>2% fee → ~$54M yearly revenue at scale.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-bold text-xl">Profit</h3>
            <p>~40% margins → ~$21.6M profit at scale.</p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-serif mb-6">Why Remitr Wins</h2>
        <div className="overflow-x-auto">
          <table className="table-auto mx-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Feature</th>
                <th className="border px-4 py-2">Western Union / MoneyGram</th>
                <th className="border px-4 py-2">Remitly / Wise</th>
                <th className="border px-4 py-2">Remitr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Fees</td>
                <td className="border px-4 py-2">7–10%</td>
                <td className="border px-4 py-2">2–4%</td>
                <td className="border px-4 py-2 font-bold text-green-600">~0%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Speed</td>
                <td className="border px-4 py-2">Hours–days</td>
                <td className="border px-4 py-2">Minutes–hours</td>
                <td className="border px-4 py-2 font-bold text-green-600">Instant</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Community Impact</td>
                <td className="border px-4 py-2">None</td>
                <td className="border px-4 py-2">None</td>
                <td className="border px-4 py-2 font-bold text-green-600">Built-in</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Transparency</td>
                <td className="border px-4 py-2">Limited</td>
                <td className="border px-4 py-2">Limited</td>
                <td className="border px-4 py-2 font-bold text-green-600">On-chain</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-brandOrange to-brandGreen text-center text-white">
        <h2 className="text-4xl font-serif mb-4">Join Us</h2>
        <p className="mb-6 text-lg">Help us turn billions in remittances into generational wealth.</p>
        <button className="px-6 py-3 bg-white text-brandGreen font-semibold rounded-full shadow hover:bg-gray-200">
          Get Started
        </button>
      </section>
    </div>
  );
}



