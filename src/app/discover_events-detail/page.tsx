import Image from "next/image";

export default function EventDetails() {
  return (
    <>
        {/* hero section  */}
        <section className="lg:flex lg:text-left text-center p-20 justify-center align-middle gap-5 bg-black">
            {/* event flyer  */}
            <Image src={"/flyer.png"} width={250} height={250} alt="event image"/>
            <div className="flex flex-col justify-center text-white">
                <div>
                    <h1 className="font-bold mb-2">2025 TIPS FOR MARKETING YOUR FOOD BUSINESS ONLINE</h1>
                    <p className="bg-white font-bold text-sm inline-block px-2 py-1 rounded-md text-black mb-2">UPCOMING</p>
                </div>
                
                <div>
                    <div>
                        <p>icon</p>
                        <p>Sat, Mar 15. 11AM - 1PM</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            {/* Ticket Information  */}
            <div>
                <h1>Ticket Information</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Quantity</th>
                        </tr>   
                    </thead>
                    <tbody>
                        <tr>    
                            <td>General Admission</td>
                            <td>$20.00</td>
                            
                        </tr>
                        <tr>    
                            <td>VIP Admission</td>
                            <td>$50.00</td>
                            
                        </tr>
                    </tbody>        


                </table>
            </div>

            {/* Event Details  */}
            <div>
                <h1>Event Details</h1>
                <p>
                    Join top content marketing experts and leading food influencers for an immersive workshop designed to help you create compelling content that drives engagement, builds community, and increases sales.  
                    What You’ll Learn:
                    ✅ The secrets to crafting viral food content  ✅ How to tell irresistible brand stories that sell  ✅ Strategies to collaborate with influencers and grow your audience  ✅ Practical content creation tips for social media success  
                    🔹 Who Should Attend? Food business owners, marketers, influencers, and creatives eager to transform their content strategy and build a loyal customer base.  
                    Don’t miss this opportunity to gain insider knowledge, hands-on experience, and industry connections that will take your food brand to the next level!  
                    🚀 Reserve your spot today!
                </p>
            </div>
        </section>
    </>
  );
}