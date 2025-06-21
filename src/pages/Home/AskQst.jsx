import React from 'react';

const AskQst = () => {
    return (
        <div className='mt-5 mb-5'>
            <h2 className='text-4xl font-bold mb-3'>What we do for Our Client ?</h2>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title font-semibold">What services do you offer to clients?</div>
  <div className="collapse-content text-sm">We offer a range of services tailored to meet our clients’ needs, including personalized consultations, legal documentation support, digital solutions, and ongoing advisory services. Each service is designed to ensure quality, reliability, and client satisfaction.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">How do you handle client confidentiality?</div>
  <div className="collapse-content text-sm">We take client confidentiality very seriously. All information shared with us is kept secure, and we adhere to strict data protection policies. Our team signs confidentiality agreements, and our systems are protected with encryption and secure access protocols.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">What is your process for working with new clients?</div>
  <div className="collapse-content text-sm">Our process starts with an initial consultation to understand your needs. We then create a custom service plan, provide a clear proposal, and upon agreement, we begin work with regular updates and checkpoints to ensure transparency and satisfaction.

</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">How do you ensure the quality of your services?</div>
  <div className="collapse-content text-sm">We follow industry best practices, conduct thorough reviews, and gather client feedback at every stage. Our experienced professionals are committed to delivering high-quality outcomes that meet or exceed expectations.</div>
</div>

        </div>
    );
};

export default AskQst;