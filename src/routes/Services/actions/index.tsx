import { createAsyncThunk } from "@reduxjs/toolkit"
import serviceReducer, { serviceType } from "../reducer/serviceReducer"

const getService = createAsyncThunk("service/getAll", async () => {
  const promise:Promise<Array<serviceType>> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve((serviceReducer.getInitialState().data)),1000)
  })
  return await promise
})
const updateService = createAsyncThunk("device/update", async (formdata: serviceType) => {
  const promise:Promise<serviceType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})
const addService = createAsyncThunk("device/add", async (formdata: any) => {
  const promise:Promise<serviceType> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(formdata),1000)
  })
  return await promise
})

export {getService, updateService,addService}