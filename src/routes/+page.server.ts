export const prerender = false;

import { SPREADSHEET_ID, GOOGLE_CLOUD_API_KEY } from '$env/static/private'

let g_spreadsheet_data: Promise<any> | null = null;

function get_sheet_list(sheetname: any) {
  if (!g_spreadsheet_data) {
      g_spreadsheet_data = fetch_spreadsheet_data();
  }
  return g_spreadsheet_data.then((result: any) => {
      const sheet_list: any[] = [];
      const spreadsheet: any = result;
      spreadsheet.sheets.forEach(function (sheet: { properties: { title: any; }; data: any[]; }) {
          if (sheet.properties.title === sheetname) {
              sheet.data.forEach(function (gridData: { rowData: any[]; }) {
                  let headers: (string | number)[] = [];
                  let header_index_map: { [x: string]: any; };
                  gridData.rowData.forEach(function (row: { values: any[]; }, index: number) {
                      try {
                          const row_cells = row.values.map((e: { formattedValue: any; }) => e.formattedValue ? e.formattedValue : "")
                          if (index === 0) { // header in spreadsheet
                              headers = row_cells;
                              header_index_map = headers.reduce((d: { [x: string]: any; }, e: string | number) => { d[e] = headers.indexOf(e); return d; }, {});
                              return;
                          }
                          const sheet_object = headers.reduce((d: { [x: string]: any; }, e: string | number) => { d[e] = row_cells[header_index_map[e]] || ""; return d; }, {});
                          /*if (!sheet_object["id"]) {
                              return;
                          }*/
                          sheet_list.push(sheet_object);
                      } catch (err) {
                          console.error(err);
                      }
                  });
              });
          }
      });
      return sheet_list;
  });
}

function fetch_spreadsheet_data() {
  return fetch("https://sheets.googleapis.com/v4/spreadsheets/" + SPREADSHEET_ID + "?key=" + GOOGLE_CLOUD_API_KEY + "&includeGridData=true")
      .then(response => response.json());
}

export async function load({ params }: any) {
    return {
      calendar_events: get_sheet_list("calendar"),
    };
  }
