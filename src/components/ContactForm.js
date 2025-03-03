import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: ${props => props.backgroundColor || 'white'};
  border-radius: 8px;
  box-shadow: ${props => props.withShadow ? '0 4px 15px rgba(0, 0, 0, 0.08)' : 'none'};
  padding: ${props => props.padding || '30px'};
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || '1fr'};
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 8px;
  color: #555;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #e07a5f;
  }
`;

const Textarea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #e07a5f;
  }
`;

const Select = styled.select`
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z' fill='%23555'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #e07a5f;
  }
`;

const SubmitButton = styled.button`
  background-color: #e07a5f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  justify-self: ${props => props.align || 'start'};
  
  &:hover {
    background-color: #d35f44;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const FormMessage = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  font-size: 0.95rem;
  background-color: ${props => props.success ? '#e9f7ef' : '#fdecea'};
  color: ${props => props.success ? '#2ecc71' : '#e74c3c'};
  border-left: 4px solid ${props => props.success ? '#2ecc71' : '#e74c3c'};
`;

const ContactForm = ({
  title,
  backgroundColor,
  withShadow = true,
  padding,
  submitButtonAlign = 'start',
  inquiryTypes = ['General Inquiry', 'Adoption Questions', 'Donation Information', 'Volunteer Opportunities', 'Other']
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <FormContainer backgroundColor={backgroundColor} withShadow={withShadow} padding={padding}>
      {title && <h3 style={{ marginBottom: '20px' }}>{title}</h3>}
      
      {formStatus.submitted && (
        <FormMessage success={formStatus.success}>
          {formStatus.message}
        </FormMessage>
      )}
      
      <Form onSubmit={handleSubmit}>
        <FormRow columns="1fr 1fr">
          <FormGroup>
            <Label htmlFor="name">Full Name *</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email Address *</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </FormGroup>
        </FormRow>
        
        <FormRow columns="1fr 1fr">
          <FormGroup>
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="inquiryType">Type of Inquiry *</Label>
            <Select 
              id="inquiryType" 
              name="inquiryType" 
              value={formData.inquiryType} 
              onChange={handleChange} 
              required
            >
              <option value="">Select an option</option>
              {inquiryTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </Select>
          </FormGroup>
        </FormRow>
        
        <FormGroup>
          <Label htmlFor="message">Message *</Label>
          <Textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </FormGroup>
        
        <SubmitButton type="submit" disabled={loading} align={submitButtonAlign}>
          {loading ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
