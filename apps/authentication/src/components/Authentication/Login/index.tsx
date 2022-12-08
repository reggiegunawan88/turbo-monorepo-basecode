import React from 'react'

import { ArrowDropdownIcon, VisibilityIcon, VisibilityOffIcon } from 'icon/material-icon'

import roles from '@/constant/role'
import useLogin from '@/hooks/useLogin'

const Login = () => {
  const { email, password, role, showPassword, handleInput, toggleShowPassword, submitLogin } = useLogin()
  return (
    <div className="flex flex-col bg-white rounded-lg px-20 py-14 max-w-sm" style={{ width: '480px' }}>
      <div className="flex flex-col text-main-darker text-center">
        <span className="font-semibold">Insurance Management AlteaCare</span>
        <span className="text-sm">Anda masuk sebagai {role}</span>
      </div>
      <div className="flex flex-col gap-y-10 mt-6">
        {/* choose role */}
        <div className="relative">
          <select className="dropdown-input-style" name="ROLE" onChange={(e: any) => handleInput(e)} value={role}>
            <option disabled value="">
              Pilih Role
            </option>
            {roles?.map((item: any) => (
              <option key={item?.code} value={item?.code}>
                {item?.name}
              </option>
            ))}
          </select>
          <ArrowDropdownIcon className="absolute top-3 right-2" fontSize="medium" />
        </div>
        {/* email */}
        <input
          type="text"
          className="input-style"
          placeholder="Masukkan email"
          name="EMAIL"
          value={email}
          onChange={(e: any) => handleInput(e)}
        />
        {/* password */}
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className="input-style"
            placeholder="Masukkan password"
            name="PASSWORD"
            value={password}
            onChange={(e: any) => handleInput(e)}
          />
          <button onClick={toggleShowPassword}>
            {showPassword ? (
              <VisibilityIcon fontSize="medium" className="absolute right-2 top-2 text-dark-3" />
            ) : (
              <VisibilityOffIcon fontSize="medium" className="absolute right-2 top-2 text-dark-3" />
            )}
          </button>
        </div>
      </div>

      {/* CTA btn */}
      <div className="flex flex-col gap-y-6 mt-6">
        {/* <span className="text-sm text-info-1 self-end cursor-pointer">
          Lupa password ?
        </span> */}
        <button className={role && email && password ? 'btn-primary' : 'btn-disabled'} onClick={submitLogin}>
          MASUK
        </button>
      </div>
    </div>
  )
}

export default Login
