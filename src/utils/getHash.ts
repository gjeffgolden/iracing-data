import CryptoJS from "crypto-js";

export default function getHash() {
  return CryptoJS.enc.Base64.stringify(
    CryptoJS.SHA256(
      import.meta.env.VITE_IRACING_USERNAME +
        import.meta.env.VITE_IRACING_PASSWORD.toLowerCase(),
    ),
  );
}
