import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const pathName = request.nextUrl.pathname;
  console.log(pathName);

  if (!pathName.startsWith("/api/feedback")) {
    return NextResponse.json({
      status: 400,
      message: "no route found", // Corrected string literal
    });
  }

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: "/api/:path*",
};
