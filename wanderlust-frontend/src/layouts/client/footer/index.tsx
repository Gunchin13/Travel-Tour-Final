import credicard from "../../../assets/images/creditcard-logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#202020] text-white py-30 flex ">
    <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <h3 className="text-xl font-semibold leading-10">Contact Info</h3>
                <ul className="leading-10">
                    <li>London: +6-345-3456-233</li>
                    <li>Hawaii: +1-345-33454-4</li>
                    <li>Greece: +34-8757-4556</li>
                    <li>Email: <a href="mailto:Ask@traveltourtheme.com">Ask@traveltourtheme.com</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold">About Us</h3>
                <ul className="leading-10 border-b-1 border-b-gray-700">
                    <li className="border-b-1 border-b-gray-700"><a href="#">Our Story</a></li>
                    <li className="border-b-1 border-b-gray-700"><a href="#">Travel Blog & Tips</a></li>
                    <li className="border-b-1 border-b-gray-700"><a href="#">Working With Us</a></li>
                    <li className="border-b-1 border-b-gray-700"><a href="#">Be Our Partner</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold ">Support</h3>
                <ul className="leading-10 ">
                    <li className="border-b-1 border-b-gray-700"><a href="#">Customer Support</a></li>
                    <li className="border-b-1 border-b-gray-700"><a href="#">Privacy & Policy</a></li>
                    <li className="border-b-1 border-b-gray-700"><a href="#">Contact Channels</a></li>
                </ul>
            </div>
            <div className="leading-10">
                <h3 className="text-xl font-semibold">Pay Safely With Us</h3>
                <p>The payment is encrypted and transmitted securely with an SSL protocol.</p>
                <div className="flex space-x-4 mt-4">
                  <img src={credicard} alt="" />
                    
                </div>
            </div>
        </div>
        <div className="mt-10 text-center text-sm">
            <p>&copy; 2025 Travel Tour. All Rights Reserved.</p>
        </div>
    </div>
</footer>






    
  )
}

export default Footer