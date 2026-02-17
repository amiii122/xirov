import React from 'react'

const ContactUS = () => {
  return (
    <div>
     {/* Page Header  */}
  <section class="text-center py-16">
    <h1 class="text-4xl font-bold mb-2">Contact Us</h1>
    <p class="text-sm text-gray-500">Home / Contact Us</p>
  </section>

   {/* Main Content  */}
  <section class="max-w-6xl mx-auto px-6 pb-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

      {/*  Left: Contact Info  */}
      <div>
        <h2 class="font-semibold mb-4">Contact information</h2>
        <p class="text-sm font-[400] text-gray-700 mb-8">
          Tortor dignissim convallis aenean et tortor at risus viverra adipiscing
        </p>

         {/* Head Office  */}
        <div class="mb-6">
          <h3 class="font-semibold mb-2">Head Office</h3>
          <p class="text-sm text-gray-600">
            730 Glenstone Ave 65802,<br />
            Springfield, US
          </p>
          <p class="text-sm mt-2">+123 987 321, +123 654</p>
          <p class="text-sm">Roofer@templatesjungle.com</p>
        </div>

       {/* Branch Office  */}
        <div class="mb-6">
          <h3 class="font-semibold mb-2">Branch Office</h3>
          <p class="text-sm text-gray-600">
            730 Glenstone Ave 65802,<br />
            Springfield, US
          </p>
          <p class="text-sm mt-2">+123 987 321, +123 654</p>
          <p class="text-sm">contact@yourcompany.com</p>
        </div>

        {/* Social Info  */}
        <div>
          <h3 class="font-semibold mb-3">Social info</h3>
          <div class="flex gap-4 text-gray-600">
            <span class="cursor-pointer">ⓕ</span>
            <span class="cursor-pointer">ⓧ</span>
            <span class="cursor-pointer">in</span>
            <span class="cursor-pointer">◎</span>
            <span class="cursor-pointer">▶</span>
          </div>
        </div>
      </div>

      {/*  Right: Contact Form  */}
      <div className='font-[400] text-gray-600'>
        <h2 class="font-semibold  mb-2 ">Got any questions?</h2>
        <p class="text-sm text-gray-600 mb-6  ">
          Use the form below to get in touch with us.
        </p>

        <form class="space-y-4">
          {/* <!-- Name & Email --> */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Write Your Name Here"
              class="w-full border rounded-full border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-500"
            />
            <input
              type="email"
              placeholder="Write Your Email Here"
              class="w-full rounded-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-500"
            />
          </div>

          {/* <!-- Phone --> */}
          <input
            type="text"
            placeholder="Phone Number"
            class="w-full rounded-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-500"
          />

          {/* <!-- Subject --> */}
          <input
            type="text"
            placeholder="Write Your Subject Here"
            className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-500"
          />

          {/* <!-- Message --> */}
          <textarea
            rows="4"
            placeholder="Write Your Message Here"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-500"
          ></textarea>

          {/* <!-- Submit --> */}
          <button
            type="submit"
            className="bg-[#532e10] hover:bg-red-800 rounded-sm text-white px-8 py-2 text-sm"
          >
            Submit
          </button>
        </form>
      </div>

    </div>
  </section>


</div>
  )
}

export default ContactUS