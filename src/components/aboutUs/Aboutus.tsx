// AboutUs.tsx
import { FC } from 'react';
import Image from 'next/image'; // Import Image from 'next/image'

const AboutUs: FC = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-20">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-10">
          Welcome to our restaurant! We pride ourselves on providing a delightful dining experience
          with fresh ingredients, a cozy ambiance, and impeccable service. Whether you’re here for a
          quick bite or a fine dining experience, we’ve got something to satisfy every palate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJHnRT57Mrf3Hip_z3sn1DpfKWraUTfjKNA&s"
            alt="Restaurant Interior"
            width={500}
            height={400}
            className="rounded-lg object-cover"
            unoptimized // Disable optimization (optional)
            onError={(e) => {
              e.currentTarget.src = '/fallback-image.jpg'; // Provide a fallback image path
            }}
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Our journey began with a passion for bringing people together through food. From
              traditional dishes to contemporary flavors, we’ve crafted a menu that celebrates the
              best of both worlds. Our chefs use locally sourced ingredients to create dishes that
              are not only delicious but also sustainable.
            </p>
            <p className="text-gray-600">
              Whether you’re celebrating a special occasion or just looking for a warm meal, we are
              dedicated to making every visit memorable. Thank you for choosing us as your dining
              destination!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
