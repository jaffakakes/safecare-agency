import Image from 'next/image';
import Link from 'next/link';

const imageLinks = [
  'https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/oldmanchess.jpg?alt=media&token=c11021bd-de2b-4f50-9ed6-9612b2a60279',
  'https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/handshake.jpg?alt=media&token=35916921-bb18-4bf4-8082-7e40151a4aa6',
];
const Links = [
  '/ServicePage?service=health-social-care',
  '/ServicePage?service=nursing-agency',
];

export default function Services() {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold mb-6 text-gray-600">Services We Provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {['Health and Social Care', 'Nursing & Residential Care'].map((service, index) => (
          <Link key={service} href={Links[index]}>
           
              <div className="relative overflow-hidden group shadow-lg rounded bg-white" style={{position: "relative", height: 0, paddingBottom: "50%"}}>
                <Image src={imageLinks[index]} alt={service} layout="responsive" objectFit="cover" width={500} height={300} />
                <div className="absolute inset-0 bg-gray-500 bg-opacity-50 transition-opacity duration-500 ease-in-out group-hover:bg-opacity-0" />
                <h3 className="absolute bottom-0 text-2xl font-bold text-white z-10 p-4">{service}</h3>
              </div>

          </Link>
        ))}
      </div>
    </div>
  );
}


