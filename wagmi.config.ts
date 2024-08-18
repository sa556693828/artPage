import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { Abi, erc20Abi } from "viem";

import Token from "@/components/abi/token.json";

export default defineConfig({
  out: "generated.ts",
  contracts: [
    {
      abi: Token.abi as Abi,
      name: "Token",
    },
    {
      abi: erc20Abi,
      name: "Erc20",
    },
  ],
  plugins: [react()],
});
