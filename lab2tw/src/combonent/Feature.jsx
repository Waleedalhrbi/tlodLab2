function Feature() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-8 bg-[#f5f5f5]">
      <div className="text-center w-full md:w-1/3 mx-auto">
        <img 
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6765ae81-freshgoods-feature1_10go0b20go09e00000001o.jpg" 
          alt="Feature 1" 
          className="w-full"
        />
        <h3 className="text-xl font-semibold mt-4">Feature 1</h3>
        <p className="text-gray-600 mt-2">Talk about some of the details of your offer with a focus on the value people get back.</p>
      </div>
      <div className="text-center w-full md:w-1/3 mx-auto">
        <img 
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/bf92a2f6-freshgoods-feature2_10go0ku0go09e00009e01o.jpg" 
          alt="Feature 2" 
          className="w-full"
        />
        <h3 className="text-xl font-semibold mt-4">Feature 2</h3>
        <p className="text-gray-600 mt-2">Is there a pain point that your product or service resolves? Tell visitors about it here.</p>
      </div>
      <div className="text-center w-full md:w-1/3 mx-auto">
        <img 
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/f55dfcfa-freshgoods-feature3_10go0b40go09e00000601o.jpeg" 
          alt="Feature 3" 
          className="w-full"
        />
        <h3 className="text-xl font-semibold mt-4">Feature 3</h3>
        <p className="text-gray-600 mt-2">Alternatively, you could use this section to address some frequently asked questions.</p>
      </div>
    </div>
  )
}

export default Feature
