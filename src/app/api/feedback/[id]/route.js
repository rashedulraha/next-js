import { feedBack } from "../../route";

export async function GET(request, { params }) {
  const { id } = await params;

  const singleFeedback = feedBack.find((fb) => fb.id == id) || {};
  return Response.json({ singleFeedback });
}
