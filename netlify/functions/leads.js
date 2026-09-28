const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

exports.handler = async (event) => {
    if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders,
      body: "",
    };
  }
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
  ...corsHeaders,
  "Content-Type": "application/json",
},
      body: JSON.stringify({ success: false, message: 'Method not allowed' }),
    };
  }

  try {
    const { name, mobile, area, plan } = JSON.parse(event.body || '{}');

    if (!name || !mobile || !area || !plan) {
      return {
        statusCode: 400,
        headers: {
  ...corsHeaders,
  "Content-Type": "application/json",
},
        body: JSON.stringify({ success: false, message: 'All fields are required' }),
      };
    }

    const webhook = process.env.GOOGLE_SHEET_WEBHOOK;
    if (!webhook) {
      return {
        statusCode: 500,
        headers: {
  ...corsHeaders,
  "Content-Type": "application/json",
},
        body: JSON.stringify({ success: false, message: 'Lead service is not configured' }),
      };
    }

    const response = await fetch(webhook, {
      method: 'POST',
      headers: {
  ...corsHeaders,
  "Content-Type": "application/json",
},
      body: JSON.stringify({
        name: String(name).trim(),
        mobile: String(mobile).trim(),
        area: String(area).trim(),
        plan: String(plan).trim(),
      }),
    });

    const text = await response.text();
    let result;
    try { result = JSON.parse(text); } catch { result = { success: response.ok }; }

    if (!response.ok || result.success === false) {
      return {
        statusCode: 502,
        headers: {
  ...corsHeaders,
  "Content-Type": "application/json",
},
        body: JSON.stringify({ success: false, message: 'Google Sheet rejected the lead', googleStatus: response.status }),
      };
    }

    return {
      statusCode: 200,
      headers: {
  ...corsHeaders,
  "Content-Type": "application/json",
},
      body: JSON.stringify({ success: true, message: 'Lead saved successfully' }),
    };
  } catch (error) {
    console.error('Lead error:', error);
    return {
      statusCode: 500,
      headers: {
  ...corsHeaders,
  "Content-Type": "application/json",
},
      body: JSON.stringify({ success: false, message: 'Unable to save lead' }),
    };
  }
};
