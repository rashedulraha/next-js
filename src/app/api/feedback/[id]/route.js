import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

const feedbackCollection = connect("feedbacks");

export async function GET(request, { params }) {
  const { id } = await params;

  if (id.length != 24) {
    return Response.json({
      status: 400,
      message: "valid id required",
    });
  }

  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.find(query).toArray();

  return Response.json(result);
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  if (id.length != 24) {
    return Response.json({
      status: 400,
      message: "valid id required",
    });
  }

  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.deleteOne(query);

  return Response.json(result);
}
