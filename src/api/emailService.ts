interface EmailData {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
    tourName?: string;
}

// Use environment variable for API base URL, fallback to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://themiceconnection.com';

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message?: string }> => {
    try {
        console.log('Sending email request to:', `${API_BASE_URL}/send-email`);
        console.log('Request data:', data);
        
        const response = await fetch(`${API_BASE_URL}/api/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', [...response.headers.entries()]);
        
        // Check if response is JSON before parsing
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const result = await response.json();
            console.log('Response JSON:', result);
            return result;
        } else {
            // If not JSON, read response as text to see what we got
            const responseText = await response.text();
            console.error('Non-JSON response received:', responseText);
            
            // Check if the response contains "It works!" which indicates a server misconfiguration
            if (responseText.includes('It works!')) {
                console.error('Server returned root endpoint instead of API endpoint - possible routing issue');
            }
            
            return { 
                success: false, 
                message: responseText.includes('It works!') 
                    ? 'Server configuration error - please contact administrator' 
                    : (response.ok ? 'Request failed with non-JSON response' : 'Failed to send email.') 
            };
        }
    } catch (error) {
        console.error('Error sending email:', error);
        if (error instanceof SyntaxError && error.message.includes('JSON')) {
            console.error('JSON parsing error - server may have returned non-JSON response');
        }
        return { success: false, message: 'Failed to send email.' };
    }
};
