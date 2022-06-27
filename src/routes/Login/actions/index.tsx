import { createAsyncThunk } from "@reduxjs/toolkit"

const user = {
  username: "lekieuquinh01",
  password: "222222a!"
}

const loginVerify = createAsyncThunk(
  "login/verify",
  async (formdata: typeof user) => {
    const promise: Promise<string> = new Promise((resolve, reject) => {
      if(formdata.username === "lekieuquinh01" && formdata.password === "222222a!") {
        setTimeout(()=> {resolve("Success")}, 1000)
      } else {
        setTimeout(()=> {reject("Fail")}, 1000)
      }
    })
    return await promise
  }
)

export {loginVerify}