import axios from "axios";
import CryptoJS from "crypto-js";

const iRacingLogin = async () => {
  const hash = CryptoJS.SHA256(
    import.meta.env.VITE_IRACING_USERNAME +
      import.meta.env.VITE_IRACING_PASSWORD.toLowerCase(),
  );

  const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  const response = await axios.post(
    "https://members-ng.iracing.com/auth",
    {
      email: import.meta.env.VITE_IRACING_USERNAME,
      password: hashInBase64,
    },
    { headers: { "Content-Type": "application/json" } },
  );
  console.log(response.data);
  return response.data;
};

export { iRacingLogin };
