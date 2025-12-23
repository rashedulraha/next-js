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

//  Update data
export async function PATCH(request, { params }) {
  const { id } = await params;

  const { message } = await request;

  if (id.length != 24) {
    return Response.json({
      status: 400,
      message: "valid id required",
    });
  }

  if (!message) {
    return Response.json("message is required");
  }
  const query = { _id: new ObjectId(id) };

  const updateDoc = {
    $set: {
      message,
    },
  };

  const result = await feedbackCollection.updateOne(query, updateDoc);

  return Response.json(result);
}
