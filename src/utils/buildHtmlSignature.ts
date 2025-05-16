import { logoAlt, logoMain } from '../utils/images';

interface FormData {
    fullname: string;
    job: string;
    building: string | undefined;
    address: string | undefined;
    phoneNumber: string | undefined;
    email: string;
    useAlt: boolean;
}

const buildHtmlSignature = (formData: FormData) => {
    const data = {
        fullname: formData.fullname.trim(),
        job: formData.job.trim(),
        building: formData.building?.trim(),
        address: formData.address?.trim(),
        phoneNumber: formData.phoneNumber?.trim(),
        email: formData.email.trim(),
        imgSrc: formData.useAlt ? logoAlt : logoMain,
        imgWidth: formData.useAlt ? 300 : 118,
    };

    const row = (label: string = '', value: string = '') =>
        value
            ? `<tr>
             <td style="padding:0 0 8px;font:11.8px/15.1px Arial,monospace;color:#0B3049;">
               <span>${label}</span>&nbsp;<span>| ${value}</span>
             </td>
           </tr>`
            : '';

    const telRow = data.phoneNumber
        ? `<tr style="cursor:pointer;">
             <td style="padding:0;font:11.8px/15.1px Arial,monospace;color:#0B3049;">
               <a href="tel:${data.phoneNumber}" style="color:#0B3049;text-decoration:none;">${data.phoneNumber}</a>
             </td>
           </tr>`
        : '';

    const emailRow = `<tr style="cursor:pointer;">
                          <td style="padding:0;font:11.8px/15.1px Arial,monospace;color:#0B3049;">
                            <a href="mailto:${data.email}" style="color:#0B3049;text-decoration:none;">${data.email}</a>
                          </td>
                        </tr>`;

    const html = `
<table cellpadding="0" width="500" style="border-collapse:collapse;font-size:11.8px;">
  <tr><td style="padding:0;">
    <table cellpadding="0" style="border-collapse:collapse;">
      <tr>
        <td valign="top" style="padding:0 12px 0 0;">
          <img src="${data.imgSrc}" width="${
        data.imgWidth
    }" style="display:block;min-width:${data.imgWidth}px;"
               alt=' "Logo DSI"'/>
        </td>
        <td style="border-left:1px solid #0B3049;padding:0 0 0 12px;color:#0B3049;font:11.8px/15.1px Arial,monospace;" valign="top">
          <table cellpadding="0" style="border-collapse:collapse;">
            <tr>
              <td style="padding:0 0 8px;font:15.4px/19.6px Arial,monospace;color:#0B3049;">
                <span style="font-weight:600;">${data.fullname}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:0 0 8px;font:11.8px/15.1px Arial,monospace;color:#0B3049;">
                <span>Fonction</span>&nbsp;<span>| ${data.job}</span>
              </td>
            </tr>
            ${row('Bâtiment', data.building)}
            ${row('Adresse', data.address)}
            ${telRow}
            ${emailRow}
          </table>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
      `.trim();

    return html;
};

export { buildHtmlSignature };
