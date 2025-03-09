
/**
 * Generate audio from text using the SpeechSync API
 */
export async function generateSpeech(text: string, voiceId: string): Promise<string | Blob> {
  const apiUrl = 'https://speechma.com/com.api/tts-api.php';
  const data = { text, voice: voiceId };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const contentType = response.headers.get("content-type");
    
    if (contentType && contentType.includes("application/json")) {
      const jsonData = await response.json();
      if (jsonData.audio_url) {
        return jsonData.audio_url;
      }
      throw new Error('No audio URL in response');
    } 
    
    if (contentType && contentType.includes("audio/mpeg")) {
      return await response.blob();
    }
    
    const errorText = await response.text();
    throw new Error(`Unexpected response format: ${errorText}`);
  } catch (error) {
    console.error('Error generating speech:', error);
    throw error;
  }
}
