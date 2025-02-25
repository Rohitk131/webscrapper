import axios from "axios";

export async function scrapeAmazonProduct(url: string) {
    if(!url) return; 

    //curl -i --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_432eb909-zone-web_unlocker1:9b3hbs3at6io -k "https://geo.brdtest.com/welcome.txt"
    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 22225; 
    const session_id = (1000000 * Math.random()) | 0; 
    const options = {
        auth:{
            username: `${username}-session-${session_id}`, 
            password, 
            
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false, 

    }
    try{
        const response = await axios.get(url, options);
        console.log(response.data)
    }
    catch(error:any){
        throw new Error(`Failed to scrape product: ${error.message}`)
    }

     
    
}