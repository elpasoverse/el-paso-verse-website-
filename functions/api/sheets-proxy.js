export async function onRequest(context) {
    const url = new URL(context.request.url);
    const action = url.searchParams.get('action');

    if (!action) {
        return new Response(JSON.stringify({ error: 'Missing action parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const webhookUrl = 'https://script.google.com/macros/s/AKfycbwqwiE6XOKwDOA0_gFA6HaztdaRH10Lr29KSZfW4_3WnmRFNjQ6AmDN1aRZPwFhYPja/exec';

    try {
        const response = await fetch(`${webhookUrl}?action=${encodeURIComponent(action)}`, {
            redirect: 'follow'
        });
        const data = await response.text();

        return new Response(data, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
