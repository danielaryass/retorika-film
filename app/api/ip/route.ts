import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const ip = request.headers.get("x-forwarded-for");
  const ip2 = request.ip;

  return NextResponse.json({ daniel: ip, arya: ip2 });
}
