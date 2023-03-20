import { isExpired, decodeToken } from "react-jwt";

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    const myDecodedToken = decodeToken(jwt);
    const isMyTokenExpired = isExpired(jwt);
    if (isMyTokenExpired) localStorage.removeItem("token");
    return !isMyTokenExpired ? myDecodedToken.name : null;
  } catch (ex) {
    return null;
  }
}
