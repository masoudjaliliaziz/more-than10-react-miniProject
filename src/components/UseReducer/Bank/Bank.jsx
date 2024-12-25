import React, { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: true,
};
const INITIAL_BALANCE = 500;

function Bank() {
  function reducer(state, action) {
    switch (action.type) {
      case "active":
        return {
          ...state,
          isActive: false,
          balance: state.balance + INITIAL_BALANCE,
        };
      case "add":
        return { ...state, balance: state.balance + action.payload };
      case "sub":
        return { ...state, balance: state.balance - action.payload };
      case "loan":
        return {
          ...state,
          loan: state.loan + action.payload,
          balance: state.balance + action.payload,
        };
      case "payLoan":
        return {
          ...state,
          balance: state.balance > state.loan ? state.balance - state.loan : 0,
          loan:
            state.balance < state.loan
              ? Math.abs(state.balance - state.loan)
              : 0,
        };
      case "deActive":
        return initialState;
      default:
        state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { balance, loan, isActive } = state;
  return (
    <div className="App mt-10 flex flex-col justify-center items-center gap-4">
      <div className="p-3 w-36 bg-indigo-600 rounded-lg flex flex-col justify-between items-center text-white font-bold">
        <p>Balance: {balance}</p>
        <p>Loan: {loan}</p>
      </div>

      <p>
        <button
          className="bg-green-500 p-3 w-36 text-white rounded-lg font-bold hover:bg-green-700"
          onClick={() => {
            dispatch({ type: "active" });
          }}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          className={` p-3 w-36 text-white rounded-lg font-bold ${
            isActive ? "bg-slate-500 " : " bg-blue-500 hover:bg-blue-700"
          }`}
          onClick={(e) => {
            dispatch({ type: "add", payload: Number(e.target.value) });
          }}
          disabled={isActive}
          value={150}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          className={` p-3 w-36 text-white rounded-lg font-bold ${
            isActive ? "bg-slate-500 " : " bg-blue-500 hover:bg-blue-700"
          }`}
          onClick={(e) => {
            dispatch({ type: "sub", payload: Number(e.target.value) });
          }}
          disabled={isActive}
          value={50}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          className={` p-3 w-36 text-white rounded-lg font-bold ${
            isActive ? "bg-slate-500 " : " bg-blue-500 hover:bg-blue-700"
          }`}
          onClick={(e) => {
            dispatch({ type: "loan", payload: Number(e.target.value) });
          }}
          disabled={isActive}
          value={5000}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          className={` p-3 w-36 text-white rounded-lg font-bold ${
            isActive ? "bg-slate-500 " : " bg-blue-500 hover:bg-blue-700"
          }`}
          onClick={() => {
            dispatch({ type: "payLoan" });
          }}
          disabled={isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          className="bg-red-500 p-3 w-36 text-white rounded-lg font-bold hover:bg-red-700"
          onClick={() => {
            dispatch({ type: "deActive" });
          }}
          disabled={isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}

export default Bank;
