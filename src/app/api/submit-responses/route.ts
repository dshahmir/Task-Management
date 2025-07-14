import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Log the received data (in a real app, this would be stored in a database)
    console.log('Received patient data:', data);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return a success response
    return NextResponse.json({ 
      success: true, 
      message: 'Patient data received and stored successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error processing patient data:', error);
    
    // Return an error response
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process patient data',
        error: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}
