import React from 'react'

function Inform() {
  return (
    <div 
      className="relative bg-no-repeat bg-bottom bg-cover p-8" 
      style={{ backgroundImage: `url('https://img.notionusercontent.com/s3/prod-files-secure%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F1bf45807-806c-4ab9-a756-d7ff6c3f56f6%2FScreen_Shot_2023-11-26_at_11.03.28_AM_cleanup.png/size/w=1420?exp=1727433094&sig=pH2q9NiEWCsz4tFsz-v_2shL86mhzrtWOQpGtXkwDgw')` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2">
          <img 
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/ef9d9b9f-freshgoods-about_100000000000000000001o.jpg" 
            alt="Business Owner" 
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:ml-8">
          <h2 className="text-3xl font-semibold text-gray-800">Some more information about your business</h2>
          <p className="text-gray-600 mt-4">
            Share a little about yourself as a business owner, or maybe describe what makes your product or service unique.
            Give visitors one more reason to care about your offer and want to buy from you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Inform
