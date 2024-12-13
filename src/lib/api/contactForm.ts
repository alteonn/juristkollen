export const submitContactForm = async (data: any) => {
    try {
      const webhookUrl = import.meta.env.VITE_ZAPIER_WEBHOOK_URL;
      
      if (!webhookUrl) {
        throw new Error('Configuration error: Missing webhook URL');
      }
  
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
  
      return { success: true };
    } catch (error) {
      console.error('Error submitting form:', error);
      return { success: false, error };
    }
  };