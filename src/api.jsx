const BASE_URL = 'http://127.0.0.1:8000/';

export default async function PostEmail(emaildata) {
    const fetchoptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emaildata)
    };

    try {
        const response = await fetch(BASE_URL, fetchoptions);
        
        // Überprüfe, ob die Antwort erfolgreich war
        if (!response.ok) {
            throw new Error(`Fehler: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);  // Überprüfe, was vom Backend kommt.
        return data;

    } catch (error) {
        // Fange alle Fehler ab und gebe sie aus
        console.error('Fehler beim Senden der E-Mail:', error);
        return { success: false, error: error.message };
    }
}