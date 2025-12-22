import { feedBack } from "../route";

export async function GET(request) {
  return Response.json(feedBack);
}

export async function POST(request) {
  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "please send a message",
    });
  }

  const newFeedback = { message, id: feedBack.length + 1 };
  feedBack.push(newFeedback);

  return Response.json({
    acKnowledge: true,
    insertedId: newFeedback.id,
  });
}
