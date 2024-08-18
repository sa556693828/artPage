import { sepolia, polygonAmoy } from "wagmi/chains";
export const TOKEN_ETH_ADDRESS = "0x0d2444EBEd072E70EdDeC0C74Ba5296C1523E109";
export const TOKEN_MATIC_ADDRESS = "0x9E35A4c1894697EB93BC781c0C5581c4E97b82A2";

export const token_address = (id: number): string => {
  const address: { [id: number]: string } = {
    11155111: TOKEN_ETH_ADDRESS,
    80002: TOKEN_MATIC_ADDRESS,
  };
  return id ? address[id] : "";
};

export const etherscan_address = (id: number, blockHash: string): string => {
  const address: { [_id: number]: string } = {
    11155111: `${sepolia.blockExplorers.default.url}/tx/${blockHash}`,
    80002: `${polygonAmoy.blockExplorers.default.url}/tx/${blockHash}`,
  };
  return address[id];
};
export const token_name = (id: number): string => {
  const name: { [_id: number]: string } = {
    11155111: "MV",
    80002: "MV",
  };
  return name[id];
};
