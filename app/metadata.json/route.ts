import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    name: "GASIO Token List",
    logoURI: "https://gasiotoken.vercel.app/gasio.jpg",
    keywords: ["gas", "stablecoin", "crypto", "trc20", "gasio"],
    timestamp: "2025-07-11T00:00:00+00:00",
    version: { major: 1, minor: 0, patch: 0 },
    tokens: [
      {
        chainId: 728126428,
        address: "TE3JLTAnFcMoQv84sxsJmZ4oUBjmZZex7h",
        symbol: "GASIO",
        name: "Gasio",
        decimals: 6,
        logoURI: "https://gasiotoken.vercel.app/gasio.jpg",
        tags: ["utility", "stablecoin", "trc20"],
        extensions: {
          homepage: "https://gasiotoken.vercel.app/",
          website: "https://gasiotoken.vercel.app/",
          explorer: "https://tronscan.org/#/token20/TE3JLTAnFcMoQv84sxsJmZ4oUBjmZZex7h",
          marketcap: "https://coinmarketcap.com/currencies/gasio/"
        }
      }
    ]
  });
}
