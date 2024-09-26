function Midel() {
  return (
    <div className="text-center py-12">
      <h2 className="text-4xl font-semibold mb-4">Here are some of the benefits of your offer</h2>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Explain what makes your product or service great. Talk about features in a way 
        that highlights the real value people get out of them.
      </p>
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="flex flex-col items-center">
          <img 
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png" 
            alt="Benefit 1 Icon" 
            className="w-24 mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Benefit 1</h3>
          <p className="text-gray-600 text-center">
            For example, restaurants and bakeries could outline the health benefits of their 
            all-natural ingredients.
          </p>
        </div>
        

        <div className="flex flex-col items-center">
          <img 
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png" 
            alt="Benefit 2 Icon" 
            className="w-24 mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Benefit 2</h3>
          <p className="text-gray-600 text-center">
            Florists and other small retailers might use this space to describe how their products make 
            delightful, one-of-a-kind gifts.
          </p>
        </div>
        
  
        <div className="flex flex-col items-center">
          <img 
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png" 
            alt="Benefit 3 Icon" 
            className="w-24 mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Benefit 3</h3>
          <p className="text-gray-600 text-center">
            You could also add buttons to this section and share links to other products or available delivery methods.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Midel
