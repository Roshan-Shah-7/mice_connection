interface EmailData {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
    tourName?: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message?: string }> => {
    try {
        const response = await fetch('http://localhost:3001/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            return await response.json();
        } else {
            return { success: false, message: 'Failed to send email.' };
        }
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Failed to send email.' };
    }
};
