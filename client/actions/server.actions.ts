"use server";
import { userCredential, userRegisterCredential } from "@/types";
import axios from "axios";

export const varifyUserExist = async (credentials: userCredential) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_BASE}/auth/user/login`,
      credentials
    );
    console.log(response.data);
    return response.data.data;
  } catch (e) {
    console.log(e);
    return { error: true };
  }
};
export const registerUser = async (credentials: userRegisterCredential) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_BASE}/auth/user/create`,
      credentials
    );
    console.log(response.data);
    return { error: response.data.error, message: response.data.message };
  } catch (e) {
    console.log(e);
    return { error: true };
  }
};
export const varifyUserExistence = async (email: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_BASE}/auth/user/varify/${email}`
    );
    console.log(response.data);
    return { error: response.data.error, message: response.data.message };
  } catch (e) {
    console.log(e);
    return { error: true };
  }
};
