import test from "@playwright/test";
import dotenv from "dotenv";

// load .env file
dotenv.config({path:'TestData/.env.QA'})

//dotenv.config({path:'TestData/.env.${process.env.environment}'})


test("Reading Data From DotEnv" , async({page})=>{

    //process.env

    const URL = process.env.URL as string;

    const emailID = process.env.emailID as string;

    const Password = process.env.Password as string;

    console.log(URL)

    await page.goto(URL)
    await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill(emailID)
    await page.getByRole('textbox', { name: 'Password' }).fill(Password)

    await page.waitForTimeout(3000)
})