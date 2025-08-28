import React, { useState } from "react";
import "./App.css";
import {
  FaHome,
  FaSearch,
  FaRupeeSign,
  FaBars,
  FaWallet,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function App() {
  // ---- State ----
  const [balance, setBalance] = useState(99.25);
  const [activePage, setActivePage] = useState("home"); // "home" | "search" | "money"

  // ---- Actions ----
  const addMoney = () => setBalance((b) => b + 50);
  const spendMoney = () => setBalance((b) => (b >= 20 ? b - 20 : b));

  return (
    <div className="app">
      {/* -------- Top Navbar -------- */}
      <header className="topbar">
        <div className="left">
          <FaBars className="menu-icon" />
          <span className="logo">
            <span className="red">Simon</span> ❤️{" "}
            <span className="black">KRO</span>
          </span>
        </div>
        <div className="right">
          <MdLocationOn className="icon" />
          <span className="city">Kota</span>
          <span className="help">Help</span>
        </div>
      </header>

      {/* -------- Wallet Card -------- */}
      <div className="wallet-card">
        <FaWallet className="wallet-icon" />
        <div>
          <h4>SimonKro Account</h4>
          <p>
            Balance: <FaRupeeSign /> {balance.toFixed(2)}
          </p>
        </div>
        <button className="arrow" onClick={addMoney}>
          +50
        </button>
      </div>

      {/* -------- Page Content -------- */}
      {activePage === "home" && (
        <div className="grid">
          <div className="card" onClick={spendMoney}>
            🏨<p>Hostel/PG</p>
          </div>
          <div className="card" onClick={spendMoney}>
            🧕<p>Mess</p>
          </div>
          <div className="card" onClick={spendMoney}>
            ➕<p>Medical</p>
          </div>
          <div className="card" onClick={spendMoney}>
            📚<p>Library</p>
          </div>
          <div className="card" onClick={spendMoney}>
            👕<p>Laundry</p>
          </div>
          <div className="card" onClick={spendMoney}>
            🏍<p>Rent</p>
          </div>
          <div className="card add">➕</div>
        </div>
      )}

      {activePage === "search" && (
        <div className="page">
          <h2>🔍 Search</h2>
          <input
            type="text"
            placeholder="Search services..."
            className="search-input"
          />
        </div>
      )}

      {activePage === "money" && (
        <div className="page">
          <h2>💰 Wallet</h2>
          <p>Current Balance: ₹ {balance.toFixed(2)}</p>
          <button onClick={addMoney}>Add ₹50</button>
          <button onClick={spendMoney}>Spend ₹20</button>
        </div>
      )}

      {/* -------- Bottom Navbar -------- */}
      <nav className="bottombar">
        <div
          className={`nav-item ${activePage === "home" ? "active" : ""}`}
          onClick={() => setActivePage("home")}
        >
          <FaHome /> <p>Home</p>
        </div>
        <div
          className={`nav-item ${activePage === "search" ? "active" : ""}`}
          onClick={() => setActivePage("search")}
        >
          <FaSearch /> <p>Search</p>
        </div>
        <div
          className={`nav-item ${activePage === "money" ? "active" : ""}`}
          onClick={() => setActivePage("money")}
        >
          <FaRupeeSign /> <p>Money</p>
        </div>
      </nav>
    </div>
  );
}
