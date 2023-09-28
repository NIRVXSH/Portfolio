import React, { Component } from 'react';
import CertificateCard from '../components/CertificateCard';
import Social from '../components/Social';

class Certificate extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Certificates</h1>
        <div className="certificate-grid">
          <CertificateCard
            title="Certificate 1"
            image={require('../img/certificate/Backend.jpg')}
            description="Study about Basic Backend Developer"
          />
          <CertificateCard
            title="Certificate 2"
            image={require('../img/certificate/Go_Ecommerce.jpg')}
            description="Study about RESTFUL API with Go lang"
          />
          <CertificateCard
            title="Certificate 3"
            image={require('../img/certificate/IPV6.jpg')}
            description="Study about Web Development"
          />
            <CertificateCard
              title="Certificate 4"
              image={require('../img/certificate/testingmahidol-1.png')}
              description="Study about Web Development"
            />
            
          
          <CertificateCard
            title="Certificate 5"
            image={require('../img/certificate/borntodev.png')}
            description="Study about Web Development"
          />
          <CertificateCard
            title="Certificate 6"
            image={require('../img/certificate/borntodev-acdemy_GitHub for Developer _certifiacte.png')}
            description="Study about Web Development"
          />
          <CertificateCard
            title="Certificate 7"
            image={require('../img/certificate/borntodev_ChatGPT.png')}
            description="Study about how to use ChatGPT with best command"
          />
          <CertificateCard
            title="Certificate 8"
            image={require('../img/certificate/excelmahidol-1.png')}
            description="Study about using microsoft excel"
          />
        </div>

      </div>
    );
  }
}

export default Certificate;
