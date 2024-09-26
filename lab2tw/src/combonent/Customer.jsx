function Customer() {
  return (
    <div 
      className="relative py-16 flex flex-col justify-center items-center text-white" 
      style={{
        backgroundImage: "url('https://img.notionusercontent.com/s3/prod-files-secure%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fb065d811-70a9-454e-947e-699ec2801a37%2FScreen_Shot_2023-11-26_at_11.01.17_AM_cleanup.png/size/w=1420?exp=1727433093&sig=UdjB98PW4zJ-ibKSmDCjG4TsT4I6uhTT4j-Z43dvACs')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-lg mb-2">What our customers say</p>
      <h2 className="text-3xl font-semibold italic mb-6 text-center">
        "Share a real testimonial that hits some of your benefits (but isn't too sales-y)."
      </h2>
      <img 
        src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/1a1f4659-freshgoods-testimonial_1000000000000000000028.png" 
        alt="Customer Testimonial"
        className="rounded-full w-24 h-24 mb-4"
      />
      <h3 className="font-bold">REAL NAME</h3>
      <p>Location</p>
      <div className="flex items-center">
        <span className="text-yellow-400">★★★★★</span>
      </div>
    </div>
  )
}

export default Customer
