import React from 'react';
import deeptissue from '../images/deep-tissue.jpg'
import hotstone from '../images/hot-stone.jpg'
import lymphatic from '../images/lymphatic.jpg'
import therapeutic from '../images/therapeutic.jpg'
import breakingpic from '../images/breakingpic.jpg'

const Services = () => {
    return (
        <div className='container'>
            <div className="d-flex bg-success-subtle p-3">
                <div className='d-flex w-25 container-fluid' style={{backgroundImage: ('../images/breakingpic.jpg')}}>
                {/*<img src={breakingpic} alt='breakingpic' className='rounded mx-auto img-fluid'  />*/}
                <button type="button" className="btn btn-outline-info bg-info-subtle btn-lg text-dark-50 position-absolute" >Book An Appointment</button>
                </div>
                <div>
            <h3 className='text-white'>Services offered at Awesome Massage</h3>
                <h6 className='text-white'>These are the services offered at Awesome Massage</h6>
                </div>
            </div>
            <div className="row justify-content-around  mx-auto">
                <div className="card p-0" style={{width: "18rem"}}>
                <img src={therapeutic} alt='therapeutic' className='card-img-top'  />
                <div className="card-body">
                    <h4 className='card-title text-info text-opacity-75'>Therapeutic Massage</h4>
                    <p className='card-text'>Therapeutic massage combines several different massage modalities and techniques. The therapist
                        will
                        gauge your needs then apply the modality necessary for the most beneficial session using several
                        strokes including swedish and myofascial techniques. Our goal with therapeutic massage is to be
                        therapeutic and work out your muscle tension to relieve aches and pains, but with less pressure
                        than
                        a deep tissue session. </p>
                </div>
                </div>
                <div className="card p-0 text-start" style={{width: "18rem"}}>
                    <img src={deeptissue} alt='deep-tissue' className='card-img-top'/>
                    <div className="card-body">
                    <h4 className='card-title text-info text-opacity-75'>Deep Tissue Massage</h4>
                    <p className='card-text'>Deep tissue massage focuses on the deeper layers of thick muscle tissue to unstick the fibers of
                        the
                        muscles and release both toxins and deeply held tension points. Your therapist utilizes both
                        trigger
                        point therapy & sports massage techniques during session and you'll find that your body will
                        continue to respond and release for a few days following treatment. If you are big-n-tall or
                        want
                        sciatic work, please book deep tissue or cbd. </p>
                    </div>
                </div>
                <div className="card text-start p-0 fst-italic" style={{width: "18rem"}}>
                    <img src={lymphatic} alt='lymphatic' className='card-img-top'/>
                    <div className="card-body">
                    <h4 className='card-title text-info text-opacity-75 fst-italic'>Lymphatic Drainage</h4>
                    <p className='card-text'>The main function of the lymphatic system is detoxification. Our session starts with resisted
                        expansion of the rib cage, pressure on naval area where the biggest lymphatic vessels the
                        cisterna
                        chyli are. We then move onto circular motions on the neck, followed by the armpits, arms, legs
                        and
                        back opening valves to allow accumulated lymph to drain through proper channels. Our session is
                        designed with particular focus on the lymph system. We use proper techniques as set by the
                        Associated Bodywork Association. We work the entire lymphatic system as a whole, not just a
                        singular
                        focus area.</p>
                    </div>
                </div>
                <div className="card  text-start fst-italic p-0" style={{width: "18rem"}}>
                    <img src={hotstone} alt='hot-stone' className='card-img-top'/>
                    <div className="card-body">
                    <h4 className='card-title text-info text-opacity-75 fst-italic'>Hot Stone Massage</h4>
                    <p className='card-text' >Specially designed Hot Stones lathered in jojoba oil will be incorporated into your massage and
                        be
                        used in intervals on and off during your entire booked session.
                        Heat from the stones penetrates directly to the deeper layers of muscle tissue which can ease
                        pain
                        and spasms, and can be extremely relaxing and effective in releasing tension and inflammation
                        while
                        promoting a positive sense of comfort and well-being. Please be aware that you may occasionally
                        hear
                        some clanking of the stones. </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;