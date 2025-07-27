import { useState, useCallback, useEffect } from "react";

function PasswordGen(params) {
  const [number, setNumber] = useState("6");
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const setpass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) str += "1234567890";
    if (char) str += "!~@#$%^&*()_{}|?/;']";

    for (let index = 1; index <= number; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [number, num, char]);

  useEffect(() => {
    setpass();
  }, [number, num, char]);

  return (
    <div className="bg-slate-700">
      <h1 className="text-white uppercase text-center p-2">
        password genrator
      </h1>
      <div className="p-4 flex align-middle justify-center">
        <input
          type="text"
          value={password}
          placeholder="password"
          readOnly
          className="w-80 p-2 rounded-lg"
        />
      </div>
      <div className="flex align-middle justify-center gap-2 text-center uppercase text-white p-2">
        <input
          type="range"
          value={number}
          min={0}
          max={100}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <label htmlFor="">length: {number}</label>

        <input
          type="checkbox"
          id="check"
          onChange={() => {
            setNum((prev) => !prev);
          }}
        />
        <label htmlFor="check">numbers</label>

        <input
          type="checkbox"
          id="checkk"
          onChange={() => {
            setChar((prev) => !prev);
          }}
        />
        <label htmlFor="checkk">charactor</label>
      </div>
    </div>
  );
}
export default PasswordGen;
