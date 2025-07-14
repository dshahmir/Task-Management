import { SubmitResponsesRequest, ApiResponse } from '../types/api';

/**
 * Submit patient responses to the API
 * @param data The patient data and responses to submit
 * @returns Promise with the API response
 */
export async function submitResponses(data: SubmitResponsesRequest): Promise<ApiResponse> {
  try {
    const response = await fetch('/api/submit-responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting responses:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to submit responses',
    };
  }
}
