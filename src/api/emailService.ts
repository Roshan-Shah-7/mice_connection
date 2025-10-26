interface EmailData {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
    tourName?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Provide clear feedback during development.
if (import.meta.env.DEV) {
    if (!API_BASE_URL) {
        console.error('VITE_API_BASE_URL is not defined in your .env file. It should be set to the URL of your backend server (e.g., http://localhost:3001).');
    } else {
        console.log(`API requests are being sent to: ${API_BASE_URL}`);
    }
}


export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message?: string }> => {
    if (!API_BASE_URL) {
        const errorMessage = 'The server endpoint is not configured. Please contact the administrator.';
        console.error(errorMessage);
        return { success: false, message: errorMessage };
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Handle non-JSON responses gracefully
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            const responseText = await response.text();
            console.error('Received non-JSON response from server:', responseText);
            return { success: false, message: 'An unexpected response was received from the server.' };
        }
        
        const result = await response.json();

        if (!response.ok) {
            console.error(`API error: ${response.status} -`, result.message || 'No error message provided.');
            return { success: false, message: result.message || 'An unknown error occurred on the server.' };
        }

        return result;

    } catch (error) {
        console.error('A network error occurred while trying to send the email. This is often due to a CORS issue or the backend server not running.', error);
        return { success: false, message: 'A network error occurred. Please ensure the server is running and accessible.' };
    }
};
