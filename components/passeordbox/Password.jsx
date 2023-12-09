import { React, useState } from 'react'

const Password = () => {
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    return (
        <div>
         
            <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" border-b border-gray-300 px-3 py-2   focus:outline-none focus:border-gray-300 "
                placeholder="Enter your password"
                required
            />
          
                
        </div>
        
    );
    }


export default Password;