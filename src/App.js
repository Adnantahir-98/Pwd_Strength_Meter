import { useState } from "react";
import PasswordStrengthMeter from "./components/PwdStrengthMeter";


function App() {

  const [password, setPassword] = useState('')
  
  return (
    <div className="container">
      <div className="col-md-6 mx-auto text-right">
        <h3 className="text-center mt-5 mb-3">Password Strength Meter</h3>
        <p className="mb-4 text-center">Using <code><q>zxcvbn</q></code> Library</p>
        <div className="form-group mb-1">
          <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </div>
        <PasswordStrengthMeter password={password} />
      </div>
    </div>
  );
}

export default App;
