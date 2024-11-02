import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'srv474936.hstgr.cloud',
    port: 465,
    secure: true,
    auth: {
        // user: 'mail@designindianhomes.com',
        // pass: 'Loginamd@321',
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PWD,
    },
});

export async function GET(request) {

    return NextResponse.json({ stauts: 'working' })
}

export async function POST(request) {
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const number = formData.get('number')
    const qualification = formData.get('qualification')
    const pincode = formData.get('pincode')
    const address = formData.get('address')
    const requirements = formData.get('requirements')
    const interest = formData.get('interest')
    const file = formData.get('file')
    const agree = formData.get('agree')


    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            // from: 'official@designindianhomes.com', // sender address
            from: `"DesignIndianHomes" <${process.env.NODEMAILER_USER}>`, // sender address
            // to: "sk2061899@gmail.com", // list of receivers
            to: process.env.OWNER_MAIL, // list of receivers
            subject: "Contact Form Details :-", // Subject line
            text: "Hello world?", // plain text body
            // html: "<b>Hi Sahil,</b>", // html body
            html: `
            <body>
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <thead>
                        <tr style="background-color: #f2f2f2;">
                            <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Name</th>
                            <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${name ? name : '---'
                }</th >
                        </tr >
                    </thead >
            <tbody>
                <tr>
                    <td style="border: 1px solid #dddddd; padding: 8px;">E-mail</td>
                    <td style="border: 1px solid #dddddd; padding: 8px;">${email ? email : "---"}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #dddddd; padding: 8px;">Message</td>
                    <td style="border: 1px solid #dddddd; padding: 8px;">${message ? message : '---'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #dddddd; padding: 8px;">Contact</td>
                    <td style="border: 1px solid #dddddd; padding: 8px;">${number ? number : "---"}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #dddddd; padding: 8px;">Qualification</td>
                    <td style="border: 1px solid #dddddd; padding: 8px;">${qualification ? qualification : '---'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #dddddd; padding: 8px;">Address</td>
                    <td style="border: 1px solid #dddddd; padding: 8px;">${address ? address : ""} ${pincode ? pincode : ""}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #dddddd; padding: 8px;">Requirements</td>
                    <td style="border: 1px solid #dddddd; padding: 8px;">${requirements ? requirements : "---"}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #dddddd; padding: 8px;">Interested in</td>
                    <td style="border: 1px solid #dddddd; padding: 8px;">${interest ? interest : "---"}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #dddddd; padding: 8px;">File</td>
                    <td style="border: 1px solid #dddddd; padding: 8px;">${file ? file : '---'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #dddddd; padding: 8px;">Agree</td>
                    <td style="border: 1px solid #dddddd; padding: 8px;">${agree ? agree : "---"}</td>
                </tr>
            </tbody>
                </table >
            </body > `, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
        return info;
    }

    try {
        let res = (await main()).messageId
        console.log("info: ", res)
        return NextResponse.json({ name, email, message, number, id: res })

    } catch (error) {
        console.log(error)
    }

    // console.log("Data: ", name, email, message, number)
    return NextResponse.json({ name, email, message, number })
}