const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connect = (collection) => {
  const dataBase = process.env.DB_NAME;
  return client.db(dataBase).collection(collection);
};
