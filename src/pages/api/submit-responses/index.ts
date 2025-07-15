import { NextApiRequest, NextApiResponse } from 'next';

// API route handler for Pages Router
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Parse the request body (already parsed in Pages Router)
    const data = req.body;
    
    // Log the received data (in a real app, this would be stored in a database)
    console.log('Received patient data:', data);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return a success response
    return res.status(200).json({ 
      success: true, 
      message: 'Patient data received and stored successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error processing patient data:', error);
    
    // Return an error response
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to process patient data',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
