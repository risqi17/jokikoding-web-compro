import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Initialize Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone, projectType, deadline, isFlexible, details } = body;

    // Format current timestamp for submission date
    // const submissionDate = new Date().toISOString().split('T')[0];

    // Prepare the data row
    const values = [
      [
        phone,
        projectType,
        deadline || 'No deadline',
        isFlexible ? 'Yes' : 'No',
        details
      ],
    ];

    // Append the data to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:F', // Adjust the range according to your sheet
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      { error: 'Failed to submit to Google Sheets' },
      { status: 500 }
    );
  }
}
