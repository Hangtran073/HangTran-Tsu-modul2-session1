const sendMail = (name, companyName) => {
    console.log(`
        Dear ${name},
        Thank you for purchasing our product. 
        We hope you enjoy it.
        Best regards,
        ${companyName}`)

}
sendMail("Hằng", "Hotel");