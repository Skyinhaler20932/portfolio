import grainImage from '@/assets/images/grain.jpg';
import SpeakerIcon from '@/assets/icons/contact-phone.svg';


export const ContactSection = () => {
  return (
  <div className="py-16 pt-12 lg:py-24 lg:pt-20">  
    <div className="container">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
        <div className="absolute inset-0 opacity-5 -z-10" 
        style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>
        <div className= "flex flex-col md:flex-row gap-8 md:gap-16 items-center">
      <div>
      <h2 className="font-serif text-2xl md:text-3xl">Ready to Automate Your Workflow?</h2>
      <p className="text-sm md:text-base mt-2">
        Whether it’s containerization with Docker and Kubernetes, 
        automation with Ansible and Terraform, or building robust 
        monitoring and CI/CD pipelines, 
        {"I’m here to help your team systems to the next level."}
      </p>
      </div>
      <div>
      <button className="text-white bg-gray-900 inline-flex 
        items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
        <span className="font-semibold">Hire Me</span>
        <SpeakerIcon className="size-5"/>
      </button>
      </div>
      </div>
      </div>
    </div>
  </div>
  );
};
