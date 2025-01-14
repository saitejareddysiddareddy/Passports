import { AbiType, StateMutabilityType, AbiItem } from "web3-utils";
import {
  KOVAN_STAKING_ADDRESS,
  KOVAN_PASSPORT_FACTORY_ADDRESS,
  KOVAN_TEST_TOKEN_ADDRESS,
  ROPSTEN_STAKING_ADDRESS,
  ROPSTEN_PASSPORT_FACTORY_ADDRESS,
  ROPSTEN_TEST_TOKEN_ADDRESS,
} from "@cabindao/nft-passport-contracts/artifacts/addresses";

const KOVAN_NETWORK_ID = 0x2a;
const ROPSTEN_NETWORK_ID = 0x3;
const LOCALHOST_NETWORK_ID = 0x7a69;

export const networkNameById: {
  [id: number]: string;
} = {
  [LOCALHOST_NETWORK_ID]: "localhost",
  [KOVAN_NETWORK_ID]: "kovan",
  [ROPSTEN_NETWORK_ID]: "ropsten",
};

export const networkIdByName = Object.fromEntries(
  Object.entries(networkNameById).map(([id, name]) => [name, id])
);

export const contractAddressesByNetworkId: {
  [id: number]: { passportFactory: string; staking: string; token?: string };
} = {
  [LOCALHOST_NETWORK_ID]: {
    passportFactory:
      process.env.NEXT_PUBLIC_LOCAL_PASSPORT_FACTORY_ADDRESS || "",
    staking: process.env.NEXT_PUBLIC_LOCAL_STAKING_ADDRESS || "",
    token: process.env.NEXT_PUBLIC_LOCAL_TEST_TOKEN_ADDRESS || "",
  },
  [KOVAN_NETWORK_ID]: {
    passportFactory: KOVAN_PASSPORT_FACTORY_ADDRESS,
    staking: KOVAN_STAKING_ADDRESS,
    token: KOVAN_TEST_TOKEN_ADDRESS,
  },
  [ROPSTEN_NETWORK_ID]: {
    passportFactory: ROPSTEN_PASSPORT_FACTORY_ADDRESS,
    staking: ROPSTEN_STAKING_ADDRESS,
    token: ROPSTEN_TEST_TOKEN_ADDRESS,
  },
};

export const getAbiFromJson = (json: {
  abi: (Omit<AbiItem, "stateMutability" | "type"> & {
    stateMutability?: string;
    type?: string;
  })[];
}) =>
  json.abi.map((a) => ({
    ...a,
    stateMutability: a.stateMutability as StateMutabilityType,
    type: a.type as AbiType,
  }));

/*
 * Config needed to make a firebase DB connection.
 * TODO: use a Cabin account.
 */
export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_PROJECT_ID+".firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_PROJECT_ID+".appspot.com",
  messagingSenderId: process.env.FIREBASE_MSSG_SENDER,
  appId: process.env.FIREBASE_APP_ID,
};

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
typeof window === 'undefined'
  ? Buffer.from(str).toString('base64')
  : window.btoa(str);
