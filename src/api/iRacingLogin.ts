import axios from "axios";
import CryptoJS from "crypto-js";

const iRacingLogin = async () => {
  const email = import.meta.env.VITE_IRACING_USERNAME;
  const pw = import.meta.env.VITE_IRACING_PASSWORD;

  if (!email || !pw) {
    throw new Error("Please provide a username and password");
  }

  // Formatting password as per iRacing's requirements
  // https://forums.iracing.com/discussion/15068/general-availability-of-data-api/p1
  const hash = CryptoJS.SHA256(pw + email.toLowerCase());
  const password = CryptoJS.enc.Base64.stringify(hash);

  const response = await axios.post(
    "/api/auth",
    {
      email,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  console.log(response.data);
  return response.data;
};

export { iRacingLogin };
