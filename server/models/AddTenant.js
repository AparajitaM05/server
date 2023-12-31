import mongoose from "mongoose";
const { Schema } = mongoose;
// import { Date } from "mongoose";
var datetime = new Date();
//schema mongoose
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var newdate = year + "/" + month + "/" + day;

const AddTenant = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  tenant_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact_number: {
    type: String,
    required: true,
  },
  
  
  isOnBoard:{
    type: String,
    required: true,
  },

  createdDate: {
    type: String,
    required: true,
    default: () => newdate,
  },
 
});



const AddTenantExport  = mongoose.model("AddTenantExport", AddTenant);
export default AddTenantExport;

