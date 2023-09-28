import React, { Component } from 'react';

class CertificateCard extends Component {
  render() {
    const { title, image, description } = this.props;
    const imageStyle = {
      maxWidth: '300px', // ให้รูปภาพมีขนาดเต็มความกว้างของการ์ด
      height: 'auto',   // รักษาอัตราส่วนของรูปภาพ
    };
    const cardStyle = {
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '16px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.2s',
      cursor: 'pointer',
    };

    return (
      <div className="certificate-card" style={cardStyle}>
        <h2>{title}</h2>
        <img src={image} alt={title} style={imageStyle} />
        <p>{description}</p>
      </div>
    );
  }
}

export default CertificateCard;