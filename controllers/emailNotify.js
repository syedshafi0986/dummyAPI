import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user : process.env.EMAIL_USER,
        pass : process.env.EMAIL_PASS
    }

})

export const sednNotification = async (subject ,text ,recipient)=>{

    try{
    const options= {
        from: process.env.EMAIL_USER,
        to:recipient,
        subject,
        text
    }

    await transport.sendMail(options)
}
catch(e){
    console.log(e)
    res.status(500).json({"msg":"unable to send "})
}

}
