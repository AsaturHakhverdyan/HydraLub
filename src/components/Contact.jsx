import mapimg from '../assects/Map.png'

function Contact() {
  return ( 
    <div className='grid gap-4 md:grid-cols-2 my-6'>
      <div className='relative '>
          <div className='px-4 block sm:hidden  '>
            <div className='bg-green-500 rounded-3xl text-white px-4 py-3'>
              <h2 className='font-[600] text-xl'>Contacts</h2>
              <p className='py-4 text-base'>Offices:</p>
              <p className='text-sm'>Vardges Petrosyan 16</p>
              <p className='text-sm'>Ahtarak, Aragatsotn 0201,AM</p>
              <h2 className='py-3'>E-Mail:</h2>
              <p className='text-sm'>info@hydralub.com</p>
              <h2 className='py-4'>Social Media:</h2>
              <p className='font-bold text-2xl'>in</p>
            </div>
          </div>
          <div className='w-full'>
            <img src={mapimg} alt="/" className='w-full md:rounded-tr-3xl rounded-br-3xl' />
          </div>
          <div className='hidden sm:block absolute top-8  left-16 p-8 bg-green-500 rounded-3xl text-white px-4 '>
            <h2 className='font-[600] text-xl'>Contacts</h2>
            <p className='py-4 text-base'>Offices:</p>
            <p className='text-sm'>Vardges Petrosyan 16</p>
            <p className='text-sm'>Ahtarak, Aragatsotn 0201,AM</p>
            <h2 className='py-3'>E-Mail:</h2>
            <p className='text-sm'>info@hydralub.com</p>
            <h2 className='py-4'>Social Media:</h2>
            <p className='font-bold text-2xl'>in</p>
          </div>
      </div>
      <div className='w-full px-4 mt-10'>
        <form className='w-full'>
            <label>Name</label>
            <input type="text" className='w-full mb-3 border border-gray-600 p-2.5 rounded-3xl outline-none'/>
            <label>Phone</label>
            <input type="number" className='w-full mb-3 border border-gray-600 p-2.5 rounded-3xl outline-none'/>
            <label>E-mail</label>
            <input type="email" className='w-full mb-3 border border-gray-600 p-2.5 rounded-3xl outline-none'/>
            <label>What would you like to discuss?</label>
            <textarea
            rows={4}
             className='w-full border border-gray-600 p-2.5 rounded-3xl outline-none resize-none'
             >
            </textarea>
            <div className='flex justify-end my-5'>
                <button
                className='px-4 py-1 mr-4 text-green-500 text-xl border border-green-500 rounded-md'>
                  Schidule a Call
                </button>
                <button
                  className=' text-white bg-green-500 text-xl  px-5 py-1.5 rounded-md'>
                  Submit
                </button>
            </div>
        </form>
      </div>
    </div>
   );
}

export default Contact;