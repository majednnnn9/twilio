const twilio = require("twilio")
const express = require("express")
const app = express()


async function sendOTP() {
    const client = new twilio("AC68a1f31ed98456723b0165ec8550955c", "8d35f31c5c918e34f48365c1e2e29062");
    try {
        const message = await client.messages.create({
            body: "this is SMS",
            from: "+19786361613",
            to: "+218926817972"
        })
        console.log(message.sid + "sent message")
    } catch (e) {

        console.error(e ,"Message Not Sent")
    }
}
sendOTP()

app.listen(8080, () => console.log("Server Is ON") )