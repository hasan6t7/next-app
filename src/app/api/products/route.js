import clientPromise from "@/lib/mongodb";


export async function GET() {
  const client = await clientPromise;
  const db = client.db("next-app");
  const products = await db.collection("products").find({}).toArray();
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
  const body = await req.json();
  const client = await clientPromise;
  const db = client.db("next-app");
  const result = await db.collection("products").insertOne(body);
  return new Response(JSON.stringify(result), { status: 201 });
}