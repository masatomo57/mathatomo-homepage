import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sourceAccountId, targetAccountId } = body;

    if (!sourceAccountId || !targetAccountId) {
      return NextResponse.json(
        { error: "Missing sourceAccountId or targetAccountId" },
        { status: 400 }
      );
    }

    // Log the received account IDs for debugging
    console.log(`Received sourceAccountId: ${sourceAccountId}`);
    console.log(`Received targetAccountId: ${targetAccountId}`);

    // Simulate a successful operation
    return NextResponse.json(
      { message: "Followings copy process initiated successfully (mock)" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
