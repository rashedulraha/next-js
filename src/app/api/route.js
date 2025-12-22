export const feedBack = [
  { id: 1, message: "good food" },
  { id: 1, message: "improve" },
  { id: 1, message: "Oke" },
];

export async function GET(request) {
  return Response.json({ status: 200, message: "api created" });
}
